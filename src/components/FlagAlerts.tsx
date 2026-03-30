import { Flag } from '../engine/types';
import { AlertTriangle } from 'lucide-react';

export function FlagAlerts({ flags }: { flags: Flag[] }) {
  if (!flags || flags.length === 0) return null;
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-bold text-ocean-900 px-1">Indicadores Especiais (Flags)</h4>
      <div className="grid gap-3 sm:grid-cols-2">
        {flags.map((flag, idx) => (
          <div key={idx} className="flex gap-4 p-5 bg-orange-50/80 border border-orange-200/60 rounded-2xl">
            <AlertTriangle className="w-6 h-6 flex-shrink-0 text-orange-500 mt-0.5" />
            <div className="flex flex-col">
              <span className="font-bold text-ocean-900 mb-1 leading-tight uppercase text-sm tracking-wider">
                {flag.type.replace('_', ' ')}
              </span>
              <span className="text-sm text-text font-medium leading-relaxed">
                {flag.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
