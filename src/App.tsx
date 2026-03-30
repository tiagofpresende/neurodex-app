import { useState, useEffect } from 'react';
import { Landing } from './components/Landing';
import { Consent } from './components/Consent';
import { DemographicsForm } from './components/Demographics';
import { BlockIntro } from './components/BlockIntro';
import { QuestionCard } from './components/QuestionCard';
import { ProgressBar } from './components/ProgressBar';
import { ProcessingScreen } from './components/ProcessingScreen';
import { ResumePrompt } from './components/ResumePrompt';
import { Dashboard } from './components/Dashboard';

import { useSession } from './hooks/useSession';
import { useShuffledQuestions } from './hooks/useShuffledQuestions';
import { blocks } from './data/blocks';
import { texts } from './data/texts';
import { calculateScores } from './engine/scoringEngine';
import { classifyProfile } from './engine/profileClassifier';
import { detectFlags } from './engine/flagDetector';
import { DimensionalScores, Profile, Flag, Demographics } from './engine/types';

type ViewState = 'landing' | 'consent' | 'demographics' | 'block_intro' | 'question' | 'processing' | 'dashboard';

function App() {
  const { session, hasSavedSession, createSession, restoreSession, clearSession, updateAnswers, updateProgress, updateDemographics, markCompleted } = useSession();
  
  const [viewState, setViewState] = useState<ViewState>('landing');
  const [blockIndex, setBlockIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);

  // Resultados calculados
  const [scores, setScores] = useState<DimensionalScores | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [flags, setFlags] = useState<Flag[]>([]);

  // Carregar questions para o bloco atual apenas se estiver em sessão
  const currentQuestions = useShuffledQuestions(blockIndex, session?.seed || 0);

  // Quando o usuário retoma uma sessão
  const handleResume = () => {
    restoreSession();
    // Reconstroi o view state com base no session
    if (!session) {
      setTimeout(() => {
        // Usa location.reload() se o session demorar a atualizar (hack de re-render simples) 
        window.location.reload(); 
      }, 100);
      return;
    }
  };

  useEffect(() => {
    if (session) {
      if (session.completed) {
        processResults(session.answers);
      } else if (!session.demographics) {
        setViewState('demographics');
      } else {
        setBlockIndex(session.currentBlock);
        if (session.currentItemInBlock === 0 && session.currentBlock !== 0 && !session.answers[currentQuestions[0]?.id]) {
          // Precisamos mostrar intro
          setViewState('block_intro');
        } else {
          setItemIndex(session.currentItemInBlock);
          setViewState('question');
        }
      }
    }
  }, [session, currentQuestions]);

  const handleStart = () => {
    setViewState('consent');
  };

  const handleConsent = () => {
    createSession();
    setViewState('demographics');
  };

  const handleDemographics = (demo: Demographics) => {
    updateDemographics(demo);
    setBlockIndex(0);
    setItemIndex(0);
    setViewState('block_intro');
  };

  const handleBlockIntroContinue = () => {
    setViewState('question');
  };

  const handleAnswer = (value: number) => {
    if (!session) return;
    
    const currentQ = currentQuestions[itemIndex];
    updateAnswers(currentQ.id, value);

    if (itemIndex < currentQuestions.length - 1) {
      // Proxima questão do mesmo bloco
      setItemIndex(itemIndex + 1);
      updateProgress(blockIndex, itemIndex + 1);
    } else {
      // Fim do bloco
      if (blockIndex < blocks.length - 1) {
        setBlockIndex(blockIndex + 1);
        setItemIndex(0);
        updateProgress(blockIndex + 1, 0);
        setViewState('block_intro');
      } else {
        // Fim da avaliação
        markCompleted();
        // Atraso intencional para ver o último item mudar a cor
        setTimeout(() => {
          processResults(session.answers);
        }, 500);
      }
    }
  };

  const handleBack = () => {
    if (itemIndex > 0) {
      setItemIndex(itemIndex - 1);
      updateProgress(blockIndex, itemIndex - 1);
    } else if (blockIndex > 0) {
      // Volta para o último item do bloco anterior
      setBlockIndex(blockIndex - 1);
      // Obs: The questions array changes! Relying on hook. This works because React will render QuestionCard with old questions first line.
      setItemIndex(11); // 12 itens por bloco
      updateProgress(blockIndex - 1, 11);
    }
  };

  const processResults = (answersObject: Record<string, number>) => {
    setViewState('processing');
    
    setTimeout(() => {
      const answersMap = new Map<string, number>(Object.entries(answersObject));
      const calcScores = calculateScores(answersMap);
      const calcProfile = classifyProfile(calcScores);
      const calcFlags = detectFlags(answersMap, calcScores);
      
      setScores(calcScores);
      setProfile(calcProfile);
      setFlags(calcFlags);
      setViewState('dashboard');
    }, 2000); // 2 segundos de processamento simulado
  };

  const handleRestart = () => {
    if (window.confirm("Tem certeza? Todo o progresso será perdido.")) {
      clearSession();
      setViewState('landing');
      setBlockIndex(0);
      setItemIndex(0);
    }
  };

  const handleCancelResume = () => {
    clearSession();
  };

  // Calculos da ProgressBar
  const totalItems = 84;
  const completedItems = (blockIndex * 12) + itemIndex;
  const globalProgress = Math.min(100, (completedItems / totalItems) * 100);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {hasSavedSession && (
        <ResumePrompt onResume={handleResume} onRestart={handleCancelResume} />
      )}

      {viewState === 'landing' && <Landing onStart={handleStart} />}
      
      {viewState === 'consent' && <Consent onAccept={handleConsent} />}
      
      {viewState === 'demographics' && <DemographicsForm onComplete={handleDemographics} />}
      
      {viewState === 'block_intro' && (
        <BlockIntro block={blocks[blockIndex]} onContinue={handleBlockIntroContinue} />
      )}
      
      {viewState === 'question' && session && (
        <>
          <ProgressBar 
            globalProgress={globalProgress}
            currentBlockIndex={blockIndex}
            currentItemInBlock={itemIndex}
            totalItemsInBlock={currentQuestions.length}
            blockTitle={blocks[blockIndex].title}
          />
          <QuestionCard 
            question={currentQuestions[itemIndex]}
            currentAnswer={session.answers[currentQuestions[itemIndex]?.id]}
            onAnswer={handleAnswer}
            onBack={handleBack}
            canGoBack={blockIndex > 0 || itemIndex > 0}
          />
          {/* Footer de disclaimer padrão exigido pela spec */}
          <div className="fixed bottom-0 w-full p-3 text-center text-xs text-text bg-surface/80 backdrop-blur">
            {texts.disclaimer}
          </div>
        </>
      )}

      {viewState === 'processing' && <ProcessingScreen />}

      {viewState === 'dashboard' && scores && profile && session && session.demographics && (
        <Dashboard 
          scores={scores} 
          profile={profile} 
          flags={flags} 
          demographics={session.demographics} 
          answersMap={session.answers} 
          onRestart={handleRestart} 
        />
      )}

    </div>
  );
}

export default App;
