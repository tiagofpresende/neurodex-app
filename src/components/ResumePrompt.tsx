import { texts } from '../data/texts';
import { RotateCcw, Play } from 'lucide-react';

interface ResumePromptProps {
  onResume: () => void;
  onRestart: () => void;
}

export function ResumePrompt({ onResume, onRestart }: ResumePromptProps) {
  return (
    <div className="fixed inset-0 bg-ocean-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        <div className="flex justify-center mb-6">
          <div className="bg-ocean-100 p-4 rounded-full text-ocean-700">
            <RotateCcw className="w-8 h-8" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-center text-ocean-900 mb-2">
          {texts.common.resumePromptTitle}
        </h3>
        <p className="text-center text-text mb-8">
          {texts.common.resumePromptText}
        </p>

        <div className="space-y-3">
          <button
            onClick={onResume}
            className="w-full flex items-center justify-center gap-2 bg-ocean-700 hover:bg-ocean-900 text-white font-semibold py-3.5 px-4 rounded-xl transition-all shadow-md active:scale-95"
          >
            {texts.common.resumeYes}
            <Play className="w-4 h-4" />
          </button>
          
          <button
            onClick={onRestart}
            className="w-full font-medium py-3.5 px-4 rounded-xl text-ocean-700 hover:bg-ocean-50 transition-colors"
          >
            {texts.common.resumeNo}
          </button>
        </div>
      </div>
    </div>
  );
}
