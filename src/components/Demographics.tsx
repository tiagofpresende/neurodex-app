import { useState } from 'react';
import { Demographics } from '../engine/types';
import { texts } from '../data/texts';

interface DemographicsProps {
  onComplete: (data: Demographics) => void;
}

export function DemographicsForm({ onComplete }: DemographicsProps) {
  const [formData, setFormData] = useState<Partial<Demographics>>({});

  const updateField = (field: keyof Demographics, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isComplete = 
    !!formData.name && 
    !!formData.age && formData.age >= 18 && 
    !!formData.education && 
    !!formData.priorDiagnosis && 
    !!formData.medication && 
    !!formData.therapy;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isComplete) {
      onComplete(formData as Demographics);
    }
  };

  return (
    <div className="min-h-screen bg-surface p-6 flex flex-col items-center justify-center">
      <div className="max-w-xl w-full">
        <h2 className="text-2xl font-bold text-ocean-900 mb-2">Um pouco sobre você</h2>
        <p className="text-text mb-8">Esses dados ajudarão a personalizar o seu relatório final.</p>

        <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 md:p-8 rounded-2xl border border-lavender-100 shadow-sm">
          
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-ocean-900">Nome ou Apelido *</label>
            <input 
              type="text" 
              required
              className="w-full p-3 border border-lavender-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none"
              placeholder="Como quer ser chamado?"
              value={formData.name || ''}
              onChange={e => updateField('name', e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-ocean-900">Idade *</label>
              <input 
                type="number" 
                min="18" max="99" 
                required
                className="w-full p-3 border border-lavender-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none"
                placeholder="Ex: 30"
                value={formData.age || ''}
                onChange={e => updateField('age', parseInt(e.target.value))}
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-semibold text-ocean-900">Gênero (opcional)</label>
              <select 
                className="w-full p-3 border border-lavender-300 rounded-lg focus:ring-2 focus:ring-ocean-500 outline-none bg-white"
                value={formData.gender || ''}
                onChange={e => updateField('gender', e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
                <option value="Não-binário">Não-binário</option>
                <option value="Prefiro não dizer">Prefiro não dizer</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-ocean-900">Escolaridade *</label>
            <select 
              required
              className="w-full p-3 border border-lavender-300 rounded-lg focus:ring-2 focus:ring-ocean-500 outline-none bg-white"
              value={formData.education || ''}
              onChange={e => updateField('education', e.target.value)}
            >
              <option value="">Selecione...</option>
              <option value="Ensino Fundamental">Ensino Fundamental</option>
              <option value="Ensino Médio">Ensino Médio</option>
              <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
              <option value="Ensino Superior">Ensino Superior Completo</option>
              <option value="Pós-graduação">Pós-graduação</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-ocean-900">Diagnóstico prévio de TDAH? *</label>
            <select 
              required
              className="w-full p-3 border border-lavender-300 rounded-lg focus:ring-2 focus:ring-ocean-500 outline-none bg-white"
              value={formData.priorDiagnosis || ''}
              onChange={e => updateField('priorDiagnosis', e.target.value)}
            >
              <option value="">Selecione...</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
              <option value="Em investigação">Em investigação</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-ocean-900">Uso de medicação para TDAH? *</label>
            <select 
              required
              className="w-full p-3 border border-lavender-300 rounded-lg focus:ring-2 focus:ring-ocean-500 outline-none bg-white"
              value={formData.medication || ''}
              onChange={e => updateField('medication', e.target.value)}
            >
              <option value="">Selecione...</option>
              <option value="Sim, atualmente">Sim, atualmente</option>
              <option value="Sim, no passado">Sim, no passado</option>
              <option value="Não">Não</option>
              <option value="Não sei responder">Não sei responder</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-ocean-900">Acompanhamento psicológico/psiquiátrico? *</label>
            <select 
              required
              className="w-full p-3 border border-lavender-300 rounded-lg focus:ring-2 focus:ring-ocean-500 outline-none bg-white"
              value={formData.therapy || ''}
              onChange={e => updateField('therapy', e.target.value)}
            >
              <option value="">Selecione...</option>
              <option value="Sim">Sim, atualmente</option>
              <option value="Não">Não</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={!isComplete}
            className="w-full bg-ocean-700 hover:bg-ocean-900 disabled:bg-lavender-300 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all shadow-md mt-6"
          >
            {texts.common.next}
          </button>
        </form>
      </div>
    </div>
  );
}
