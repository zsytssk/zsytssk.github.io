let completeMap: Map<number, number> = new Map();
export function networkDelayTime(times: number[][], n: number, k: number) {
  completeMap.clear();

  times = times.sort((a, b) => a[2] - b[2]);
  findMatch(times, k);
  console.log(`test:>`, completeMap);
  if (completeMap.size >= n - 1) {
    return Math.max(...completeMap.values());
  }
  return -1;
}

function findMatch(times: number[][], k: number, step = 0) {
  const StartArr = times.filter((item) => item[0] === k);
  const restArr = times.filter((item) => item[0] !== k && item[1] !== k);

  for (const item of StartArr) {
    const [, vi, t] = item;

    let curStep = t + step;
    if (completeMap.has(vi)) {
      const saved = completeMap.get(vi) as number;
      if (saved <= curStep) {
        continue;
      }
    }
    completeMap.set(vi, curStep);
    findMatch(restArr, vi, curStep);
  }
}

const result = networkDelayTime(
  [
    [4, 2, 76],
    [1, 3, 79],
    [3, 1, 81],
    [4, 3, 30],
    [2, 1, 47],
    [1, 5, 61],
    [1, 4, 99],
    [3, 4, 68],
    [3, 5, 46],
    [4, 1, 6],
    [5, 4, 7],
    [5, 3, 44],
    [4, 5, 19],
    [2, 3, 13],
    [3, 2, 18],
    [1, 2, 0],
    [5, 1, 25],
    [2, 5, 58],
    [2, 4, 77],
    [5, 2, 74],
  ],
  5,
  3
);

console.log(`test:>result`, result);
