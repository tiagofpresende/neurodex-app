# NeuroDex — Especificação de Produto v1.0
## Plataforma de Rastreio Neurocognitivo Integrado para Adultos (TDAH + AH/SD)

---

## 1. VISÃO E OBJETIVO

### 1.1 Problema
Adultos com TDAH e/ou Altas Habilidades/Superdotação (AH/SD) enfrentam subdiagnóstico massivo no Brasil. O mascaramento mútuo entre as duas condições — onde a inteligência compensa déficits executivos e os sintomas de TDAH ocultam o potencial — resulta em sofrimento existencial, subdesempenho crônico e tratamento inadequado. Não existe hoje uma ferramenta digital integrada, em português brasileiro, que rastreie ambas as condições simultaneamente em adultos.

### 1.2 Solução
NeuroDex é uma plataforma web mobile-first que conduz adultos (18+) por uma bateria de rastreio neurocognitivo integrado. Os itens de TDAH e AH/SD são intercalados em blocos temáticos experienciais (não clínicos), de modo que o usuário não identifica qual dimensão está sendo avaliada. Ao final, a plataforma gera um relatório PDF estruturado com perfil dimensional, indicadores de dupla excepcionalidade, e briefing clínico para o profissional que conduzirá a avaliação formal.

### 1.3 O que NeuroDex NÃO é
- NÃO é diagnóstico. É rastreio (screening) e pré-avaliação.
- NÃO substitui avaliação neuropsicológica formal com WAIS-III.
- NÃO substitui consulta com psicólogo, neuropsicólogo ou psiquiatra.
- NÃO prescreve, ajusta ou sugere medicação.
- NÃO coleta dados clínicos protegidos (não é dispositivo médico).

---

## 2. PÚBLICO-ALVO

### 2.1 Usuário primário
- Adultos (18-65 anos) que suspeitam de TDAH e/ou superdotação
- Brasileiros, fluentes em português
- Principalmente via smartphone (mobile-first)
- Podem ou não ter diagnóstico prévio de TDAH
- Podem ou não estar em tratamento psiquiátrico

### 2.2 Usuário secundário (consumidor do relatório)
- Neuropsicólogos especializados em AH/SD
- Psicólogos clínicos
- Psiquiatras (para contexto sobre TDAH + possível 2e)

---

## 3. FUNDAMENTO CIENTÍFICO

### 3.1 Instrumentos-base para TDAH (adaptados e intercalados)
| Instrumento | Referência | Itens | Uso no NeuroDex |
|------------|-----------|-------|-----------------|
| **ASRS v1.1** (Adult ADHD Self-Report Scale) | Kessler et al., 2005; OMS | 18 itens (6 Part A + 12 Part B) | Todos os 18 itens são incluídos, reformulados em linguagem experiencial e distribuídos nos blocos temáticos |
| **WFIRS-S** (Weiss Functional Impairment Rating Scale – Self) | Weiss, 2000 | Subescala seletiva | 8 itens adaptados sobre impacto funcional (trabalho, relações, autoconceito) |
| **DIVA 5.0** (conceitos) | Kooij & Francken | Não aplicado diretamente | Perguntas sobre persistência desde infância incorporadas no bloco biográfico |

### 3.2 Instrumentos-base para AH/SD (adaptados e intercalados)
| Instrumento | Referência | Itens | Uso no NeuroDex |
|------------|-----------|-------|-----------------|
| **OEQ-II** (Overexcitability Questionnaire Two) | Falk et al., 1999; versão brasileira Oliveira & Barbosa, 2014 | 50 itens, 5 dimensões | 25 itens selecionados (5 por dimensão de superexcitabilidade), reformulados |
| **Gifted Adults Checklist** | Silverman, GIERI | 41 características | 15 itens mais discriminativos selecionados |
| **Modelo de Renzulli** (Três Anéis) | Renzulli, 1978, 2005 | Conceitual | 6 itens sobre comprometimento com tarefa e criatividade |
| **EICAH/SD** (conceitos) | SATEPSI/CFP | Conceitual | Indicadores de habilidade acima da média incorporados |

### 3.3 Dimensões de Dupla Excepcionalidade
| Instrumento | Referência | Uso |
|------------|-----------|-----|
| **Perfil 2e diferencial** | Rommelse et al., 2016; Antshel et al., 2007 | 8 itens específicos sobre mascaramento mútuo, compensação cognitiva, e atenção contexto-dependente |
| **Depressão existencial** | Webb, SENG; Dabrowski, TPD | 4 itens sobre questionamento existencial vs. anedonia clínica |

### 3.4 Total de itens do instrumento
| Categoria | Itens |
|-----------|-------|
| TDAH (ASRS adaptado) | 18 |
| Impacto funcional (WFIRS adaptado) | 8 |
| Superexcitabilidades (OEQ-II adaptado) | 25 |
| Características AH/SD (Silverman + Renzulli) | 21 |
| Dupla excepcionalidade | 8 |
| Persistência temporal (infância) | 4 |
| **TOTAL** | **84 itens** |

### 3.5 Escala de resposta
Todos os itens utilizam escala Likert de 5 pontos:
- 0 = Nunca / Não me identifico
- 1 = Raramente / Me identifico pouco
- 2 = Às vezes / Me identifico parcialmente
- 3 = Frequentemente / Me identifico bastante
- 4 = Sempre / Me identifico totalmente

---

## 4. ARQUITETURA DE TESTES — BLOCOS TEMÁTICOS

### 4.1 Princípio de design
Os itens são organizados em **7 blocos temáticos experienciais** com nomes amigáveis e não-clínicos. Cada bloco mistura itens de múltiplas dimensões. O usuário percebe uma jornada de autoconhecimento, não uma bateria diagnóstica. A ordem dos itens DENTRO de cada bloco é aleatorizada a cada sessão (seed baseada no timestamp de início).

### 4.2 Mapa de blocos

#### BLOCO 1: "Como sua mente funciona" (12 itens)
Tema percebido: reflexão sobre processos de pensamento
| # | Item (texto apresentado ao usuário) | Dimensão real | Código |
|---|--------------------------------------|--------------|--------|
| 1 | Minha mente está sempre processando algo, mesmo quando tento relaxar | ASRS-Desatenção (mind-wandering) | TDAH-IN-01 |
| 2 | Eu frequentemente faço conexões entre assuntos que parecem não ter nada a ver | OEQ-Intelectual | AHSD-OE-INT-01 |
| 3 | Tenho dificuldade em terminar uma tarefa antes de começar outra | ASRS-Desatenção | TDAH-IN-02 |
| 4 | Quando um assunto me interessa, eu mergulho tão fundo que perco a noção de tempo | OEQ-Intelectual / Hiperfoco 2e | 2E-HF-01 |
| 5 | Frequentemente esqueço compromissos ou coisas que preciso fazer no dia a dia | ASRS-Desatenção | TDAH-IN-03 |
| 6 | Questiono ideias amplamente aceitas e preciso entender o "porquê" por trás de tudo | OEQ-Intelectual | AHSD-OE-INT-02 |
| 7 | Meu pensamento é rápido demais para as palavras — me atrapalho ao explicar minhas ideias | 2e overlap | 2E-VEL-01 |
| 8 | Tenho muitas ideias criativas, mas poucas chegam a ser concretizadas | Renzulli-Criatividade + TDAH execução | 2E-EXEC-01 |
| 9 | Aprendo coisas novas muito rápido quando me interessam, mas me entedio facilmente com o que já domino | AH/SD habilidade acima da média | AHSD-HAB-01 |
| 10 | Cometo erros por descuido em tarefas que exigem atenção a detalhes | ASRS-Desatenção | TDAH-IN-04 |
| 11 | Preciso de estimulação intelectual constante — sem ela me sinto inquieto e irritado | OEQ-Intelectual + contexto-dependência | 2E-STIM-01 |
| 12 | Minha cabeça funciona como se tivesse várias abas abertas ao mesmo tempo | ASRS-Desatenção / OEQ-Intelectual | 2E-MULTI-01 |

#### BLOCO 2: "Como você sente o mundo" (12 itens)
Tema percebido: sensibilidade e percepção sensorial/emocional
| # | Item | Dimensão real | Código |
|---|------|--------------|--------|
| 1 | Sons, luzes ou texturas que não incomodam a maioria das pessoas me perturbam intensamente | OEQ-Sensorial | AHSD-OE-SEN-01 |
| 2 | Minhas emoções são muito intensas — quando sinto, sinto com tudo | OEQ-Emocional | AHSD-OE-EMO-01 |
| 3 | Me irrito facilmente quando preciso esperar (filas, trânsito, processos lentos) | ASRS-Hiperatividade-Impulsividade | TDAH-HI-01 |
| 4 | A injustiça me afeta profundamente, mesmo quando não é comigo | OEQ-Emocional | AHSD-OE-EMO-02 |
| 5 | Frequentemente interrompo outras pessoas no meio da fala | ASRS-Impulsividade | TDAH-HI-02 |
| 6 | Sou profundamente afetado por arte, música ou beleza natural | OEQ-Sensorial | AHSD-OE-SEN-02 |
| 7 | Tenho explosões emocionais que parecem desproporcionais à situação | ASRS-Emocional / OEQ-Emocional | 2E-EMOC-01 |
| 8 | Sinto empatia intensa — absorvo as emoções das pessoas ao meu redor | OEQ-Emocional | AHSD-OE-EMO-03 |
| 9 | Tomo decisões por impulso e me arrependo depois | ASRS-Impulsividade | TDAH-HI-03 |
| 10 | Tenho um senso estético muito apurado — detalhes visuais que outros ignoram são óbvios para mim | OEQ-Sensorial / AH/SD | AHSD-OE-SEN-03 |
| 11 | Sinto culpa ou vergonha com mais facilidade que a maioria das pessoas | OEQ-Emocional / impacto funcional | AHSD-OE-EMO-04 |
| 12 | Quando algo me frustra, tenho dificuldade em regular a intensidade da minha reação | ASRS-Emocional + OEQ-Emocional | 2E-REG-01 |

#### BLOCO 3: "Seu corpo e sua energia" (12 itens)
Tema percebido: relação com atividade física, inquietação, sono
| # | Item | Dimensão real | Código |
|---|------|--------------|--------|
| 1 | Tenho dificuldade em ficar parado — preciso movimentar alguma parte do corpo | ASRS-Hiperatividade | TDAH-HI-04 |
| 2 | Meu nível de energia é mais alto que o da maioria das pessoas que conheço | OEQ-Psicomotora | AHSD-OE-PSI-01 |
| 3 | Falo rápido demais ou em excesso | ASRS-Hiperatividade | TDAH-HI-05 |
| 4 | Sinto necessidade de praticar atividades físicas intensas para "descarregar" | OEQ-Psicomotora | AHSD-OE-PSI-02 |
| 5 | Tenho dificuldade para dormir porque minha mente não para | ASRS / OEQ overlap | 2E-SONO-01 |
| 6 | Gesticulo muito ao falar e tenho expressões corporais exageradas | OEQ-Psicomotora | AHSD-OE-PSI-03 |
| 7 | Frequentemente me sinto "ligado no 220" sem motivo aparente | ASRS-Hiperatividade / OEQ-Psicomotora | 2E-ENER-01 |
| 8 | Procrastino tarefas importantes mesmo quando sei que isso vai me prejudicar | ASRS-Execução | TDAH-IN-05 |
| 9 | Quando estou entediado, crio atividades mentais ou físicas para me estimular | OEQ-Psicomotora / Intelectual | AHSD-OE-PSI-04 |
| 10 | Tenho dificuldade em regular meu ritmo — oscilo entre períodos de alta produtividade e paralisia | 2e funcional | 2E-RITMO-01 |
| 11 | Me sinto desconfortável em ambientes com pouca atividade ou muita passividade | OEQ-Psicomotora | AHSD-OE-PSI-05 |
| 12 | Frequentemente perco ou esqueço onde deixei objetos do dia a dia | ASRS-Desatenção | TDAH-IN-06 |

#### BLOCO 4: "Imaginação e mundo interior" (12 itens)
Tema percebido: criatividade, fantasia, vida interior
| # | Item | Dimensão real | Código |
|---|------|--------------|--------|
| 1 | Tenho uma imaginação muito vívida — crio cenários mentais detalhados | OEQ-Imaginativa | AHSD-OE-IMA-01 |
| 2 | Devaneio (daydream) com frequência, mesmo em situações que exigem atenção | ASRS-Desatenção / OEQ-Imaginativa | 2E-DEVA-01 |
| 3 | Misturo fantasia e realidade — às vezes uso metáforas e associações que os outros não entendem | OEQ-Imaginativa | AHSD-OE-IMA-02 |
| 4 | Perco o foco durante conversas longas ou reuniões | ASRS-Desatenção | TDAH-IN-07 |
| 5 | Desde criança, inventava mundos, personagens ou histórias elaboradas | OEQ-Imaginativa | AHSD-OE-IMA-03 |
| 6 | Tenho pensamento visual forte — penso em imagens, não em palavras | OEQ-Imaginativa / AH/SD | AHSD-OE-IMA-04 |
| 7 | Frequentemente começo projetos criativos com grande entusiasmo e abandono antes de terminar | TDAH execução + criatividade | 2E-PROJ-01 |
| 8 | Consigo ver soluções que outros não veem para problemas complexos | Renzulli-Criatividade | AHSD-CRIA-01 |
| 9 | Me distraio facilmente com estímulos irrelevantes do ambiente | ASRS-Desatenção | TDAH-IN-08 |
| 10 | Tenho um senso de humor incomum — faço piadas ou associações que poucos entendem de primeira | AH/SD humor complexo | AHSD-HAB-02 |
| 11 | Sonhos (noturnos) muito vívidos, elaborados e memoráveis | OEQ-Imaginativa | AHSD-OE-IMA-05 |
| 12 | Me perco em devaneios ao ponto de não ouvir quando alguém fala comigo | ASRS-Desatenção | TDAH-IN-09 |

#### BLOCO 5: "Você e os outros" (12 itens)
Tema percebido: relações interpessoais e comunicação
| # | Item | Dimensão real | Código |
|---|------|--------------|--------|
| 1 | Desde pequeno me senti diferente dos outros — como se estivesse "fora de sincronia" | AH/SD assincronicidade | AHSD-HAB-03 |
| 2 | Tenho dificuldade em manter relações sociais de longo prazo | WFIRS impacto funcional | FUNC-REL-01 |
| 3 | Prefiro conversas profundas e significativas a small talk | AH/SD / OEQ-Intelectual | AHSD-OE-INT-03 |
| 4 | Já me disseram que sou "intenso demais" ou "sensível demais" | OEQ-Emocional / AH/SD social | AHSD-OE-EMO-05 |
| 5 | Interrompo ou monopolizo conversas sem perceber | ASRS-Impulsividade | TDAH-HI-06 |
| 6 | Me sinto incompreendido com frequência — como se falasse uma língua diferente | AH/SD assincronicidade | AHSD-HAB-04 |
| 7 | Meu desempenho profissional é inconsistente — alterno entre excelente e abaixo do esperado | WFIRS trabalho + 2e underachievement | 2E-PERF-01 |
| 8 | Tenho poucos amigos, mas muito próximos | AH/SD social | AHSD-HAB-05 |
| 9 | Dificuldade em seguir regras que considero irracionais ou arbitrárias | OEQ-Intelectual + TDAH | 2E-REGR-01 |
| 10 | Conflitos interpessoais causados pela minha impulsividade ou intensidade emocional | ASRS-HI / WFIRS | FUNC-REL-02 |
| 11 | Me interesso por temas incomuns ou avançados para o que é esperado em meu contexto | AH/SD habilidade acima da média | AHSD-HAB-06 |
| 12 | Tenho dificuldade em trabalhar em equipe quando o ritmo do grupo me parece lento | AH/SD + TDAH impaciência | 2E-EQUI-01 |

#### BLOCO 6: "Trabalho, metas e realização" (12 itens)
Tema percebido: produtividade, carreira, metas de vida
| # | Item | Dimensão real | Código |
|---|------|--------------|--------|
| 1 | Já troquei de emprego, curso ou área de interesse muitas vezes | Multipotencialidade / TDAH | 2E-MULT-01 |
| 2 | Quando algo me apaixona, sou capaz de uma dedicação extraordinária | Renzulli-Comprometimento com tarefa | AHSD-COMP-01 |
| 3 | Tenho dificuldade em organizar tarefas ou priorizar o que é mais importante | ASRS-Desatenção/Execução | TDAH-IN-10 |
| 4 | Sinto que não atingi meu potencial apesar das minhas capacidades | Gifted underachievement | 2E-UNDER-01 |
| 5 | Adio tarefas até o último minuto e trabalho melhor sob pressão | ASRS / compensação 2e | 2E-PRESS-01 |
| 6 | Me autoproponho metas muito ambiciosas e me frusto quando não as alcanço | AH/SD perfeccionismo | AHSD-PERF-01 |
| 7 | Dificuldade em seguir procedimentos detalhados ou burocráticos | ASRS-Desatenção | TDAH-IN-11 |
| 8 | Quando domino uma habilidade, perco o interesse e quero aprender algo novo | AH/SD multipotencialidade | AHSD-HAB-07 |
| 9 | Problemas financeiros recorrentes por desorganização ou compras impulsivas | WFIRS impacto funcional | FUNC-FIN-01 |
| 10 | Tenho interesses simultâneos em áreas completamente diferentes e não consigo escolher um caminho | Multipotencialidade | AHSD-HAB-08 |
| 11 | Minha autoestima oscila muito dependendo do meu desempenho | WFIRS autoconceito + 2e | 2E-AUTO-01 |
| 12 | Preciso de autonomia e liberdade intelectual — ambientes rígidos me sufocam | AH/SD + TDAH | 2E-AUTON-01 |

#### BLOCO 7: "Olhando para trás e para frente" (12 itens)
Tema percebido: trajetória de vida, infância, reflexão existencial
| # | Item | Dimensão real | Código |
|---|------|--------------|--------|
| 1 | Na escola, eu entendia a matéria muito rápido mas tinha dificuldade em prestar atenção na aula | 2e perfil escolar | 2E-ESC-01 |
| 2 | Desde criança, esses padrões de desatenção ou agitação já existiam | DIVA persistência temporal TDAH | TDAH-PERS-01 |
| 3 | Na infância eu lia compulsivamente, aprendia sozinho ou tinha interesses incomuns para a idade | AH/SD indicador precoce | AHSD-PREC-01 |
| 4 | Já fui chamado de "inteligente mas preguiçoso" | 2e underachievement clássico | 2E-UNDER-02 |
| 5 | Questões sobre o sentido da vida, morte, justiça me ocupam mentalmente desde jovem | Depressão existencial / OEQ-Emocional+Intelectual | AHSD-EXIST-01 |
| 6 | Comportamentos de desatenção/impulsividade já geraram consequências sérias na minha vida | DIVA persistência + WFIRS | TDAH-PERS-02 |
| 7 | Sinto um "vazio" ou insatisfação crônica que não se explica por circunstâncias externas | Depressão existencial | AHSD-EXIST-02 |
| 8 | Adultos da minha infância (pais, professores) notaram que eu era "diferente" dos colegas | AH/SD indicador externo | AHSD-PREC-02 |
| 9 | Já passei por depressão ou ansiedade, e me pergunto se há algo mais por trás disso | 2e comorbidade / mascaramento | 2E-COMOR-01 |
| 10 | Sinto que as estruturas sociais convencionais (carreira linear, rotina fixa) não foram feitas para mim | AH/SD + TDAH | 2E-ESTR-01 |
| 11 | Minha família tem histórico de pessoas com características similares (TDAH, superdotação, ou ambos) | Histórico familiar | 2E-FAM-01 |
| 12 | Se pudesse escolher, redesenharia completamente como a sociedade funciona | OEQ-Intelectual / AH/SD idealismo | AHSD-OE-INT-04 |

---

## 5. MOTOR DE PONTUAÇÃO (SCORING ENGINE)

### 5.1 Dimensões calculadas

O motor de pontuação calcula **10 escores dimensionais** a partir dos 84 itens:

| Dimensão | Código | Itens | Pontuação máx | Limiar sugestivo |
|----------|--------|-------|---------------|------------------|
| TDAH — Desatenção | TDAH-IN | 11 itens TDAH-IN-* | 44 | ≥ 24 |
| TDAH — Hiperatividade/Impulsividade | TDAH-HI | 6 itens TDAH-HI-* | 24 | ≥ 14 |
| TDAH — Persistência temporal | TDAH-PERS | 2 itens TDAH-PERS-* | 8 | ≥ 5 |
| AH/SD — Superexcitabilidade Intelectual | AHSD-INT | 4 itens AHSD-OE-INT-* | 16 | ≥ 10 |
| AH/SD — Superexcitabilidade Emocional | AHSD-EMO | 5 itens AHSD-OE-EMO-* | 20 | ≥ 13 |
| AH/SD — Superexcitabilidade Sensorial | AHSD-SEN | 3 itens AHSD-OE-SEN-* | 12 | ≥ 8 |
| AH/SD — Superexcitabilidade Psicomotora | AHSD-PSI | 5 itens AHSD-OE-PSI-* | 20 | ≥ 13 |
| AH/SD — Superexcitabilidade Imaginativa | AHSD-IMA | 5 itens AHSD-OE-IMA-* | 20 | ≥ 13 |
| AH/SD — Habilidade e Comprometimento | AHSD-HAB | 10 itens AHSD-HAB/COMP/CRIA/PERF/PREC/EXIST-* | 40 | ≥ 25 |
| Dupla Excepcionalidade (2e) | 2E | 18 itens 2E-* | 72 | ≥ 40 |

### 5.2 Escores compostos

```
ESCORE_TDAH_TOTAL = TDAH-IN + TDAH-HI
  → Faixa: 0-68
  → Sugestivo: ≥ 38 (alinhado ao cutoff ASRS Part A escalado)

ESCORE_AHSD_TOTAL = AHSD-INT + AHSD-EMO + AHSD-SEN + AHSD-PSI + AHSD-IMA + AHSD-HAB
  → Faixa: 0-128
  → Sugestivo: ≥ 78

ESCORE_2E = soma dos 18 itens com código 2E-*
  → Faixa: 0-72
  → Sugestivo: ≥ 40

IMPACTO_FUNCIONAL = soma dos itens FUNC-*
  → Faixa: 0-16
  → Qualquer item ≥ 3 = flag de impacto significativo
```

### 5.3 Perfis resultantes

O relatório classifica o perfil em um de 4 cenários (NÃO é diagnóstico — é orientação para o profissional):

| Perfil | Condição | Recomendação primária |
|--------|----------|----------------------|
| **Perfil A — Indicadores predominantes de TDAH** | TDAH_TOTAL ≥ 38 AND AHSD_TOTAL < 78 AND TDAH-PERS ≥ 5 | Encaminhar para avaliação neuropsicológica com foco em TDAH; considerar reavaliação de medicação |
| **Perfil B — Indicadores predominantes de AH/SD** | AHSD_TOTAL ≥ 78 AND TDAH_TOTAL < 38 | Encaminhar para avaliação de superdotação com WAIS-III; investigar se sintomas TDAH-like são superexcitabilidades |
| **Perfil C — Indicadores de Dupla Excepcionalidade (2e)** | TDAH_TOTAL ≥ 38 AND AHSD_TOTAL ≥ 78 AND 2E ≥ 40 | Encaminhar para avaliação integrada TDAH + AH/SD com profissional especializado em dupla excepcionalidade |
| **Perfil D — Indicadores sub-limiares** | TDAH_TOTAL < 38 AND AHSD_TOTAL < 78 | Rastreio não sugere indicadores significativos; considerar avaliação se houver queixa funcional relevante |

### 5.4 Flags especiais

O motor deve sinalizar automaticamente:

- **FLAG: Mascaramento potencial** → Se AHSD-INT ≥ 12 AND TDAH-IN ≥ 20 (alta inteligência pode mascarar TDAH)
- **FLAG: Depressão existencial** → Se AHSD-EXIST-01 ≥ 3 AND AHSD-EXIST-02 ≥ 3 (diferente de depressão clínica convencional)
- **FLAG: Multipotencialidade** → Se 2E-MULT-01 ≥ 3 AND AHSD-HAB-07 ≥ 3 AND AHSD-HAB-08 ≥ 3
- **FLAG: Impacto funcional grave** → Se 2+ itens FUNC-* ≥ 3
- **FLAG: Perfil espinhoso (spiky)** → Se diferença entre o maior e menor escore dimensional normalizado ≥ 50%

---

## 6. FLUXO DO USUÁRIO (USER FLOW)

### 6.1 Telas e navegação

```
[1. Landing page]
    ↓
[2. Consentimento informado + disclaimer]
    ↓
[3. Dados demográficos mínimos]
    ↓
[4. BLOCO 1: "Como sua mente funciona" — 12 itens]
    ↓ (progresso: 14%)
[5. BLOCO 2: "Como você sente o mundo" — 12 itens]
    ↓ (progresso: 29%)
[6. BLOCO 3: "Seu corpo e sua energia" — 12 itens]
    ↓ (progresso: 43%)
[7. BLOCO 4: "Imaginação e mundo interior" — 12 itens]
    ↓ (progresso: 57%)
[8. BLOCO 5: "Você e os outros" — 12 itens]
    ↓ (progresso: 71%)
[9. BLOCO 6: "Trabalho, metas e realização" — 12 itens]
    ↓ (progresso: 86%)
[10. BLOCO 7: "Olhando para trás e para frente" — 12 itens]
    ↓ (progresso: 100%)
[11. Tela de processamento (animação enquanto calcula)]
    ↓
[12. Resultado — Dashboard visual + PDF]
```

### 6.2 Tela de consentimento (OBRIGATÓRIA — bloqueante)

Texto exato (não pode ser editado pelo usuário; deve ser aceito integralmente):

> **TERMO DE CONSENTIMENTO E LIMITAÇÕES**
>
> Este questionário é uma ferramenta de **rastreio (screening)**, não de diagnóstico. Seus resultados indicam a **probabilidade de características** associadas a TDAH e/ou Altas Habilidades/Superdotação, e NÃO constituem laudo, parecer ou diagnóstico clínico.
>
> O diagnóstico formal de TDAH requer avaliação por psiquiatra ou neurologista. A identificação de Altas Habilidades/Superdotação requer avaliação neuropsicológica com instrumentos padronizados (como WAIS-III) administrados por psicólogo com registro ativo no CRP.
>
> Ao prosseguir, declaro que:
> - Tenho 18 anos ou mais
> - Compreendo que este rastreio não substitui avaliação profissional
> - Responderei com honestidade para obter resultados úteis
> - Os dados são processados localmente e não são armazenados em servidor

### 6.3 Dados demográficos (tela 3)

Campos coletados (mínimos necessários para contextualização do relatório):

| Campo | Tipo | Obrigatório | Justificativa |
|-------|------|-------------|---------------|
| Nome ou apelido | Texto livre | Sim | Personalização do relatório |
| Idade | Numérico (18-99) | Sim | Normalização por faixa etária |
| Escolaridade | Select: Fundamental / Médio / Superior incompleto / Superior / Pós-graduação | Sim | Contexto para o profissional |
| Diagnóstico prévio de TDAH | Select: Sim / Não / Em investigação | Sim | Contextualização clínica |
| Uso de medicação para TDAH | Select: Sim, atualmente / Sim, no passado / Não / Não sei | Sim | Flag para relatório |
| Acompanhamento psiquiátrico/psicológico atual | Select: Sim / Não | Sim | Contexto |
| Gênero | Select: Masculino / Feminino / Não-binário / Prefiro não dizer | Não | Contexto (AH/SD tem viés de identificação por gênero) |

### 6.4 Apresentação dos itens

- **Um item por vez** em mobile (touch-friendly)
- **Slider horizontal ou botões Likert visuais** (0-4) com labels descritivos
- **Barra de progresso** no topo (por bloco e geral)
- **Título do bloco** sempre visível
- **Botão "Voltar"** para corrigir resposta anterior
- **Sem botão "Pular"** — todas as respostas são obrigatórias
- **Auto-advance** ao selecionar resposta (com delay de 400ms para feedback visual)
- **Animação suave de transição** entre itens (slide horizontal)
- **Tempo estimado** mostrado no início de cada bloco (ex: "~3 minutos")
- **Ordem dos itens dentro do bloco**: randomizada por sessão

### 6.5 Salvamento de progresso

- Progresso salvo em **localStorage** a cada resposta
- Se o usuário fechar e reabrir, pergunta: "Você tem uma sessão em andamento. Deseja continuar de onde parou?"
- Sessão expira em **72 horas**
- Sem criação de conta, sem login, sem coleta de email

---

## 7. RELATÓRIO / OUTPUT

### 7.1 Dashboard visual (tela 12)

Componentes do dashboard (renderizado no browser, responsivo):

1. **Radar chart (spider graph)** com as 10 dimensões normalizadas (0-100%)
2. **Perfil identificado** (A, B, C ou D) com descrição em linguagem leiga
3. **Barras horizontais** por dimensão com indicação de limiar
4. **Flags especiais** (se ativas) com ícones e explicação curta
5. **Botão "Exportar PDF"** (destaque visual primário)
6. **Botão "Recomeçar"** (secundário, com confirmação)

### 7.2 Relatório PDF — Estrutura

O PDF tem **duas seções distintas**: uma para o próprio usuário e uma para o profissional.

#### SEÇÃO A: Para o usuário (linguagem leiga)

```
CAPA
  NeuroDex — Relatório de Rastreio Neurocognitivo
  Nome: [nome]
  Data: [dd/mm/yyyy]
  "Este documento é um rastreio, não um diagnóstico."

PÁGINA 1: Seu Perfil
  - Radar chart das 10 dimensões
  - Perfil identificado (A/B/C/D) com texto explicativo de 3-5 frases
  - Disclaimer repetido

PÁGINA 2: Suas Dimensões em Detalhe
  - Barras horizontais por dimensão
  - Para cada dimensão acima do limiar: parágrafo explicativo breve (3 frases)
  - Flags especiais (se ativas)

PÁGINA 3: Próximos Passos Recomendados
  - Lista numerada de ações recomendadas (baseada no perfil)
  - Tipos de profissional a procurar
  - Referência ao ConBraSD e ABDA como fontes de profissionais
  - Menção ao teste Mensa como complemento opcional
```

#### SEÇÃO B: Briefing Clínico (para o profissional)

```
PÁGINA 4: BRIEFING PARA O PROFISSIONAL
  Cabeçalho: "Esta seção destina-se ao profissional que conduzirá a avaliação
  formal. Os dados abaixo são de autorrelato e não têm valor diagnóstico."

  4.1 Dados demográficos
  4.2 Tabela completa de escores:
    - Todas as 10 dimensões com pontuação bruta, máximo, percentual e status (abaixo/acima limiar)
    - Escores compostos (TDAH total, AHSD total, 2e, Impacto funcional)
  4.3 Flags ativas com detalhamento
  4.4 Perfil sugerido com justificativa quantitativa
  4.5 Respostas individuais de itens-chave:
    - Todos os itens com pontuação 4 (máxima)
    - Todos os itens TDAH-PERS (persistência temporal)
    - Todos os itens FUNC (impacto funcional)
    - Itens 2E com pontuação ≥ 3
  4.6 Hipóteses a investigar (geradas automaticamente):
    - Se perfil C: "Considerar avaliação integrada para dupla excepcionalidade.
      Recomenda-se WAIS-III com atenção ao perfil GAI vs. FSIQ e à discrepância
      entre ICV/IOP e IMO/IVP."
    - Se FLAG mascaramento: "Alta inteligência pode estar compensando déficits
      executivos. O WAIS-III pode mostrar QI Total rebaixado por Velocidade de
      Processamento, com GAI significativamente superior."
    - Se FLAG depressão existencial: "Investigar depressão existencial vs. depressão
      clínica. A Teoria da Desintegração Positiva de Dabrowski pode ser referencial
      interpretativo relevante."

PÁGINA 5: Referências Científicas
  Lista das fontes dos instrumentos utilizados no rastreio:
  - Kessler et al. (2005) — ASRS v1.1
  - Falk et al. (1999) — OEQ-II
  - Oliveira & Barbosa (2014) — OEQ-II versão brasileira
  - Silverman — Gifted Adults Checklist
  - Renzulli (1978, 2005) — Teoria dos Três Anéis
  - Rommelse et al. (2016) — TDAH em contexto de alta inteligência
  - Antshel et al. (2007, 2008) — Funções executivas em adultos 2e
  - Webb et al. — Misdiagnosis and Dual Diagnoses
  - Resolução CFP nº 001/2009
  - Resolução CNE/CEB nº 4/2009
```

### 7.3 Geração do PDF

- Gerado **inteiramente no client-side** (sem envio de dados para servidor)
- Biblioteca recomendada: **jsPDF** + **html2canvas** ou **jsPDF-AutoTable**
- O radar chart deve ser renderizado como imagem PNG inline no PDF
- Formatação: A4, margens de 2cm, fonte 11pt, cabeçalho com logo e disclaimer em todas as páginas

---

## 8. REQUISITOS TÉCNICOS

### 8.1 Stack recomendada

| Componente | Tecnologia | Justificativa |
|-----------|-----------|---------------|
| Framework | React (Vite) ou Next.js (static export) | Componentes reativos, SSG possível |
| Estilização | Tailwind CSS | Mobile-first, design system rápido |
| Charts | Chart.js ou Recharts | Radar chart nativo |
| PDF | jsPDF + jsPDF-AutoTable + html2canvas | Client-side, sem servidor |
| Persistência | localStorage | Sem backend, privacidade total |
| Deploy | Vercel ou Netlify (static) | Gratuito, CDN global |
| Testes | Vitest + Testing Library | Validação do scoring engine |

### 8.2 Requisitos de performance

- Lighthouse score ≥ 90 em todas as categorias (mobile)
- Primeiro carregamento < 3s em 3G
- Transições entre itens < 100ms
- Geração de PDF < 5s

### 8.3 Acessibilidade

- WCAG 2.1 AA compliance
- Contraste mínimo 4.5:1
- Navegação por teclado completa
- Labels ARIA em todos os controles interativos
- Suporte a screen readers
- Font size mínimo 16px em mobile

### 8.4 Privacidade e dados

- **ZERO coleta de dados em servidor**
- Todas as respostas processadas em client-side (browser)
- localStorage limpo ao exportar PDF (com opção de manter)
- Nenhum cookie de tracking
- Nenhuma integração com analytics (GA, etc.) — ou, se houver, apenas page views, nunca respostas
- Disclaimer de privacidade explícito no consentimento

### 8.5 Responsividade

| Breakpoint | Layout |
|-----------|--------|
| < 640px (mobile) | Um item por vez, slider vertical, botões full-width |
| 640-1024px (tablet) | Um item por vez, layout mais espaçado |
| > 1024px (desktop) | Opcionalmente 2-3 itens por vez, layout centralizado max-width 720px |

---

## 9. DESIGN E UX

### 9.1 Tom e identidade visual

- **Tom**: Acolhedor, não-clínico, exploratório. O usuário está numa jornada de autoconhecimento, não fazendo uma prova.
- **Paleta**: Tons suaves — azul-petróleo escuro (#1B4965), verde-água (#5FA8D3), lilás (#B8B8D1), branco (#FAFAFA), cinza quente (#4A4A4A)
- **Tipografia**: Inter ou DM Sans (sans-serif, boa legibilidade mobile)
- **Ícones**: Lucide ou Heroicons (line style)
- **Ilustrações**: Não necessárias na MVP, mas espaço reservado para futuras ilustrações abstratas nos headers dos blocos

### 9.2 Micro-interações

- Feedback háptico (vibração sutil) ao selecionar resposta em mobile (API Vibration)
- Confetti sutil ou animação de "conclusão" ao terminar todos os blocos
- Barra de progresso com animação smooth (não step)
- Transição entre blocos com animação mais elaborada (slide + fade)
- Loading state durante cálculo com animação de "processamento neural" (não spinner genérico)

### 9.3 Textos motivacionais entre blocos

Após cada bloco, antes do próximo, exibir uma tela de transição com:
- Mensagem encorajadora contextual (ex: "Ótimo. Agora vamos explorar como você sente o mundo ao seu redor.")
- Tempo restante estimado
- Ícone ou ilustração abstrata do próximo bloco
- Botão "Continuar"

---

## 10. CRITÉRIOS DE ACEITE (DEFINITION OF DONE)

### 10.1 Funcional

- [ ] Todos os 84 itens são apresentados na sequência correta de blocos
- [ ] Ordem dos itens DENTRO do bloco é randomizada por sessão
- [ ] Todas as respostas são obrigatórias (não é possível avançar sem responder)
- [ ] Botão voltar funciona corretamente
- [ ] Progresso é salvo em localStorage e pode ser retomado
- [ ] Motor de pontuação calcula corretamente todas as 10 dimensões
- [ ] Escores compostos são calculados corretamente
- [ ] Perfil (A/B/C/D) é determinado corretamente com base nos limiares
- [ ] Flags especiais são ativadas corretamente
- [ ] Dashboard visual exibe radar chart e barras por dimensão
- [ ] PDF é gerado client-side com todas as seções (A e B)
- [ ] PDF inclui radar chart como imagem
- [ ] PDF inclui todas as referências científicas
- [ ] Disclaimer está presente em todas as telas relevantes
- [ ] Consentimento é bloqueante (não é possível prosseguir sem aceitar)

### 10.2 Não-funcional

- [ ] Mobile-first: funciona perfeitamente em iPhone SE (menor tela comum)
- [ ] Lighthouse mobile ≥ 90
- [ ] WCAG 2.1 AA
- [ ] Zero chamadas de rede após carregamento inicial
- [ ] PDF gerado em < 5 segundos
- [ ] localStorage funcional para save/restore de sessão

### 10.3 Validação científica

- [ ] Todos os itens são rastreáveis ao instrumento-base (código na tabela)
- [ ] Limiares são justificáveis (documentação disponível)
- [ ] Textos de resultado não fazem afirmações diagnósticas
- [ ] Briefing clínico usa terminologia profissional correta
- [ ] Referências bibliográficas são reais e verificáveis

---

## 11. LIMITAÇÕES CONHECIDAS E RISCOS

| Risco | Mitigação |
|-------|----------|
| Usuário interpretar resultado como diagnóstico | Disclaimer repetido em 4 pontos; linguagem cuidadosa; texto "rastreio" nunca "diagnóstico" |
| Itens reformulados podem perder validade psicométrica | Documentar que os itens são "adaptados e inspirados", não tradução literal dos instrumentos validados |
| Limiares arbitrários | Basear em proporções dos cutoffs dos instrumentos originais; documentar como estimativas |
| Viés de confirmação do usuário | Aleatorizar ordem; incluir itens de controle semântico (futuro) |
| Uso indevido por profissionais | Seção B explicita limitações; não substituir avaliação formal |
| Questões legais (exercício ilegal de profissão) | Plataforma é "autoconhecimento e rastreio", não "avaliação psicológica" |

---

## 12. ROADMAP FUTURO (fora do escopo da MVP)

- v1.1: Normalização por faixa etária e gênero
- v1.2: Itens de controle e validade (escala de desejabilidade social)
- v1.3: Banco de itens com IRT (Teoria de Resposta ao Item) para teste adaptativo
- v2.0: Módulo de TEA (Transtorno do Espectro Autista) intercalado
- v2.1: Sistema de encaminhamento direto para profissionais cadastrados
- v2.2: Versão em espanhol e inglês
- v3.0: Validação psicométrica formal com estudo piloto (n ≥ 200)
