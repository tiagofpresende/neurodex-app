interface ProgressBarProps {
  globalProgress: number; // 0 to 100
  currentBlockIndex: number;
  currentItemInBlock: number;
  totalItemsInBlock: number;
  blockTitle: string;
}

export function ProgressBar({ 
  globalProgress, 
  currentBlockIndex, 
  currentItemInBlock, 
  totalItemsInBlock,
  blockTitle
}: ProgressBarProps) {
  return (
    <div className="w-full bg-white border-b border-lavender-100 shadow-sm sticky top-0 z-10">
      {/* Global Progress Bar Thin Line */}
      <div className="w-full h-1.5 bg-lavender-100">
        <div 
          className="h-full bg-ocean-500 transition-all duration-300 ease-out"
          style={{ width: `${globalProgress}%` }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between text-sm">
        <div className="font-semibold text-ocean-900 truncate pr-4">
          <span className="hidden sm:inline">Bloco {currentBlockIndex + 1}: </span>
          {blockTitle}
        </div>
        
        <div className="font-medium text-text tabular-nums whitespace-nowrap">
          Pergunta {currentItemInBlock + 1} de {totalItemsInBlock}
        </div>
      </div>
    </div>
  );
}
