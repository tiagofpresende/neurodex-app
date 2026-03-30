import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { BlockConfig } from '../data/blocks';
import { texts } from '../data/texts';

interface BlockIntroProps {
  block: BlockConfig;
  onContinue: () => void;
}

export function BlockIntro({ block, onContinue }: BlockIntroProps) {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center p-6 bg-surface">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-lavender-100 text-center space-y-8"
      >
        <div className="inline-flex py-1 px-3 bg-ocean-100 text-ocean-900 font-semibold rounded-full text-sm">
          Módulo {block.id + 1} de 7
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-ocean-900">
          {block.title}
        </h2>
        
        <p className="text-lg text-text leading-relaxed">
          {block.motivationalText}
        </p>

        <div className="flex items-center justify-center gap-2 text-ocean-700 bg-ocean-100/50 py-3 rounded-xl">
          <Clock className="w-5 h-5" />
          <span className="font-medium">Tempo estimado: {block.estimatedTime}</span>
        </div>

        <button
          onClick={onContinue}
          className="w-full mt-4 flex items-center justify-center gap-2 bg-ocean-700 hover:bg-ocean-900 text-white font-semibold py-4 px-8 rounded-xl transition-all shadow-md active:scale-95"
        >
          {texts.common.next}
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
}
