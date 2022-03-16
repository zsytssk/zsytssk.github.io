function networkDelayTime(times: number[][], n: number, k: number): number {
  const completeArr = [];
  const splitArr = times.filter((item) => item[0] !== k);
  const toArr = [];
  for (let i = 0; i < n; i++) {
    const [ui, vi, t] = times[i];
    let item = t;
    if (ui !== k) {
      continue;
    }
    const result = networkDelayTime(splitArr, n - 1, vi);
    if (item === -1) {
      continue;
    }
    item += result;
    completeArr.push(vi);
  }
}
