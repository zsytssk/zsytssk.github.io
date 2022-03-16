function multiply(A: number, B: number): number {
  const min = Math.min(A, B);
  const max = A === min ? B : A;
  let result = 0;
  for (let i = 0; i < min; i++) {
    result += max;
  }
  return result;
}
