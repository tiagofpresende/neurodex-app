export enum Dimension {
  TDAH_IN = 'TDAH-IN',
  TDAH_HI = 'TDAH-HI',
  TDAH_PERS = 'TDAH-PERS',
  AHSD_INT = 'AHSD-INT',
  AHSD_EMO = 'AHSD-EMO',
  AHSD_SEN = 'AHSD-SEN',
  AHSD_PSI = 'AHSD-PSI',
  AHSD_IMA = 'AHSD-IMA',
  AHSD_HAB = 'AHSD-HAB',
  DUAL_EXC = '2E',
  FUNC = 'FUNC'
}

export interface QuestionItem {
  id: string;
  blockIndex: number; // 0-6
  text: string;
  dimension: Dimension;
  code: string;
  reverseCoded: boolean;
}

export type DimensionalScores = {
  [key in Dimension]: number;
} & {
  TDAH_TOTAL: number;
  AHSD_TOTAL: number;
  DUAL_EXC_TOTAL: number;
  IMPACTO_FUNCIONAL: number;
};

export type Profile = 'A' | 'B' | 'C' | 'D';

export type FlagType = 'MASCARAMENTO' | 'DEPRESSAO_EXISTENCIAL' | 'MULTIPOTENCIALIDADE' | 'IMPACTO_GRAVE' | 'PERFIL_ESPINHOSO';

export interface Flag {
  type: FlagType;
  description: string;
}

export interface Demographics {
  name: string;
  age: number;
  education: string;
  priorDiagnosis: string;
  medication: string;
  therapy: string;
  gender?: string;
}

export interface SessionData {
  startedAt: number;
  seed: number;
  demographics: Demographics | null;
  answers: Record<string, number>;
  currentBlock: number;
  currentItemInBlock: number;
  completed: boolean;
}
