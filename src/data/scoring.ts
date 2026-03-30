import { Dimension } from '../engine/types';

export const SCORING_THRESHOLDS = {
  [Dimension.TDAH_IN]: { max: 44, threshold: 24, label: 'TDAH — Desatenção' },
  [Dimension.TDAH_HI]: { max: 24, threshold: 14, label: 'TDAH — Hiperatividade/Impulsividade' },
  [Dimension.TDAH_PERS]: { max: 8, threshold: 5, label: 'TDAH — Persistência temporal' },
  
  [Dimension.AHSD_INT]: { max: 16, threshold: 10, label: 'AH/SD — Superexcitabilidade Intelectual' },
  [Dimension.AHSD_EMO]: { max: 20, threshold: 13, label: 'AH/SD — Superexcitabilidade Emocional' },
  [Dimension.AHSD_SEN]: { max: 12, threshold: 8, label: 'AH/SD — Superexcitabilidade Sensorial' },
  [Dimension.AHSD_PSI]: { max: 20, threshold: 13, label: 'AH/SD — Superexcitabilidade Psicomotora' },
  [Dimension.AHSD_IMA]: { max: 20, threshold: 13, label: 'AH/SD — Superexcitabilidade Imaginativa' },
  [Dimension.AHSD_HAB]: { max: 40, threshold: 25, label: 'AH/SD — Habilidade e Comprometimento' },
  
  [Dimension.DUAL_EXC]: { max: 72, threshold: 40, label: 'Dupla Excepcionalidade (2e)' },
  [Dimension.FUNC]: { max: 16, threshold: 3, label: 'Impacto Funcional' }, // Obs: a spec diz que qq item >=3 = flag. Max seria 4*4=16

  COMPOSITES: {
    TDAH_TOTAL: { max: 68, threshold: 38, label: 'Escore TDAH Total' },
    AHSD_TOTAL: { max: 128, threshold: 78, label: 'Escore AH/SD Total' },
    DUAL_EXC_TOTAL: { max: 72, threshold: 40, label: 'Escore 2e Total' }
  }
};
