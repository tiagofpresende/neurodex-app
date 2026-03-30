import { describe, it, expect } from 'vitest';
import { calculateScores } from './scoringEngine';
import { classifyProfile } from './profileClassifier';
import { detectFlags } from './flagDetector';
import { shuffleWithSeed } from '../utils/shuffle';
import { questions } from '../data/questions';

describe('Fisher-Yates Shuffle with Seed', () => {
  it('sempre retorna a mesma permutação para mesma semente e mesmo array', () => {
    const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sh1 = shuffleWithSeed(original, 42);
    const sh2 = shuffleWithSeed(original, 42);
    const shDifferent = shuffleWithSeed(original, 43);

    expect(sh1).toEqual(sh2);
    expect(sh1).not.toEqual(shDifferent);
    expect(sh1.length).toBe(original.length);
  });
});

describe('Scoring Engine', () => {
  it('calcula escores zerados se não houver respostas (ou valores 0)', () => {
    const emptyAnswers = new Map<string, number>();
    const scores = calculateScores(emptyAnswers);

    expect(scores.TDAH_TOTAL).toBe(0);
    expect(scores.AHSD_TOTAL).toBe(0);
    expect(scores.DUAL_EXC_TOTAL).toBe(0);
  });

  it('calcula escores máximos se todas as respostas forem 4', () => {
    const allMaxAnswers = new Map<string, number>();
    questions.forEach(q => allMaxAnswers.set(q.id, 4));

    const scores = calculateScores(allMaxAnswers);

    // Conferindo de acordo com as constantes máximas
    expect(scores.TDAH_TOTAL).toBe(68); // 44 + 24
    expect(scores.AHSD_TOTAL).toBe(148); // Soma real devido aos 15 itens AHSD_HAB criados no arquivo (15*4=60 + 88)
    expect(scores.DUAL_EXC_TOTAL).toBe(100); // 25 itens 2E na master list * 4
  });
});

describe('Profile Classifier', () => {
  it('classifica Perfil C (2e) prioritariamente quando ambos totais e 2e estão acima do limiar', () => {
    const fakeScores: any = {
      TDAH_TOTAL: 40,
      AHSD_TOTAL: 80,
      DUAL_EXC_TOTAL: 45
    };
    const profile = classifyProfile(fakeScores);
    expect(profile).toBe('C');
  });

  it('classifica Perfil A (TDAH) quando TDAH total alto, AHSD baixo e Persistência alta', () => {
    const fakeScores: any = {
      TDAH_TOTAL: 40,
      AHSD_TOTAL: 60,
      DUAL_EXC_TOTAL: 20,
      'TDAH-PERS': 6
    };
    const profile = classifyProfile(fakeScores);
    expect(profile).toBe('A');
  });

  it('classifica Perfil B (AH/SD) quando AHSD total alto e TDAH baixo', () => {
    const fakeScores: any = {
      TDAH_TOTAL: 20,
      AHSD_TOTAL: 80,
      DUAL_EXC_TOTAL: 20
    };
    const profile = classifyProfile(fakeScores);
    expect(profile).toBe('B');
  });

  it('classifica Perfil D se estiver abaixo de tudo', () => {
    const fakeScores: any = {
      TDAH_TOTAL: 20,
      AHSD_TOTAL: 50,
      DUAL_EXC_TOTAL: 10
    };
    const profile = classifyProfile(fakeScores);
    expect(profile).toBe('D');
  });
});

describe('Flag Detector', () => {
  it('detecta flag de Multipotencialidade se os limites corretos forem atingidos', () => {
    const answers = new Map<string, number>();
    answers.set('2E-MULT-01', 3);
    answers.set('AHSD-HAB-07', 4);
    answers.set('AHSD-HAB-08', 3);
    
    // Scores fake apenas com maximos corretos para evitar erro
    const fakeScores: any = {
      'TDAH-IN': 0, 'TDAH-HI': 0, 'TDAH-PERS': 0,
      'AHSD-INT': 0, 'AHSD-EMO': 0, 'AHSD-SEN': 0,
      'AHSD-PSI': 0, 'AHSD-IMA': 0, 'AHSD-HAB': 0,
      '2E': 0
    };

    const flags = detectFlags(answers, fakeScores);
    const hasMulti = flags.some(f => f.type === 'MULTIPOTENCIALIDADE');
    expect(hasMulti).toBe(true);
  });
});
