import { DimensionalScores, Dimension } from '../engine/types';
import { SCORING_THRESHOLDS } from '../data/scoring';
import { normalizeScore } from '../utils/normalize';

export function DimensionBars({ scores }: { scores: DimensionalScores }) {
  const dimensionsToDisplay = Object.values(Dimension); // All dimensions

  return (
    <div className="space-y-6">
      <h4 className="text-xl font-bold text-ocean-900 px-1">Suas Dimensões em Detalhe</h4>
      <div className="grid gap-4 bg-white p-6 rounded-2xl border border-lavender-100 shadow-sm">
        {dimensionsToDisplay.map((dim, idx) => {
          const raw = scores[dim];
          const tr = SCORING_THRESHOLDS[dim];
          if (!tr) return null; // Fallback
          
          const pct = normalizeScore(raw, tr.max);
          const thresholdPct = normalizeScore(tr.threshold, tr.max);
          const isAbove = raw >= tr.threshold;

          return (
            <div key={idx} className="space-y-2">
              <div className="flex justify-between items-end text-sm">
                <span className="font-semibold text-ocean-900">{tr.label}</span>
                <span className={`font-bold ${isAbove ? 'text-ocean-700' : 'text-text'}`}>
                  {raw} <span className="text-xs font-normal opacity-70">/ {tr.max}</span>
                </span>
              </div>
              
              <div className="relative w-full h-3 bg-lavender-100 rounded-full overflow-hidden">
                {/* Indicador de Limiar Sugestivo */}
                <div 
                  className="absolute top-0 bottom-0 w-0.5 bg-accent-red/50 z-10" 
                  style={{ left: `${thresholdPct}%` }}
                />
                
                {/* Barra de Progresso */}
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${isAbove ? 'bg-ocean-500' : 'bg-lavender-500'}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              {isAbove && <p className="text-xs text-ocean-700 mt-1 font-medium">Acima do limiar sugestivo</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
