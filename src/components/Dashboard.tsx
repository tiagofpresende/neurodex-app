import { DimensionalScores, Profile, Flag, Demographics } from '../engine/types';
import { ProfileCard } from './ProfileCard';
import { RadarChart } from './RadarChart';
import { DimensionBars } from './DimensionBars';
import { FlagAlerts } from './FlagAlerts';
import { texts } from '../data/texts';
import { Download, RefreshCw } from 'lucide-react';
import { generatePdf } from '../pdf/generatePdf';

interface DashboardProps {
  scores: DimensionalScores;
  profile: Profile;
  flags: Flag[];
  demographics: Demographics;
  onRestart: () => void;
  answersMap: Record<string, number>;
}

export function Dashboard({ scores, profile, flags, demographics, onRestart, answersMap }: DashboardProps) {
  const handleExport = async () => {
    await generatePdf({ scores, profile, flags, demographics, answersMap });
  };

  return (
    <div className="min-h-screen bg-surface p-4 sm:p-6 pb-24">
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        <div className="text-center space-y-3 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-ocean-900">Seus Resultados</h1>
          <p className="text-text max-w-2xl mx-auto">
            Abaixo estão os indicadores mapeados a partir das suas respostas. Lembre-se que este documento é um rastreio orientativo para embasar sessões futuras.
          </p>
        </div>

        <ProfileCard profile={profile} />

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-lavender-100">
           <h3 className="text-xl font-bold text-ocean-900 mb-6 text-center">Mapeamento Dimensional</h3>
           <RadarChart scores={scores} />
        </div>

        <DimensionBars scores={scores} />

        <FlagAlerts flags={flags} />

        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <button 
            onClick={handleExport}
            className="flex-1 flex items-center justify-center gap-2 bg-ocean-700 hover:bg-ocean-900 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg active:scale-95"
          >
            <Download className="w-5 h-5" />
            {texts.common.exportPdf}
          </button>
          
          <button 
            onClick={onRestart}
            className="flex items-center justify-center gap-2 bg-white hover:bg-lavender-100 text-ocean-700 border border-lavender-300 font-semibold py-4 px-6 rounded-xl transition-all shadow-sm active:scale-95"
          >
            <RefreshCw className="w-5 h-5" />
            {texts.common.restart}
          </button>
        </div>

      </div>

      <div style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}>
        <div id="pdf-radar-chart-container" className="bg-white p-4">
           {/* RadarChart size hard-coded logic allows export nicely scaled */}
           <RadarChart scores={scores} pdfMode={true} />
        </div>
      </div>
    </div>
  );
}
