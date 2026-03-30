import { Radar, RadarChart as RechartsRadar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { DimensionalScores, Dimension } from '../engine/types';
import { SCORING_THRESHOLDS } from '../data/scoring';
import { normalizeScore } from '../utils/normalize';

interface Props {
  scores: DimensionalScores;
  pdfMode?: boolean;
}

export function RadarChart({ scores, pdfMode = false }: Props) {
  // Configurar as dimensões para exibir no radar (apenas as top-level / comparáveis)
  // Ignorando PERS, DUAL_EXC e FUNC para não distorcer visualmente habilidades x déficits
  const dimsToChart = [
    Dimension.TDAH_IN,
    Dimension.TDAH_HI,
    Dimension.AHSD_INT,
    Dimension.AHSD_EMO,
    Dimension.AHSD_SEN,
    Dimension.AHSD_PSI,
    Dimension.AHSD_IMA,
    Dimension.AHSD_HAB
  ];

  const data = dimsToChart.map(dim => {
    const raw = scores[dim];
    const threshold = SCORING_THRESHOLDS[dim];
    return {
      subject: threshold.label.replace('AH/SD — ', '').replace('TDAH — ', '').substring(0, 15) + '...',
      fullLabel: threshold.label,
      value: normalizeScore(raw, threshold.max),
      fullMark: 100
    };
  });

  const chart = (
    <RechartsRadar cx="50%" cy="50%" outerRadius={pdfMode ? "70%" : "60%"} data={data}>
      <PolarGrid stroke="#E2E8F0" />
      <PolarAngleAxis 
        dataKey={pdfMode ? "fullLabel" : "subject"} 
        tick={{ fill: '#1B4965', fontSize: pdfMode ? 10 : 12, fontWeight: 500 }} 
      />
      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
      <Radar 
        name="Seu Perfil" 
        dataKey="value" 
        stroke="#2D6A8F" 
        fill="#5FA8D3" 
        fillOpacity={0.5} 
      />
    </RechartsRadar>
  );

  if (pdfMode) {
    // Retorna sem ResponsiveContainer, tamanho fixo
    return (
      <div style={{ width: 600, height: 500, margin: '0 auto' }}>
        <RechartsRadar width={600} height={500} cx="50%" cy="50%" outerRadius="65%" data={data}>
          <PolarGrid stroke="#E2E8F0" />
          <PolarAngleAxis dataKey="fullLabel" tick={{ fill: '#1B4965', fontSize: 13, fontWeight: 600 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar name="Seu Perfil" dataKey="value" stroke="#2D6A8F" fill="#5FA8D3" fillOpacity={0.5} />
        </RechartsRadar>
      </div>
    );
  }

  return (
    <div className="w-full h-[350px] md:h-[450px]">
      <ResponsiveContainer width="100%" height="100%">
        {chart}
      </ResponsiveContainer>
    </div>
  );
}
