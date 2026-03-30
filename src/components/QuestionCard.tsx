import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { QuestionItem } from '../engine/types';
import { texts } from '../data/texts';

interface QuestionCardProps {
  question: QuestionItem;
  currentAnswer?: number;
  onAnswer: (value: number) => void;
  onBack: () => void;
  canGoBack: boolean;
}

export function QuestionCard({ question, currentAnswer, onAnswer, onBack, canGoBack }: QuestionCardProps) {
  const [selectedValue, setSelectedValue] = useState<number | undefined>(currentAnswer);

  // Sync state if props change (especially useful during navigation)
  useEffect(() => {
    setSelectedValue(currentAnswer);
  }, [question.id, currentAnswer]);

  const handleSelect = (val: number) => {
    // Taptic feedback se disponível
    if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }
    
    setSelectedValue(val);
    
    // Auto-advance delay
    setTimeout(() => {
      onAnswer(val);
    }, 400);
  };

  return (
    <div className="flex flex-col flex-1 h-full max-w-2xl w-full mx-auto p-4 sm:p-6 pb-20">
      {canGoBack && (
        <button 
          onClick={onBack}
          className="flex items-center text-ocean-700 font-medium mb-6 hover:text-ocean-900 transition-colors w-max"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          {texts.common.back}
        </button>
      )}

      <div className="flex-1 flex flex-col justify-center relative min-h-[400px]">
        {/* Usamos o id da questão como key para o Framer Motion saber que o componente mudou */}
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-lavender-100 flex flex-col justify-between"
          >
            <h3 className="text-xl sm:text-2xl font-medium text-ocean-900 mb-8 sm:mb-12 leading-relaxed text-center">
              {question.text}
            </h3>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full mt-auto">
              {texts.likertLabels.map((label, index) => {
                const isSelected = selectedValue === index;
                return (
                  <button
                    key={index}
                    onClick={() => handleSelect(index)}
                    className={`
                      flex-1 py-4 px-2 rounded-xl text-sm sm:text-base font-medium transition-all duration-200 border-2 active:scale-95
                      ${isSelected 
                        ? 'bg-ocean-700 border-ocean-700 text-white shadow-md' 
                        : 'bg-surface border-lavender-300 text-text hover:border-ocean-300 hover:bg-ocean-100/50'}
                    `}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
