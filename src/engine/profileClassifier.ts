import { DimensionalScores, Profile, Dimension } from './types';
import { SCORING_THRESHOLDS } from '../data/scoring';

export function classifyProfile(scores: DimensionalScores): Profile {
  const isHighTDAH = scores.TDAH_TOTAL >= SCORING_THRESHOLDS.COMPOSITES.TDAH_TOTAL.threshold;
  const isHighAHSD = scores.AHSD_TOTAL >= SCORING_THRESHOLDS.COMPOSITES.AHSD_TOTAL.threshold;
  const isHigh2E = scores.DUAL_EXC_TOTAL >= SCORING_THRESHOLDS.COMPOSITES.DUAL_EXC_TOTAL.threshold;
  
  const isHighTDAHPers = scores[Dimension.TDAH_PERS] >= SCORING_THRESHOLDS[Dimension.TDAH_PERS].threshold;

  // Condição Perfil C (2e): TDAH_TOTAL >= 38 AND AHSD_TOTAL >= 78 AND 2E >= 40
  // Note que priorizamos a verificação de 2E pois ela engloba ambas
  if (isHighTDAH && isHighAHSD && isHigh2E) {
    return 'C';
  }

  // Condição Perfil A (TDAH): TDAH_TOTAL >= 38 AND AHSD_TOTAL < 78 AND TDAH-PERS >= 5
  if (isHighTDAH && !isHighAHSD && isHighTDAHPers) {
    return 'A';
  }

  // Condição Perfil B (AH/SD): AHSD_TOTAL >= 78 AND TDAH_TOTAL < 38
  if (isHighAHSD && !isHighTDAH) {
    return 'B';
  }

  // Condição Perfil D: fallback para sub-limiar ou não-caracterizado acima
  return 'D';
}
