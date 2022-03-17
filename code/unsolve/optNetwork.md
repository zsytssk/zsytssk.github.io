```ts
let completeMap: Map<number, number> = new Map();
export function networkDelayTime(times: number[][], n: number, k: number) {
  completeMap.clear();

  times = times.sort((a, b) => a[2] - b[2]);
  findMatch(times, k);
  completeMap.delete(k);
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
```

```ts
type FindItemArr = [number, number];
let completeMap: Map<number, number> = new Map();
export function networkDelayTime(times: number[][], n: number, k: number) {
  completeMap.clear();

  times = times.sort((a, b) => a[2] - b[2]);
  findMatch(times, [[k, 0]] as FindItemArr[]);
  console.log(`test:>`, completeMap);
  if (completeMap.size >= n - 1) {
    return Math.max(...completeMap.values());
  }
  return -1;
}

function findMatch(times: number[][], findList: FindItemArr[]) {
  const nextFindArr: FindItemArr[] = [];
  for (const findItem of findList) {
    const [target, step] = findItem;
    const StartArr = times.filter((item) => item[0] === target);
    for (const item of StartArr) {
      const [, vi, t] = item;

      let curStep = t + step;
      if (completeMap.has(vi)) {
        const saved = completeMap.get(vi) as number;
        if (saved < curStep) {
          continue;
        }
      }
      nextFindArr.push([vi, curStep]);
      completeMap.set(vi, curStep);
    }
  }

  const rest = times.filter(
    (item) =>
      findList.findIndex((findItem) => findItem[0] === item[0]) === -1 &&
      findList.findIndex((findItem) => findItem[0] === item[1]) === -1
  );
  if (rest.length && nextFindArr.length) {
    findMatch(rest, nextFindArr);
  }
}
```
