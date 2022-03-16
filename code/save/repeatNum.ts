function singleNumbers(numList: number[]): number[] {
  const set: Set<number> = new Set();
  for (let i = 0; i < numList.length; i++) {
    const num = numList[i];
    if (set.has(num)) {
      set.delete(num);
      continue;
    }
    set.add(num);
  }

  return [...set];
}
