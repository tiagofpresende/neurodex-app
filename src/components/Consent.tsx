import { useState } from 'react';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';
import { texts } from '../data/texts';

interface ConsentProps {
  onAccept: () => void;
}

export function Consent({ onAccept }: ConsentProps) {
  const [acceptedTodos, setAcceptedTodos] = useState(false);

  return (
    <div className="min-h-screen bg-surface p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-lavender-100 space-y-6">
        <div className="flex items-center gap-3 text-ocean-900 mb-6">
          <ShieldAlert className="w-8 h-8 flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold">{texts.consent.title}</h2>
        </div>

        <div className="space-y-4 text-text leading-relaxed">
          <p className="font-medium bg-lavender-100 p-4 rounded-lg border border-lavender-300">
            {texts.consent.text1}
          </p>
          <p>
            {texts.consent.text2}
          </p>
        </div>

        <div className="bg-ocean-100/50 p-5 rounded-xl space-y-3">
          <h3 className="font-semibold text-ocean-900">Ao prosseguir, declaro que:</h3>
          <ul className="space-y-3">
            {texts.consent.bullets.map((bullet, idx) => (
              <li key={idx} className="flex gap-3 text-ocean-900/80">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-ocean-500" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <label className="flex items-start gap-4 p-4 border border-lavender-300 rounded-xl cursor-pointer hover:bg-surface transition-colors">
          <input 
            type="checkbox" 
            className="w-6 h-6 mt-1 rounded text-ocean-700 focus:ring-ocean-500 cursor-pointer"
            checked={acceptedTodos}
            onChange={(e) => setAcceptedTodos(e.target.checked)}
          />
          <span className="font-medium text-text select-none">
            {texts.consent.acceptBtn}
          </span>
        </label>

        <button
          onClick={onAccept}
          disabled={!acceptedTodos}
          className="w-full bg-ocean-700 hover:bg-ocean-900 disabled:bg-lavender-300 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all shadow-md mt-6"
        >
          {texts.common.next}
        </button>
      </div>
    </div>
  );
}
