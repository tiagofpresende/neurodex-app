export interface BlockConfig {
  id: number;
  title: string;
  estimatedTime: string;
  motivationalText: string;
}

export const blocks: BlockConfig[] = [
  { 
    id: 0, 
    title: "Como sua mente funciona", 
    estimatedTime: "~3 minutos", 
    motivationalText: "Vamos começar explorando os seus processos de pensamento e como sua mente trabalha no dia a dia." 
  },
  { 
    id: 1, 
    title: "Como você sente o mundo", 
    estimatedTime: "~3 minutos", 
    motivationalText: "Ótimo. Agora vamos explorar sua sensibilidade, emoções e percepção do mundo ao seu redor." 
  },
  { 
    id: 2, 
    title: "Seu corpo e sua energia", 
    estimatedTime: "~3 minutos", 
    motivationalText: "Muito bem. Esta etapa aborda sua relação com atividade física, sono e níveis de energia." 
  },
  { 
    id: 3, 
    title: "Imaginação e mundo interior", 
    estimatedTime: "~3 minutos", 
    motivationalText: "Passamos da metade! Vamos entender um pouco mais sobre sua criatividade, fantasias e vida interior." 
  },
  { 
    id: 4, 
    title: "Você e os outros", 
    estimatedTime: "~3 minutos", 
    motivationalText: "Quase lá. Como é a sua comunicação e a forma como você se relaciona com as outras pessoas?" 
  },
  { 
    id: 5, 
    title: "Trabalho, metas e realização", 
    estimatedTime: "~3 minutos", 
    motivationalText: "Nesta penúltima etapa, vamos olhar para sua produtividade, trajetória profissional e metas de vida." 
  },
  { 
    id: 6, 
    title: "Olhando para trás e para frente", 
    estimatedTime: "~3 minutos", 
    motivationalText: "Último bloco! Façamos uma reflexão geral sobre sua caminhada até aqui e sua visão de mundo." 
  }
];
