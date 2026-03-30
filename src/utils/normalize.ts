export function normalizeScore(score: number, max: number): number {
  if (max === 0) return 0;
  return Math.min(100, Math.max(0, Math.round((score / max) * 100)));
}
