# PROMPT DE IMPLEMENTAÇÃO — NeuroDex v1.0

Cole este prompt inteiro na IA de código (Claude Code, Cursor, etc.) junto com o arquivo `spec-neurodex.md`.

---

## CONTEXTO

Você vai implementar o **NeuroDex**, uma plataforma web de rastreio neurocognitivo integrado para adultos que avalia simultaneamente indicadores de TDAH e Altas Habilidades/Superdotação (AH/SD), sem que o usuário saiba qual dimensão está sendo testada em cada item.

A especificação completa do produto está no arquivo `spec-neurodex.md` que acompanha este prompt. Leia-o integralmente antes de começar. Ele contém: os 84 itens organizados em 7 blocos temáticos, o motor de pontuação com 10 dimensões e 4 perfis resultantes, o fluxo do usuário, a estrutura do relatório PDF, e todos os requisitos técnicos.

## STACK OBRIGATÓRIA

- **React 18+** com Vite (não usar Next.js — a app é 100% client-side, sem SSR)
- **TypeScript** strict mode
- **Tailwind CSS v3+** para estilização (mobile-first)
- **Recharts** para o radar chart e barras horizontais
- **jsPDF** + **jsPDF-AutoTable** + **html2canvas** para geração de PDF client-side
- **Framer Motion** para animações e transições entre itens/blocos
- **Lucide React** para ícones
- **localStorage** para persistência de sessão (sem backend, sem banco de dados)

## ESTRUTURA DE PASTAS ESPERADA

```
src/
├── App.tsx
├── main.tsx
├── index.css                     # Tailwind base
├── data/
│   ├── questions.ts              # Array de 84 itens com metadata
│   ├── blocks.ts                 # Definição dos 7 blocos temáticos
│   ├── scoring.ts                # Constantes de scoring (limiares, pesos, dimensões)
│   └── texts.ts                  # Todos os textos da UI (disclaimers, explicações, etc.)
├── engine/
│   ├── scoringEngine.ts          # Motor de pontuação (função pura)
│   ├── profileClassifier.ts      # Classificador de perfil (A/B/C/D)
│   ├── flagDetector.ts           # Detector de flags especiais
│   └── types.ts                  # Tipos TypeScript (Answer, Score, Profile, Flag, etc.)
├── components/
│   ├── Landing.tsx                # Página inicial
│   ├── Consent.tsx                # Tela de consentimento (bloqueante)
│   ├── Demographics.tsx           # Formulário demográfico
│   ├── QuestionCard.tsx           # Card individual de pergunta com slider Likert
│   ├── BlockIntro.tsx             # Tela de transição entre blocos
│   ├── ProgressBar.tsx            # Barra de progresso global + por bloco
│   ├── ProcessingScreen.tsx       # Animação de processamento
│   ├── Dashboard.tsx              # Tela de resultados
│   ├── RadarChart.tsx             # Wrapper do radar chart
│   ├── DimensionBars.tsx          # Barras horizontais por dimensão
│   ├── ProfileCard.tsx            # Card do perfil identificado
│   ├── FlagAlerts.tsx             # Alertas de flags especiais
│   └── ResumePrompt.tsx           # Modal para retomar sessão salva
├── pdf/
│   ├── generatePdf.ts             # Gerador de PDF completo
│   ├── sectionUser.ts             # Seção A (para o usuário)
│   └── sectionClinical.ts         # Seção B (briefing clínico)
├── hooks/
│   ├── useSession.ts              # Hook de persistência localStorage
│   ├── useProgress.ts             # Hook de progresso
│   └── useShuffledQuestions.ts    # Hook de randomização dentro do bloco
└── utils/
    ├── shuffle.ts                 # Fisher-Yates com seed
    └── normalize.ts               # Normalização de escores para 0-100%
```

## INSTRUÇÕES CRÍTICAS DE IMPLEMENTAÇÃO

### 1. DADOS DOS ITENS (`questions.ts`)

Cada item deve ser um objeto com esta estrutura exata:

```typescript
interface QuestionItem {
  id: string;           // Ex: "TDAH-IN-01"
  blockIndex: number;   // 0-6 (qual bloco temático)
  text: string;         // Texto apresentado ao usuário (português BR)
  dimension: Dimension; // Enum da dimensão real medida
  code: string;         // Código completo (igual ao id)
  reverseCoded: boolean; // Para itens futuros com codificação reversa
}
```

Copie TODOS os 84 itens exatamente como estão na spec, seção 4.2. Não altere, resuma ou omita nenhum item. Cada bloco tem exatamente 12 itens.

### 2. MOTOR DE PONTUAÇÃO (`scoringEngine.ts`)

Implemente como **funções puras** (sem side effects, sem state):

```typescript
// Input: array de 84 respostas (0-4)
// Output: objeto com todas as dimensões calculadas
function calculateScores(answers: Map<string, number>): DimensionalScores

// Input: dimensões calculadas
// Output: perfil A/B/C/D
function classifyProfile(scores: DimensionalScores): Profile

// Input: respostas individuais + dimensões
// Output: array de flags ativas
function detectFlags(answers: Map<string, number>, scores: DimensionalScores): Flag[]
```

Os limiares e agrupamentos estão na seção 5 da spec. Implemente-os exatamente como documentado.

### 3. RANDOMIZAÇÃO POR SESSÃO

A ordem dos itens DENTRO de cada bloco deve ser randomizada a cada sessão, mas a ordem dos BLOCOS é fixa (1→7). Use um seed baseado no timestamp de início da sessão para que a randomização seja reprodutível (para debug) mas diferente entre sessões:

```typescript
function shuffleWithSeed<T>(array: T[], seed: number): T[] {
  // Fisher-Yates shuffle com PRNG seedado
}
```

### 4. UI DOS ITENS DE PERGUNTA

Cada item deve ser apresentado como um card full-width com:
- Texto da pergunta em fonte grande (18-20px mobile)
- 5 opções horizontais (0-4) como botões com labels visíveis
- Labels: "Nunca" | "Raramente" | "Às vezes" | "Frequentemente" | "Sempre"
- Feedback visual ao selecionar (cor de destaque, escala sutil)
- Auto-advance após 400ms de delay
- Animação de slide horizontal (Framer Motion) entre itens
- O card NÃO deve mostrar o código da dimensão (isso é interno)

### 5. BARRA DE PROGRESSO

Duas barras:
- **Progresso do bloco** (ex: "Pergunta 5 de 12")
- **Progresso geral** (percentual de 0-100%, preenchimento contínuo)

### 6. TELAS DE TRANSIÇÃO ENTRE BLOCOS

Entre cada bloco, mostrar uma tela com:
- Nome do próximo bloco (ex: "Como você sente o mundo")
- Frase motivacional contextual (uma por bloco — definir em `texts.ts`)
- Tempo estimado do próximo bloco (~3 min cada)
- Botão "Continuar"

### 7. DASHBOARD DE RESULTADOS

Renderizar na tela:
- **Radar chart** (Recharts `RadarChart`) com as 10 dimensões normalizadas para 0-100%
- **ProfileCard** com título do perfil, cor indicativa e texto descritivo
- **DimensionBars** — barras horizontais com label, valor bruto/máx, e indicador visual de "acima do limiar"
- **FlagAlerts** — cards de alerta para cada flag ativa
- **Botão primário "Exportar PDF"** (CTA principal, destaque visual)
- **Botão secundário "Recomeçar"** (com modal de confirmação)

### 8. GERAÇÃO DE PDF

O PDF deve ter exatamente a estrutura da seção 7.2 da spec:

- **Seção A (para o usuário)**: Capa, radar chart (capturar como imagem via html2canvas de um elemento oculto renderizado para este fim), perfil, dimensões, próximos passos
- **Seção B (para o profissional)**: Dados demográficos, tabela completa de escores (usar jsPDF-AutoTable), flags, perfil com justificativa, respostas de itens-chave (todos com score 4, todos TDAH-PERS, todos FUNC, todos 2E ≥ 3), hipóteses a investigar (textos da spec), referências científicas

O radar chart para o PDF deve ser renderizado em um div oculto (off-screen), capturado via html2canvas, e inserido como imagem no PDF. Não usar o chart da tela — renderizar um específico para o PDF com dimensões fixas (500x500px).

### 9. PERSISTÊNCIA (localStorage)

Chave: `neurodex_session`

```typescript
interface SessionData {
  startedAt: number;       // timestamp
  seed: number;            // seed de randomização
  demographics: Demographics | null;
  answers: Record<string, number>; // { "TDAH-IN-01": 3, ... }
  currentBlock: number;    // 0-6
  currentItemInBlock: number; // 0-11
  completed: boolean;
}
```

Salvar a cada resposta. Na abertura, se existir sessão não-completada com menos de 72h, exibir `ResumePrompt`.

### 10. RESPONSIVIDADE

- Mobile-first (default: telas < 640px)
- Tudo deve funcionar perfeitamente no iPhone SE (375px width)
- Em desktop (> 1024px): centralizar conteúdo com max-width 720px
- Botões Likert: em mobile, empilhar verticalmente se necessário para manter legibilidade

### 11. PALETA DE CORES (Tailwind custom)

Adicionar ao `tailwind.config.js`:

```javascript
colors: {
  'ocean': {
    900: '#1B4965',
    700: '#2D6A8F',
    500: '#5FA8D3',
    300: '#A4D4E4',
    100: '#D9EDF5',
  },
  'lavender': {
    500: '#B8B8D1',
    300: '#D4D4E3',
    100: '#EDEDF3',
  },
  'surface': '#FAFAFA',
  'text': '#4A4A4A',
  'accent': {
    green: '#4CAF50',
    amber: '#FFC107',
    red: '#F44336',
  }
}
```

### 12. TEXTOS QUE NUNCA DEVEM APARECER

A plataforma NUNCA deve usar estas palavras/frases em qualquer texto voltado ao usuário:
- "diagnóstico" (usar "rastreio" ou "indicadores")
- "teste psicológico" (usar "questionário de autoconhecimento")
- "você tem TDAH/superdotação" (usar "seus resultados sugerem indicadores de...")
- "tratamento" (usar "acompanhamento profissional")
- "paciente" (usar "você" ou "pessoa")
- "doença" ou "transtorno" (usar "característica" ou "perfil")

### 13. DISCLAIMER FOOTER

Todas as telas (exceto Landing) devem ter um footer discreto com:
```
NeuroDex é uma ferramenta de rastreio, não de diagnóstico.
Consulte um profissional qualificado para avaliação formal.
```

### 14. TESTES AUTOMATIZADOS

Criar testes unitários para:
- `scoringEngine.ts` — testar com respostas mock (todas 0, todas 4, perfil A, B, C, D)
- `profileClassifier.ts` — testar todos os 4 perfis com edge cases nos limiares
- `flagDetector.ts` — testar cada flag isoladamente
- `shuffle.ts` — testar que mesma seed gera mesma ordem

### 15. ORDEM DE IMPLEMENTAÇÃO

Implemente nesta sequência para manter a app funcional a cada passo:

1. Setup do projeto (Vite + React + TS + Tailwind)
2. `data/questions.ts` — todos os 84 itens
3. `data/blocks.ts` e `data/texts.ts`
4. `engine/types.ts` e `engine/scoringEngine.ts`
5. `engine/profileClassifier.ts` e `engine/flagDetector.ts`
6. `components/Landing.tsx` e `components/Consent.tsx`
7. `components/Demographics.tsx`
8. `components/QuestionCard.tsx` com animação
9. `components/BlockIntro.tsx` e `components/ProgressBar.tsx`
10. Fluxo completo de navegação (estado no App.tsx)
11. `hooks/useSession.ts` — persistência
12. `components/Dashboard.tsx` com charts
13. `pdf/generatePdf.ts` — geração completa
14. Polimento visual, animações, responsividade
15. Testes automatizados

## ENTREGA ESPERADA

Uma aplicação React funcional, deployável via `npm run build`, que:
- Conduz o usuário pelos 7 blocos de 12 itens cada
- Calcula escores em 10 dimensões + 4 escores compostos
- Classifica em perfil A/B/C/D
- Detecta flags especiais
- Exibe dashboard visual com radar chart
- Gera PDF completo com seções A (usuário) e B (profissional)
- Salva/restaura progresso via localStorage
- Funciona 100% offline após carregamento inicial
- É mobile-first e acessível (WCAG 2.1 AA)

O código deve ser limpo, tipado, comentado em português nos pontos críticos, e organizado na estrutura de pastas descrita acima.
