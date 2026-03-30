import { useMemo } from 'react';
import { questions } from '../data/questions';
import { shuffleWithSeed } from '../utils/shuffle';

export function useShuffledQuestions(blockIndex: number, seed: number) {
  return useMemo(() => {
    const blockQuestions = questions.filter(q => q.blockIndex === blockIndex);
    return shuffleWithSeed(blockQuestions, seed + blockIndex * 100);
  }, [blockIndex, seed]);
}
