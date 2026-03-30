import { BrainCircuit, Play } from 'lucide-react';
import { texts } from '../data/texts';

interface LandingProps {
  onStart: () => void;
}

export function Landing({ onStart }: LandingProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-surface">
      <div className="max-w-md w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="flex justify-center">
          <div className="bg-ocean-100 p-4 rounded-full">
            <BrainCircuit className="w-16 h-16 text-ocean-700" />
          </div>
        </div>
        
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-ocean-900 tracking-tight">
            {texts.landing.title}
          </h1>
          <h2 className="text-lg font-medium text-ocean-700">
            {texts.landing.subtitle}
          </h2>
        </div>
        
        <p className="text-text leading-relaxed">
          {texts.landing.description}
        </p>

        <button
          onClick={onStart}
          className="w-full flex items-center justify-center gap-2 bg-ocean-700 hover:bg-ocean-900 text-white font-semibold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95"
        >
          {texts.landing.startBtn}
          <Play className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
