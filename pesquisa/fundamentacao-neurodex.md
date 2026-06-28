# Fundamentação ética e científica do NeuroDex
### Devo publicar uma ferramenta de rastreio de TDAH + AH/SD? E, se sim, como?

> Relatório de apoio à decisão, encomendado por Tiago. Sintetiza (a) o corpus que ele forneceu — 1 vídeo + 3 episódios de podcast — e (b) pesquisa acadêmica recente e verificada, equilibrando os dois lados do debate. Termina em uma **recomendação** e em **implicações concretas de design**. Fontes em links ao longo do texto e na seção final. Notas de trabalho e trilha de fontes em [`notas-pesquisa.md`](./notas-pesquisa.md). Transcrições em [`../conteudos/transcricoes/`](../conteudos/transcricoes/).

---

## 0. TL;DR (a resposta curta)

1. **O debate é real e o teu desconforto é legítimo.** Há consenso crescente — incluindo dentro da própria psiquiatria — de que vivemos uma **inflação diagnóstica** e uma **medicalização da vida comum**. TDAH e autismo são as pontas mais visíveis disso. Mas o lado oposto também é verdadeiro: as condições existem, o **subdiagnóstico** (sobretudo em adultos, mulheres e AH/SD) é real, e ferramentas de autoconhecimento **podem** ajudar.
2. **O risco central do NeuroDex não é filosófico, é estatístico-ético.** Um rastreio amplo, direto ao consumidor, numa população de baixa prevalência **produz maioria de falsos-positivos por construção matemática** — e o teu motor de pontuação atual ([P0 do plano técnico](#7-ponte-com-a-análise-técnica)) está calibrado de um jeito que *agrava* esse viés. Isso colide frontalmente com teu objetivo de "não rotular nem empurrar pra medicação".
3. **Recomendação:** **publicar, mas reposicionar** — de "rastreio que entrega um perfil/pré-diagnóstico" para "**ferramenta de autoconhecimento que organiza uma conversa**", sem escore-veredito, sem nomear transtornos como conclusão, com linguagem de hipótese e com a lógica de **triagem sequencial** assumida explicitamente. Detalhes na seção 6. Se você **não** quiser fazer esse reposicionamento, a opção honesta é **não publicar como "rastreio"**.

---

## 1. A pergunta que o produto levanta

O NeuroDex se propõe a pegar adultos que "suspeitam de TDAH e/ou superdotação" e devolver um **perfil dimensional (A/B/C/D)**, **flags** e um **briefing clínico** para o profissional. Ou seja: ele ocupa exatamente o ponto onde o debate atual é mais quente — a fronteira entre **autoconhecimento** e **autodiagnóstico**, entre **dar linguagem ao sofrimento** e **fabricar pacientes**.

O corpus que você reuniu cobre os dois lados dessa fronteira com rara qualidade. Vale tratar a discussão sobre autismo como **análoga** (como faz a Tati Bernardi), porque o mecanismo — critério frouxo + checklist + redes sociais + indústria + pressão por desempenho — é o mesmo para qualquer condição psíquica, TDAH e AH/SD incluídos.

---

## 2. O que o corpus diz (ingestão dos 4 conteúdos)

### 2.1 "Nunca vi 1 cientista" — autorrelato de AH/SD (YouTube)
A narradora (cientista/microbiologista) entra como **grupo controle** de um estudo da USP (TDAH Brasil), pontua alto em hiperatividade no **DIVA**, e a investigação termina em **altas habilidades**, não TDAH. O relato é didático e equilibrado, e entrega três ideias que são praticamente um **manual de design** para o NeuroDex:
- AH/SD **não é transtorno**: não tem critério nem biomarcador; identificar exige **psicometria + anamnese** por neuropsicólogo, não checklist.
- **Mascaramento** e dependência de contexto: "isso pode mascarar várias coisas nos testes"; o **momento de vida** em que se faz o teste influencia o resultado; adultos já desenvolveram ferramentas de coping que escondem o quadro.
- O sentido da identificação é **autoconhecimento e ferramentas, não rótulo**: *"que isso traga ferramentas pra que a pessoa consiga se compreender melhor… e navegar melhor pelo mundo"* — e **não precisa virar profissão** ("às vezes a gente só precisa poder fazer um tricô em paz").

### 2.2 "Meu Inconsciente Coletivo" — Tati Bernardi × psiquiatra Patrícia Ferraz
A tese da psiquiatra infantil é **a defesa mais forte do teu próprio princípio**:
- **"O diagnóstico tem que ser um ponto de partida. Não pode ser um rótulo, não pode ser um fim, não pode ser um instrumento que se sobreponha à pessoa."**
- Crítica direta ao **checklist/DSM** ("diagnóstico feito em cima de critério de sinalzinho… tirar 10 no DSM"); diagnóstico tem de ser "tridimensional" (história bio-neuro-psíquica, psicológica, familiar, social, ambiental).
- A cena do **teste de autismo de rede social** (a mãe de 78 anos que "se descobre autista" por um quiz de 10 perguntas) — exatamente o comportamento que um app pode induzir.
- **Remédio muda "rendimento mental" (atenção, humor, raciocínio), não muda "quem você é" nem suas dificuldades**; estimulante "melhora função executiva mas piora memória, abstração, criatividade — tudo fica sedado"; Ritalina só **depois** de falharem estratégias adaptativas (teatro, esporte, troca de escola).
- O **diagnóstico como chave de acesso**: no Brasil, terapias só são cobertas se houver laudo de autismo → incentivo perverso a rotular.
- A **sociedade da alta performance** (cita **Bauman**: o filho como "objeto de consumo") como motor da caça a diagnósticos.

### 2.3 / 2.4 "Rádio Escafandro — Sociedade Tarja Preta" (2 partes, investigativo)
A pergunta-guia: *"vivemos uma epidemia de transtornos mentais ou uma epidemia de drogas para tratá-los?"* O episódio constrói, com fontes, o lado crítico — **mas com honestidade intelectual**, dando voz ao contraditório (especialmente pela psiquiatra **Juliana Belo Diniz**, autora de *O que os psiquiatras não te contam*, Fósforo, 2025):
- **História do DSM**: da abordagem causal (psicanálise) à virada de **1980 (DSM-III)**, baseada em **Kraepelin** — checklist de sintomas, sem inferência causal, para padronizar a prescrição. DSM-II (1968) tinha 182 diagnósticos; DSM-5 (2013) passa de 300.
- **O remédio define o transtorno**: caso **Peter Kramer** ("Ouvindo o Prozac", "psiquiatria cosmética") — os ISRS ajudaram a *criar* a categoria de ansiedade que depois passaram a tratar.
- **Confiabilidade baixa** e **conflito de interesse** (números verificados na seção 4).
- **Autodiagnóstico por likes**: o episódio **cita nominalmente o ASRS-18** como exemplo de "teste de TikTok" — e o NeuroDex usa itens do ASRS. **Foucault** (medicalização: o poder médico invade o que é normal da vida).
- **Contraponto essencial (Juliana)**: *"não podemos demonizar essas medicações… há vidas que são salvas"*; o problema não é o remédio, é o **remédio fora de contexto** ("antidepressivo que cai do céu", "chat de GPT dizendo que você precisa tomar") — ilustrado pela reportagem em que o autor recebe **diagnóstico + 2 receitas controladas em 12 minutos**, numa consulta que não perguntou nada sobre sua vida.

**Síntese do corpus:** os quatro conteúdos convergem para uma mesma tese — *o problema não é a existência das condições, é a transformação de toda diferença/sofrimento em diagnóstico-rótulo-receita, acelerada por checklist + internet + indústria + pressão por performance.*

---

## 3. O lado crítico, com lastro acadêmico

- **Inflação diagnóstica / medicalização do normal.** Allen Frances — ex-presidente da força-tarefa do DSM-IV — argumenta em *Saving Normal* que o DSM-5 converte "milhões de normais em pacientes", patologizando luto, preocupação e esquecimento ([Frances/Wikipedia](https://en.wikipedia.org/wiki/Allen_Frances)). No Brasil, **Moysés & Collares** descrevem a "invenção das doenças do não aprender", que isenta escola e sociedade e culpa o indivíduo ([SciELO](https://www.scielo.br/j/pe/a/3JxP7Jzq5JCwpN76rQFwVDp/?lang=pt)).
- **TDAH adulto e o problema do rastreio.** ~**90%** das pessoas que pontuam positivo no rastreio ASRS/OMS **não** confirmam TDAH em avaliação rigorosa; a prevalência adulta real ronda **3,1%** ([umbrella review, PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11859750/); [AAMC](https://www.aamc.org/news/adult-adhd-overdiagnosed-or-finally-getting-attention-it-deserves)). Não existe **padrão-ouro** instrumental para TDAH adulto ([revisão, PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10479229/)).
- **Limites da medicação.** No **estudo MTA** (NIMH), a vantagem do estimulante aos 14–24 meses **desaparece aos 36 meses** ([PubMed](https://pubmed.ncbi.nlm.nih.gov/17667478/)). A meta-análise de **Kirsch (2008, PLoS Medicine)**, usando inclusive dados não publicados enviados à FDA, achou diferença média de **~1,8 ponto** na escala Hamilton entre antidepressivo e placebo — clinicamente relevante só nos casos muito graves ([PLoS Medicine](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.0050045)). *(Contestada — ver seção 5.)*
- **Rótulo que molda a pessoa (filosofia).** Ian **Hacking** mostra que diagnósticos psíquicos são "human kinds" **interativos**: ser classificado **muda o autoconceito e o comportamento**, retroalimentando a própria categoria — o "looping effect" ([Tsou/PhilSci](https://philsci-archive.pitt.edu/25137/1/Tsou-2025-Hacking-Monist-Preprint.pdf); [papel do clínico, PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12380643/)). É o nome acadêmico exato do teu medo do **"comodismo identitário"** ("sou assim porque tenho tal diagnóstico").
- **Autodiagnóstico mediado por redes.** #ADHD (~3M) e #Autism (~2M) de posts; a literatura recente aponta desinformação, normalização e glamourização — com benefícios reais (comunidade, acesso quando falta cuidado) ([Tandfonline 2024](https://www.tandfonline.com/doi/full/10.1080/02667363.2024.2409451)).

---

## 4. Os números falados nos podcasts — verificados

| Afirmação no áudio | Verificação | Fonte |
|---|---|---|
| "Só ~15% dos médicos concordam no mesmo diagnóstico de depressão" | Confiabilidade do DSM-5 para depressão maior: **kappa 0,28** ("questionável"), caiu de ~0,8 no DSM-III. O "15% concordam" é simplificação de uma concordância baixa real. | [DSM-5 field trials, AJP](https://psychiatryonline.org/doi/10.1176/appi.ajp.2012.12091189) |
| "~60% do painel do DSM-5 recebeu dinheiro da indústria; US$14 mi" | Davis et al., **BMJ 2024**: 60% dos 92 membros; **US$14,2 mi**; em ¾ dos painéis a maioria tinha vínculo. | [BMJ/PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC10777894/) |
| "Placebos ~82% tão eficazes quanto antidepressivos" | Kirsch 2008: diferença pequena (~1,8 ponto HAM-D), relevante só em depressão muito grave. | [PLoS Medicine](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.0050045) |
| "Afastamentos por saúde mental +70% na década; ~meio milhão" | Previdência 2024: **472.328** benefícios (ansiedade 141k, depressão 113k); **+68%** vs 2023; ~dobraram em 10 anos. | [Min. Previdência](https://www.gov.br/previdencia/pt-br/noticias/2026/janeiro/previdencia-social-concede-546-254-beneficios-por-incapacidade-temporaria-por-transtornos-mentais-e-comportamentais); [Agência Brasil](https://agenciabrasil.ebc.com.br/saude/noticia/2025-03/afastamentos-por-transtornos-mentais-dobram-em-dez-anos-chegam-440-mil) |

Conclusão: os conteúdos são **jornalística e cientificamente sólidos** — os números resistem à verificação (com pequenas simplificações retóricas, sinalizadas acima).

---

## 5. O contraditório — para não cair no viés oposto

Honestidade intelectual exige registrar que a crítica à medicalização **também** tem seus excessos, e que negar diagnóstico pode ferir tanto quanto rotular:

- **As condições existem e o subdiagnóstico é real.** AH/SD e TDAH adulto (sobretudo em mulheres) são historicamente **subidentificados**; o atraso custa anos de sofrimento sem nome (é o próprio relato da cientista). Webb e a SENG documentam o oposto do alarmismo: superdotados **mal diagnosticados como TDAH** que recebem **medicação desnecessária** ([SENG](https://www.sengifted.org/post/misdiagnosis-and-dual-diagnosis-of-gifted-children)).
- **Medicação salva vidas.** A própria Juliana Belo Diniz, voz crítica do podcast, insiste: *"não podemos demonizar… há vidas salvas"* (relação depressão–suicídio). Kirsch é **contestado** (reanálises de Fountoulakis & Möller; eficácia real em casos graves).
- **Kappa baixo ≠ transtorno inexistente.** Baixa confiabilidade mostra **fronteiras nebulosas e critérios frouxos**, não que a depressão "não exista".
- **Neurodiversidade tem dois gumes.** O paradigma "diferença, não patologia" / "lack of fit" (descompasso neurotipo-ambiente) é libertador, mas também pode **romantizar** e atrasar cuidado necessário ([Sociology Compass 2024](https://compass.onlinelibrary.wiley.com/doi/10.1111/soc4.13249)).

Ou seja: a linha defensável **não é** "diagnóstico é ruim", e sim **"diagnóstico-rótulo-automático, fora de contexto, é ruim"**. É exatamente onde você quer estar.

---

## 6. O nó do NeuroDex: a matemática do rastreio (e o que fazer)

### 6.1 Por que um rastreio amplo erra a maioria dos positivos
Esta é a parte que decide o projeto. O **valor preditivo positivo (VPP)** de qualquer teste **despenca em baixa prevalência**: mesmo com boa sensibilidade/especificidade, a maioria dos positivos vira **falso-alarme**. Exemplo da literatura: um instrumento com sensibilidade 28% e especificidade 97% tem **VPP de ~15%** numa população de base baixa — 85% dos "positivos" não têm a condição ([Oxford/JPepsy, base-rate fallacy](https://academic.oup.com/jpepsy/article/41/10/1081/2951811); [guia de VPP](https://www.psychiatrist.com/jcp/positive-predictive-value-clinician-guide-avoid-misinterpreting-results-screening-tests/)). Ignorar isso é apontado como **falha ética** (princípios de beneficência/não-maleficência), porque o falso-positivo gera **estigma e exposição a efeitos colaterais**.

Tradução para o NeuroDex: ele é um **rastreio amplo, direto ao consumidor, de autosseleção** (quem faz já "suspeita") — o cenário onde o VPP é pior. E o teu motor **piora isso de dois modos**: (1) o bug de calibração ([P0](#7-ponte-com-a-análise-técnica)) deixa os limiares relativamente baixos, e (2) o **Perfil C (dupla excepcionalidade)** dispara fácil demais. Resultado provável: **excesso de gente saindo com um "perfil 2e" sugestivo** — o oposto do que você quer.

### 6.2 A saída que a própria literatura aponta: triagem sequencial
A mitigação consagrada é o **screening sequencial**: uma triagem ampla **só** encaminha para um instrumento específico/profissional — ela **nunca conclui nada sozinha** ([JPepsy](https://academic.oup.com/jpepsy/article/41/10/1081/2951811)). É também o que a psiquiatra Patrícia Ferraz e a cientista do vídeo dizem em outras palavras: o resultado é **ponto de partida para uma conversa**, não um veredito.

### 6.3 Implicações concretas de design (o "como")
Se for publicar, estas mudanças alinham o produto à evidência e aos teus princípios:

1. **Matar o escore-veredito.** Não entregar "Perfil A/B/C/D" como classificação. Substituir por uma **devolutiva qualitativa e reflexiva**: "o que suas respostas podem estar dizendo sobre como você funciona" — sem rótulo de transtorno, sem "você tem indícios de X".
2. **Nunca nomear transtorno como conclusão.** Linguagem de **hipótese e pergunta**, não de achado. Trocar "indicadores predominantes de TDAH" por "temas que podem valer uma conversa com um profissional".
3. **Assumir a triagem sequencial na cara.** Deixar explícito: "isto não diz se você tem ou não tem nada; serve para organizar o que levar a uma avaliação." Encaminhar para avaliação **multidimensional** (ecoando o "tridimensional" da Patrícia Ferraz), não para "confirmar o diagnóstico".
4. **Corrigir a estatística antes de tudo (P0).** Recalibrar `max`/`threshold` e clampar a normalização; sem isso, qualquer devolutiva está enviesada a falso-positivo. (Ver plano técnico.)
5. **Desarmar o viés de medicação.** Incluir, na devolutiva e no briefing, o enquadramento da Patrícia Ferraz: remédio muda "rendimento mental", não "quem você é"; estratégias adaptativas e contexto **antes** de qualquer fármaco. Nunca sugerir reavaliação de medicação a partir de um escore (o teu Perfil A hoje faz isso — remover).
6. **Anti-comodismo identitário (Hacking).** Fechar com a mensagem da cientista: identificação é **ferramenta de autocompreensão**, não carteirinha; e **não precisa virar projeto de vida nem profissão**.
7. **Tratar o autorrelato como autorrelato.** O briefing "clínico" deve declarar, no topo, que são respostas de autorrelato dependentes do **momento de vida**, sem valor diagnóstico — e evitar a estética de "laudo" que convida o profissional a já chegar com viés.
8. **Adicionar fricção contra o quiz-de-TikTok.** Tempo de reflexão, ausência de "resultado instantâneo gamificado", e um aviso explícito de que **testes curtos de internet são parte do problema** (vira uma vacina contra o próprio mau uso).

---

## 7. Ponte com a análise técnica

Este relatório se conecta ao plano técnico ([`~/.claude/plans/iterative-napping-ripple.md`](file:///Users/tiagoresende/.claude/plans/iterative-napping-ripple.md)). O achado **P0** (motor descalibrado: `AHSD_HAB` 15 itens com `max=40`, `DUAL_EXC` 25 itens com `max=72`, `AHSD_TOTAL` máx real 148 vs 128) não é só um bug de software — é **um problema ético**, porque empurra o produto exatamente na direção (falso-positivo, Perfil C fácil) que contradiz seu propósito. **A correção estatística é pré-requisito de qualquer publicação responsável.**

---

## 8. Recomendação

**Publicar — porém reposicionado como ferramenta de autoconhecimento, não de rastreio/pré-diagnóstico** — *condicionado* a: (a) corrigir a estatística (P0); (b) remover o escore-veredito e os rótulos de transtorno; (c) assumir a triagem sequencial; (d) desarmar o viés de medicação; (e) embutir a mensagem anti-rótulo/anti-comodismo.

Feito isso, o NeuroDex deixa de ser "mais um teste que diagnostica" e passa a ser uma **rara contribuição na direção certa**: dá linguagem e ferramentas ao autoconhecimento **sem** entregar a carteirinha de doente. Ele inclusive vira uma **vacina** contra o quiz-de-rede-social, ao ensinar por que testes curtos enganam.

**Se você não quiser fazer esse reposicionamento**, a recomendação honesta — coerente com tudo acima e com teus próprios princípios — é **não publicar como "rastreio/pré-diagnóstico"**, porque a matemática garante que ele rotularia mais gente do que ajudaria.

> Decisão sua. Esta é orientação fundamentada, não aprovação — precisa do teu aval antes de qualquer mudança de produto. Próximo passo proposto: eu reviso se estes achados alteram o bloco técnico (higiene/melhorias) e te trago o plano atualizado para aprovação.

---

## 9. Fontes principais
**Corpus:** transcrições em [`../conteudos/transcricoes/`](../conteudos/transcricoes/) (YouTube "Nunca vi 1 cientista"; "Meu Inconsciente Coletivo" — Patrícia Ferraz; "Rádio Escafandro #155–156" — Juliana Belo Diniz, Maria Aparecida Moysés, Dayana Rosa/IEPS).
**Acadêmicas/jornalísticas:** Frances, *Saving Normal*; Moysés & Collares ([SciELO](https://www.scielo.br/j/pe/a/3JxP7Jzq5JCwpN76rQFwVDp/?lang=pt)); umbrella review TDAH adulto ([PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11859750/)); MTA ([PubMed](https://pubmed.ncbi.nlm.nih.gov/17667478/)); Kirsch 2008 ([PLoS Med](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.0050045)); Hacking/looping ([PhilSci](https://philsci-archive.pitt.edu/25137/1/Tsou-2025-Hacking-Monist-Preprint.pdf)); Webb/SENG ([SENG](https://www.sengifted.org/post/misdiagnosis-and-dual-diagnosis-of-gifted-children)); VPP/base rate ([JPepsy](https://academic.oup.com/jpepsy/article/41/10/1081/2951811)); DSM-5 conflitos ([BMJ/PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC10777894/)); confiabilidade DSM-5 ([AJP](https://psychiatryonline.org/doi/10.1176/appi.ajp.2012.12091189)); autodiagnóstico/redes ([Tandfonline](https://www.tandfonline.com/doi/full/10.1080/02667363.2024.2409451)); Previdência 2024 ([gov.br](https://www.gov.br/previdencia/pt-br/noticias/2026/janeiro/previdencia-social-concede-546-254-beneficios-por-incapacidade-temporaria-por-transtornos-mentais-e-comportamentais)). Lista completa em [`notas-pesquisa.md`](./notas-pesquisa.md).
