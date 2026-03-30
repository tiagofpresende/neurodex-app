import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import html2canvas from 'html2canvas';
import { DimensionalScores, Profile, Flag, Demographics, Dimension } from '../engine/types';
import { SCORING_THRESHOLDS } from '../data/scoring';
import { normalizeScore } from '../utils/normalize';
import { PROFILE_DETAILS } from '../components/ProfileCard';

interface PdfPayload {
  scores: DimensionalScores;
  profile: Profile;
  flags: Flag[];
  demographics: Demographics;
  answersMap: Record<string, number>;
}

export async function generatePdf({ scores, profile, flags, demographics, answersMap }: PdfPayload) {
  const doc = new jsPDF();
  
  // PAGE 1: User Cover & Profile
  doc.setFontSize(22);
  doc.setTextColor(27, 73, 101); // ocean-900
  doc.text('NeuroDex - Rastreio Neurocognitivo', 20, 30);
  
  doc.setFontSize(12);
  doc.setTextColor(74, 74, 74); // text
  doc.text(`Nome: ${demographics.name}`, 20, 45);
  doc.text(`Data: ${new Date().toLocaleDateString('pt-BR')}`, 20, 52);
  
  doc.setFontSize(10);
  doc.text('Este documento é um rastreio, não um diagnóstico clínico formal.', 20, 65);

  const profileInfo = PROFILE_DETAILS[profile];
  doc.setFontSize(16);
  doc.setTextColor(27, 73, 101);
  doc.text(profileInfo.title, 20, 85);
  
  doc.setFontSize(12);
  doc.setTextColor(74, 74, 74);
  const splitDesc = doc.splitTextToSize(profileInfo.description, 170);
  doc.text(splitDesc, 20, 95);

  // Capture Radar Chart via hidden DOM node
  const chartElement = document.getElementById('pdf-radar-chart-container');
  if (chartElement) {
    const canvas = await html2canvas(chartElement, { scale: 2, backgroundColor: '#ffffff' });
    const imgData = canvas.toDataURL('image/png');
    doc.addImage(imgData, 'PNG', 20, 110, 170, 140);
  }

  // PAGE 2: Professional Briefing
  doc.addPage();
  doc.setFontSize(16);
  doc.setTextColor(27, 73, 101);
  doc.text('Briefing para o Profissional (Seção B)', 20, 30);
  
  doc.setFontSize(10);
  doc.setTextColor(74, 74, 74);
  const profIntro = "Esta seção destina-se ao profissional que conduzirá a avaliação formal. Os dados abaixo são de autorrelato dimensional e não têm valor de laudo.";
  doc.text(doc.splitTextToSize(profIntro, 170), 20, 40);

  // Demographics Table
  autoTable(doc, {
    startY: 55,
    head: [['Dado Demográfico', 'Resposta']],
    body: [
      ['Idade', demographics.age.toString()],
      ['Escolaridade', demographics.education],
      ['Diagnóstico prévio TDAH', demographics.priorDiagnosis],
      ['Medicação', demographics.medication],
      ['Terapia', demographics.therapy],
      ['Gênero', demographics.gender || 'Não informado']
    ],
    theme: 'grid',
    headStyles: { fillColor: [45, 106, 143] }
  });

  // Scores Table
  const tableData = Object.values(Dimension).map(dim => {
    const raw = scores[dim];
    const tr = SCORING_THRESHOLDS[dim];
    const pct = normalizeScore(raw, tr.max);
    const status = raw >= tr.threshold ? 'ACIMA' : 'ABAIXO';
    return [tr.label, `${raw}/${tr.max}`, `${pct}%`, status];
  });

  autoTable(doc, {
    startY: (doc as any).lastAutoTable.finalY + 10,
    head: [['Dimensão', 'Bruto', 'Normalizado', 'Status']],
    body: tableData,
    theme: 'striped',
    headStyles: { fillColor: [45, 106, 143] },
    columnStyles: { 3: { fontStyle: 'bold' } }
  });

  // Active Flags Table
  if (flags.length > 0) {
    const flagsData = flags.map(flag => [flag.type.replace('_', ' '), flag.description]);
    autoTable(doc, {
      startY: (doc as any).lastAutoTable.finalY + 10,
      head: [['Indicador de Risco / Flag', 'Detalhes']],
      body: flagsData,
      theme: 'grid',
      headStyles: { fillColor: [244, 164, 96] } // Laranja leve para Flags
    });
  }

  // PAGE 3: Detailed items & Next steps
  doc.addPage();
  const maxItems = Object.keys(answersMap)
    .filter(k => answersMap[k] === 4)
    .map(k => [k, '4 (Sempre)']);

  if (maxItems.length > 0) {
    doc.setFontSize(14);
    doc.setTextColor(27, 73, 101);
    doc.text('Itens Críticos (Pontuação Máxima)', 20, 20);
    
    autoTable(doc, {
      startY: 25,
      head: [['Código do Item', 'Valor Assinalado']],
      body: maxItems,
      theme: 'plain',
      headStyles: { fillColor: [27, 73, 101], textColor: [255, 255, 255] }
    });
  }

  // Next Steps
  const stepsStartY = maxItems.length > 0 ? (doc as any).lastAutoTable.finalY + 15 : 20;
  
  doc.setFontSize(16);
  doc.setTextColor(27, 73, 101);
  doc.text('Próximos Passos Recomendados', 20, stepsStartY);
  
  doc.setFontSize(11);
  doc.setTextColor(74, 74, 74);
  const nextStepsStr = "1. Agende uma consulta com um psicólogo, neuropsicólogo ou psiquiatra.\n2. Leve este relatório impresso ou em PDF para enriquecer a entrevista de anamnese.\n3. Discuta os achados com o profissional, lembrando que o rastreio reflete a sua autopercepção dimensional.";
  doc.text(doc.splitTextToSize(nextStepsStr, 170), 20, stepsStartY + 10);

  doc.text('Referências Clínicas e Psicométricas:', 20, stepsStartY + 45);
  doc.setFontSize(9);
  const refs = [
    '- Kessler et al. (2005) — ASRS v1.1',
    '- Falk et al. (1999) — OEQ-II (Questionário de Superexcitabilidades)',
    '- Silverman — Gifted Adults Checklist',
    '- Renzulli (1978, 2005) — Teoria dos Três Anéis',
    '- Webb et al. — Misdiagnosis and Dual Diagnoses'
  ];
  doc.text(refs, 20, stepsStartY + 55);
  
  doc.save(`neurodex_rastreio_${demographics.name.replace(/\s+/g, '_')}.pdf`);
}
