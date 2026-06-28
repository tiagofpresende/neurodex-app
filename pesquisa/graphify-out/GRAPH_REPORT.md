# Graph Report - corpus-clean  (2026-06-27)

## Corpus Check
- Corpus is ~29,878 words - fits in a single context window. You may not need a graph.

## Summary
- 77 nodes · 85 edges · 9 communities (8 shown, 1 thin omitted)
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.68)
- Token cost: 120,000 input · 6,000 output

## Community Hubs (Navigation)
- [[_COMMUNITY_AHSD e Identificação|AH/SD e Identificação]]
- [[_COMMUNITY_Antidepressivos, Placebo e Indústria|Antidepressivos, Placebo e Indústria]]
- [[_COMMUNITY_Diagnóstico Rótulo vs. Ponto de Partida|Diagnóstico: Rótulo vs. Ponto de Partida]]
- [[_COMMUNITY_DSM, Kraepelin e Prescrição|DSM, Kraepelin e Prescrição]]
- [[_COMMUNITY_Autodiagnóstico e Inflação Diagnóstica|Autodiagnóstico e Inflação Diagnóstica]]
- [[_COMMUNITY_Diagnóstico, Direitos e Políticas Públicas|Diagnóstico, Direitos e Políticas Públicas]]
- [[_COMMUNITY_Medicalização e Psiquiatria Cosmética|Medicalização e Psiquiatria Cosmética]]
- [[_COMMUNITY_Nascimento da Psicofarmacologia|Nascimento da Psicofarmacologia]]
- [[_COMMUNITY_Correlação × Causalidade|Correlação × Causalidade]]

## God Nodes (most connected - your core abstractions)
1. `Patrícia Ferraz (psicanalista, pediatra e psiquiatra)` - 12 edges
2. `Laura (cientista do canal)` - 9 edges
3. `Altas Habilidades / Superdotação (AH/SD)` - 7 edges
4. `Tomás Chiaverini (apresentador do Escafandro)` - 6 edges
5. `Juliana Belo Diniz (psiquiatra e psicanalista)` - 6 edges
6. `Inflação diagnóstica / boom de diagnósticos` - 6 edges
7. `DSM (Manual Diagnóstico e Estatístico de Transtornos Mentais)` - 5 edges
8. `Fluoxetina (Prozac)` - 5 edges
9. `Maria Aparecida Moysés (pediatra, Unicamp)` - 4 edges
10. `Teoria das monoaminas / hipótese da serotonina` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Diagnóstico como chave de acesso a direitos` --semantically_similar_to--> `Inflação diagnóstica / boom de diagnósticos`  [INFERRED] [semantically similar]
  escafandro-156-mundo-la-fora.txt → escafandro-155-resposta-quimica.txt
- `Sociedade da alta performance / produtivismo` --semantically_similar_to--> `Inflação diagnóstica / boom de diagnósticos`  [INFERRED] [semantically similar]
  mic-autismo-altaperformance.txt → escafandro-155-resposta-quimica.txt
- `Avaliação diagnóstica tridimensional` --semantically_similar_to--> `Medicina de precisão / marcadores biológicos`  [INFERRED] [semantically similar]
  mic-autismo-altaperformance.txt → escafandro-156-mundo-la-fora.txt
- `Patrícia Ferraz (psicanalista, pediatra e psiquiatra)` --references--> `Ritalina / cloridrato de metilfenidato (Concerta)`  [EXTRACTED]
  mic-autismo-altaperformance.txt → escafandro-155-resposta-quimica.txt
- `Patrícia Ferraz (psicanalista, pediatra e psiquiatra)` --references--> `Autodiagnóstico / testes de redes sociais`  [EXTRACTED]
  mic-autismo-altaperformance.txt → escafandro-155-resposta-quimica.txt

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Epidemia de diagnósticos e medicalização excessiva** — person_tomas_chiaverini, instrument_dsm, concept_inflacao_diagnostica, concept_medicalizacao, drug_isrs [INFERRED 0.75]
- **Fluxo de identificação de altas habilidades/superdotação** — person_laura, instrument_wisc, person_renata_abrao, concept_ahsd, concept_mascaramento [INFERRED 0.75]
- **Invenção acidental dos antidepressivos e teoria das monoaminas** — person_roland_kuhn, drug_imipramina, drug_clorpromazina, concept_teoria_monoaminas, drug_fluoxetina_prozac [INFERRED 0.85]

## Communities (9 total, 1 thin omitted)

### Community 0 - "AH/SD e Identificação"
Cohesion: 0.14
Nodes (17): Altas Habilidades / Superdotação (AH/SD), Dupla excepcionalidade / confusão diagnóstica AH-TDAH-TEA, Efeito Flynn, Teoria das inteligências múltiplas, Mascaramento / camuflagem, Neurodivergência, Teoria dos três anéis, USP (grupo de pesquisa TDAH Brasil) (+9 more)

### Community 1 - "Antidepressivos, Placebo e Indústria"
Cohesion: 0.14
Nodes (16): Conflitos de interesse no DSM, Efeito placebo (ensaios clínicos de antidepressivos), Teoria das monoaminas / hipótese da serotonina, Carbamazepina (Tegretol, anticonvulsivo), Fluoxetina (Prozac), Inibidores seletivos de recaptação de serotonina (ISRS / antidepressivos), Editora Fósforo, Eli Lilly (farmacêutica) (+8 more)

### Community 2 - "Diagnóstico: Rótulo vs. Ponto de Partida"
Cohesion: 0.22
Nodes (10): Comorbidade (crítica), Diagnóstico como ponto de partida, Avaliação diagnóstica tridimensional, Medicina de precisão / marcadores biológicos, Diagnóstico como rótulo (looping), Folha de São Paulo / Meu Inconsciente Coletivo, PAI de São Paulo (assistência psiquiátrica infantil), Zygmunt Bauman (+2 more)

### Community 3 - "DSM, Kraepelin e Prescrição"
Cohesion: 0.22
Nodes (9): Classificação por prognóstico (Kraepelin), Alprazolam (Frontal, ansiolítico), Venlafaxina (Venlift, antidepressivo SNRI), Tartarato de zolpidem (Ambien / Stilnox), Associação Americana de Psiquiatria (APA), Escafandro (podcast, Rádio Guarda-chuva), DSM (Manual Diagnóstico e Estatístico de Transtornos Mentais), Emil Kraepelin (+1 more)

### Community 4 - "Autodiagnóstico e Inflação Diagnóstica"
Cohesion: 0.25
Nodes (8): Autodiagnóstico / testes de redes sociais, Inflação diagnóstica / boom de diagnósticos, Sociedade da alta performance / produtivismo, Risperidona (antipsicótico), Ritalina / cloridrato de metilfenidato (Concerta), Unicamp, ASRS-18 (questionário de triagem TDAH), Maria Aparecida Moysés (pediatra, Unicamp)

### Community 5 - "Diagnóstico, Direitos e Políticas Públicas"
Cohesion: 0.33
Nodes (6): Diagnóstico como chave de acesso a direitos, Saúde mental coletiva / soluções coletivas, IEPS (Instituto de Estudos para Políticas de Saúde), Ministério da Previdência Social, SUS (Sistema Único de Saúde), Dayana Rosa (IEPS, saúde mental coletiva)

### Community 6 - "Medicalização e Psiquiatria Cosmética"
Cohesion: 0.40
Nodes (5): Medicalização, Psiquiatria cosmética, Michel Foucault, Peter Kramer (psiquiatra americano), Ouvindo o Prozac (livro)

### Community 7 - "Nascimento da Psicofarmacologia"
Cohesion: 0.50
Nodes (4): Psicofarmacologia (surgimento), Clorpromazina (Amplictil), Imipramina (primeiro antidepressivo), Roland Kuhn (psiquiatra suíço)

## Knowledge Gaps
- **32 isolated node(s):** `Ana (co-apresentadora do canal)`, `Letícia Morelo (psicóloga)`, `Howard Gardner`, `Joseph Renzulli`, `Zygmunt Bauman` (+27 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Patrícia Ferraz (psicanalista, pediatra e psiquiatra)` connect `Diagnóstico: Rótulo vs. Ponto de Partida` to `DSM, Kraepelin e Prescrição`, `Autodiagnóstico e Inflação Diagnóstica`, `Diagnóstico, Direitos e Políticas Públicas`?**
  _High betweenness centrality (0.302) - this node is a cross-community bridge._
- **Why does `Juliana Belo Diniz (psiquiatra e psicanalista)` connect `Antidepressivos, Placebo e Indústria` to `Diagnóstico: Rótulo vs. Ponto de Partida`, `Nascimento da Psicofarmacologia`?**
  _High betweenness centrality (0.229) - this node is a cross-community bridge._
- **What connects `Ana (co-apresentadora do canal)`, `Letícia Morelo (psicóloga)`, `Howard Gardner` to the rest of the system?**
  _35 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `AH/SD e Identificação` be split into smaller, more focused modules?**
  _Cohesion score 0.13970588235294118 - nodes in this community are weakly interconnected._
- **Should `Antidepressivos, Placebo e Indústria` be split into smaller, more focused modules?**
  _Cohesion score 0.14166666666666666 - nodes in this community are weakly interconnected._