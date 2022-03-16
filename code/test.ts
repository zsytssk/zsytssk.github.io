let completeMap: Map<number, number> = new Map();
function networkDelayTime(times: number[][], n: number, k: number) {
  completeMap.clear();

  findMatch(times, k);
  completeMap.delete(k);
  if (completeMap.size >= n - 1) {
    return Math.max(...completeMap.values());
  }
  return -1;
}

function findMatch(times: number[][], k: number, step = 0) {
  const StartArr = times.filter((item) => item[0] === k);
  const restArr = times.filter((item) => item[0] !== k);

  console.log(`test:>`, k);
  for (const item of StartArr) {
    const [, vi, t] = item;

    let curStep = t + step;
    const saved = completeMap.get(vi);
    if (saved && saved < curStep) {
      curStep = saved;
    } else {
      completeMap.set(vi, curStep);
    }
    findMatch(restArr, vi, curStep);
  }
}

const result = networkDelayTime(
  [
    [1, 2, 1],
    [2, 3, 2],
    [1, 3, 2],
  ],
  3,
  1
);

console.log(`test:>result`, result);
