import { Dimension, DimensionalScores } from './types';
import { questions } from '../data/questions';

export function calculateScores(answersMap: Map<string, number>): DimensionalScores {
  // Inicializa a estrutura de scores
  const scores: DimensionalScores = {
    [Dimension.TDAH_IN]: 0,
    [Dimension.TDAH_HI]: 0,
    [Dimension.TDAH_PERS]: 0,
    [Dimension.AHSD_INT]: 0,
    [Dimension.AHSD_EMO]: 0,
    [Dimension.AHSD_SEN]: 0,
    [Dimension.AHSD_PSI]: 0,
    [Dimension.AHSD_IMA]: 0,
    [Dimension.AHSD_HAB]: 0,
    [Dimension.DUAL_EXC]: 0,
    [Dimension.FUNC]: 0,
    TDAH_TOTAL: 0,
    AHSD_TOTAL: 0,
    DUAL_EXC_TOTAL: 0,
    IMPACTO_FUNCIONAL: 0,
  };

  // Itera sobre as questoes para acumular
  questions.forEach(q => {
    const val = answersMap.get(q.id) ?? 0;
    const finalVal = q.reverseCoded ? (4 - val) : val;
    if (scores[q.dimension] !== undefined) {
      scores[q.dimension] += finalVal;
    }
  });

  scores.TDAH_TOTAL = scores[Dimension.TDAH_IN] + scores[Dimension.TDAH_HI];
  scores.AHSD_TOTAL = 
    scores[Dimension.AHSD_INT] + 
    scores[Dimension.AHSD_EMO] + 
    scores[Dimension.AHSD_SEN] + 
    scores[Dimension.AHSD_PSI] + 
    scores[Dimension.AHSD_IMA] + 
    scores[Dimension.AHSD_HAB];
  
  scores.DUAL_EXC_TOTAL = scores[Dimension.DUAL_EXC];
  scores.IMPACTO_FUNCIONAL = scores[Dimension.FUNC];

  return scores;
}
