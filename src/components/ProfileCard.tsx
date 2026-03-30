import { Profile } from '../engine/types';

export const PROFILE_DETAILS = {
  'A': {
    title: 'Perfil A — Indicadores de TDAH predominantes',
    color: 'bg-ocean-100 text-ocean-900 border-ocean-300',
    description: 'Seu padrão de respostas sugere fortes características associadas ao TDAH, com impacto e histórico persistente, sem indicativos tão expressivos de Altas Habilidades isoladas.'
  },
  'B': {
    title: 'Perfil B — Indicadores de AH/SD predominantes',
    color: 'bg-lavender-100 text-ocean-900 border-lavender-300',
    description: 'Você apresenta fortes características de Altas Habilidades/Superdotação e superexcitabilidades, não preenchendo os critérios de TDAH sugeridos.'
  },
  'C': {
    title: 'Perfil C — Indicadores de Dupla Excepcionalidade (2e)',
    color: 'bg-ocean-700 text-white border-ocean-900',
    description: 'Seu perfil indica tanto características marcantes de TDAH quanto de Altas Habilidades, sugerindo um quadro de Dupla Excepcionalidade (interação simultânea de ambas as condições).'
  },
  'D': {
    title: 'Perfil D — Indicadores Sub-limiares',
    color: 'bg-surface text-text border-lavender-300',
    description: 'As respostas globais não atingiram os limiares mínimos para sugerir um padrão muito característico de TDAH ou de Altas Habilidades de forma predominante neste rastreio.'
  }
};

export function ProfileCard({ profile }: { profile: Profile }) {
  const details = PROFILE_DETAILS[profile];
  return (
    <div className={`p-6 md:p-8 rounded-2xl border ${details.color} shadow-sm`}>
      <h3 className="text-xl md:text-2xl font-bold mb-3">{details.title}</h3>
      <p className="font-medium text-lg opacity-90 leading-relaxed">{details.description}</p>
    </div>
  );
}
