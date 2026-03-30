export function shuffleWithSeed<T>(array: T[], seed: number): T[] {
  const result = [...array];
  let m = result.length, t, i;
  let currentSeed = seed;

  // LCG simples para ter determinismo consistente por semente
  const random = () => {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    return currentSeed / 233280;
  };

  while (m) {
    i = Math.floor(random() * m--);
    t = result[m];
    result[m] = result[i];
    result[i] = t;
  }

  return result;
}
