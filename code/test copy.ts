let completeMap: Map<number, number> = new Map();
export function networkDelayTime(times: number[][], n: number, k: number) {
  completeMap.clear();

  findMatch(times, k);
  completeMap.delete(k);
  console.log(completeMap);
  if (completeMap.size >= n - 1) {
    return Math.max(...completeMap.values());
  }
  return -1;
}

function findMatch(times: number[][], k: number, step = 0) {
  const StartArr = times.filter((item) => item[0] === k);
  const restArr = times.filter((item) => item[0] !== k);

  for (const item of StartArr) {
    const [, vi, t] = item;

    let curStep = t + step;
    const saved = completeMap.get(vi);
    if (saved && saved < curStep) {
      continue;
    }
    completeMap.set(vi, curStep);
    findMatch(restArr, vi, curStep);
  }
}

// let completeMap: Map<number, [number, number][]> = new Map();
// export function networkDelayTime(times: number[][], n: number, k: number) {
//   completeMap.clear();

//   findMatch(times, k);
//   completeMap.delete(k);
//   console.log(completeMap);
//   if (completeMap.size >= n - 1) {
//     const stepNums = [...completeMap.values()].map((item) => {
//       return item.reduce((acc, cur) => acc + cur[1], 0);
//     });
//     return Math.max(...stepNums);
//   }
//   return -1;
// }

// function findMatch(
//   times: number[][],
//   k: number,
//   pathArr: [number, number][] = []
// ) {
//   const StartArr = times.filter((item) => item[0] === k);
//   const restArr = times.filter((item) => item[0] !== k);

//   for (const item of StartArr) {
//     const [, vi, t] = item;

//     const curStep: [number, number][] = [...pathArr, [k, t]];
//     const saved = completeMap.get(vi);
//     if (saved && compareStep(saved, curStep) == -1) {
//       continue;
//     }
//     completeMap.set(vi, curStep);
//     findMatch(restArr, vi, curStep);
//   }
// }

// function compareStep(step1: [number, number][], step2: [number, number][]) {
//   const allNum1 = step1.reduce((acc, cur) => acc + cur[1], 0);
//   const allNum2 = step2.reduce((acc, cur) => acc + cur[1], 0);

//   if (allNum1 === allNum2) {
//     return 0;
//   }
//   if (allNum1 > allNum2) {
//     return 1;
//   }
//   return -1;
// }
