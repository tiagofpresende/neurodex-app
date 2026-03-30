import { DimensionalScores, Flag, Dimension } from './types';
import { questions } from '../data/questions';
import { SCORING_THRESHOLDS } from '../data/scoring';

export function detectFlags(answersMap: Map<string, number>, scores: DimensionalScores): Flag[] {
  const flags: Flag[] = [];

  // 1. Mascaramento potencial
  if (scores[Dimension.AHSD_INT] >= 12 && scores[Dimension.TDAH_IN] >= 20) {
    flags.push({
      type: 'MASCARAMENTO',
      description: 'Alta inteligência/superexcitabilidade pode estar mascarando déficits executivos primários.'
    });
  }

  // 2. Depressão existencial
  if ((answersMap.get('AHSD-EXIST-01') ?? 0) >= 3 && (answersMap.get('AHSD-EXIST-02') ?? 0) >= 3) {
    flags.push({
      type: 'DEPRESSAO_EXISTENCIAL',
      description: 'Presença de vazio e questionamentos profundos de sentido (diferente de depressão clínica atípica).'
    });
  }

  // 3. Multipotencialidade
  if ((answersMap.get('2E-MULT-01') ?? 0) >= 3 && 
      (answersMap.get('AHSD-HAB-07') ?? 0) >= 3 && 
      (answersMap.get('AHSD-HAB-08') ?? 0) >= 3) {
    flags.push({
      type: 'MULTIPOTENCIALIDADE',
      description: 'Afinidade paralela ou sequencial com múltiplos interesses e rápida perda de motivação após o domínio.'
    });
  }

  // 4. Impacto Funcional Grave
  const funcItems = questions.filter(q => q.dimension === Dimension.FUNC);
  const severeFuncCount = funcItems.filter(q => (answersMap.get(q.id) ?? 0) >= 3).length;
  if (severeFuncCount >= 2) {
    flags.push({
      type: 'IMPACTO_GRAVE',
      description: 'Disfunção severa relatada em áreas-chave da vida (trabalho, relações ou vida financeira).'
    });
  }

  // 5. Perfil espinhoso (spiky)
  const dimensionsToNormalize = [
    Dimension.TDAH_IN, Dimension.TDAH_HI, Dimension.TDAH_PERS,
    Dimension.AHSD_INT, Dimension.AHSD_EMO, Dimension.AHSD_SEN,
    Dimension.AHSD_PSI, Dimension.AHSD_IMA, Dimension.AHSD_HAB,
    Dimension.DUAL_EXC
  ];
  
  const normalizedScores = dimensionsToNormalize.map(dim => {
    const raw = scores[dim];
    const max = SCORING_THRESHOLDS[dim].max;
    return (raw / max) * 100;
  });

  const minPerc = Math.min(...normalizedScores);
  const maxPerc = Math.max(...normalizedScores);

  if ((maxPerc - minPerc) >= 50) {
    flags.push({
      type: 'PERFIL_ESPINHOSO',
      description: 'Grande diferença (>50%) entre os picos e vales das dimensões cognitivo-comportamentais.'
    });
  }

  return flags;
}
