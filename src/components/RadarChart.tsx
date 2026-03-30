import { Radar, RadarChart as RechartsRadar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { DimensionalScores, Dimension } from '../engine/types';
import { SCORING_THRESHOLDS } from '../data/scoring';
import { normalizeScore } from '../utils/normalize';

interface Props {
  scores: DimensionalScores;
  pdfMode?: boolean;
}

export function RadarChart({ scores, pdfMode = false }: Props) {
  const renderCustomTick = (props: any) => {
    const { payload, x, y, textAnchor, fill, fontSize, fontWeight } = props;
    const lines = payload.value.split('\n');
    return (
      <text x={x} y={y} textAnchor={textAnchor} fill={fill} fontSize={fontSize} fontWeight={fontWeight}>
        {lines.map((line: string, index: number) => (
          <tspan x={x} dy={index === 0 ? 0 : fontSize * 1.2} key={index}>
            {line}
          </tspan>
        ))}
      </text>
    );
  };
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
    
    let label = threshold.label;
    if (label === 'TDAH — Hiperatividade/Impulsividade') label = 'TDAH\nHiperatividade';
    else if (label === 'TDAH — Desatenção') label = 'TDAH\nDesatenção';
    else if (label === 'AH/SD — Superexcitabilidade Intelectual') label = 'Superexcitabilidade\nIntelectual (AH/SD)';
    else if (label === 'AH/SD — Superexcitabilidade Emocional') label = 'Superexcitabilidade\nEmocional (AH/SD)';
    else if (label === 'AH/SD — Superexcitabilidade Sensorial') label = 'Superexcitabilidade\nSensorial (AH/SD)';
    else if (label === 'AH/SD — Superexcitabilidade Psicomotora') label = 'Superexcitabilidade\nPsicomotora (AH/SD)';
    else if (label === 'AH/SD — Superexcitabilidade Imaginativa') label = 'Superexcitabilidade\nImaginativa (AH/SD)';
    else if (label === 'AH/SD — Habilidade e Comprometimento') label = 'Habilidade e\nComprometimento (AH/SD)';

    return {
      label,
      value: normalizeScore(raw, threshold.max),
      fullMark: 100
    };
  });

  const chart = (
    <RechartsRadar cx="50%" cy="50%" outerRadius={pdfMode ? "70%" : "60%"} data={data}>
      <PolarGrid stroke="#E2E8F0" />
      <PolarAngleAxis 
        dataKey="label" 
        tick={(props) => renderCustomTick({ ...props, fill: '#1B4965', fontSize: pdfMode ? 10 : 12, fontWeight: 500 })} 
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
        <RechartsRadar width={600} height={500} cx="50%" cy="50%" outerRadius="55%" data={data}>
          <PolarGrid stroke="#E2E8F0" />
          <PolarAngleAxis 
            dataKey="label" 
            tick={(props) => renderCustomTick({ ...props, fill: '#1B4965', fontSize: 13, fontWeight: 600 })} 
          />
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
