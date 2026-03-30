import { BrainCircuit } from 'lucide-react';
import { texts } from '../data/texts';

export function ProcessingScreen() {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-6">
      <div className="relative">
        <div className="absolute inset-0 bg-ocean-300 rounded-full animate-ping opacity-20 scale-150"></div>
        <div className="absolute inset-0 bg-ocean-500 rounded-full animate-ping opacity-20 scale-110" style={{ animationDelay: '300ms' }}></div>
        
        <div className="relative bg-white p-6 rounded-full shadow-lg">
          <BrainCircuit className="w-12 h-12 text-ocean-700 animate-pulse" />
        </div>
      </div>
      
      <h3 className="mt-12 text-xl font-medium text-ocean-900 animate-pulse">
        {texts.common.processing}
      </h3>
    </div>
  );
}
