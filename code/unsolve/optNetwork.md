```ts
//  性能问题
let completeMap: Map<number, number> = new Map();
function networkDelayTime(times: number[][], n: number, k: number) {
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
// 方法1-path
type PathItem = [number, number];
let completeMap: Map<number, PathItem[]> = new Map();
function networkDelayTime(times: number[][], n: number, k: number) {
  completeMap.clear();

  times = times.sort((a, b) => a[2] - b[2]);
  findMatch(times, k);
  console.log(`test:>`, completeMap);
  if (completeMap.size >= n - 1) {
    const sumArr = [...completeMap.values()].map((item) =>
      item.reduce((acc, cur) => acc + cur[1], 0)
    );
    return Math.max(...sumArr);
  }
  return -1;
}

function findMatch(times: number[][], k: number, step: PathItem[] = []) {
  const StartArr = times.filter((item) => item[0] === k);
  const restArr = times.filter((item) => item[0] !== k && item[1] !== k);

  for (const item of StartArr) {
    const [, vi, t] = item;
    let curStep: PathItem[] = [...step, [vi, t]];
    if (completeMap.has(vi)) {
      const saved = completeMap.get(vi) as PathItem[];
      if (comparePath(saved, curStep) === -1) {
        curStep = saved;
      }
    }
    completeMap.set(vi, curStep);
    findMatch(restArr, vi, curStep);
  }
}

function comparePath(path1: PathItem[], path2: PathItem[]) {
  const sum1 = path1.reduce((acc, cur) => acc + cur[1], 0);
  const sum2 = path2.reduce((acc, cur) => acc + cur[1], 0);

  if (sum1 > sum2) {
    return 1;
  }
  if (sum1 === sum2) {
    return 0;
  }
  if (sum1 < sum2) {
    return -1;
  }
}
```

```ts
// 方法2 - 性能比方法1好但是亦然可以提升
type FindItemArr = [number, number];
let completeMap: Map<number, number> = new Map();
function networkDelayTime(times: number[][], n: number, k: number) {
  completeMap.clear();

  times = times.sort((a, b) => a[2] - b[2]);
  findMatch(times, [[k, 0]] as FindItemArr[]);
  completeMap.delete(k);
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
        if (saved <= curStep) {
          continue;
        }
      }
      nextFindArr.push([vi, curStep]);
      completeMap.set(vi, curStep);
    }
  }

  if (nextFindArr.length) {
    findMatch(times, nextFindArr);
  }
}
```

```ts
// 方法2-path
type PathItem = [number, number];
let completeMap: Map<number, PathItem[]> = new Map();
function networkDelayTime(times: number[][], n: number, k: number) {
  completeMap.clear();

  times = times.sort((a, b) => a[2] - b[2]);
  findMatch(times, [[k, []]]);
  console.log(`test:>`, completeMap);
  if (completeMap.size >= n - 1) {
    const sumArr = [...completeMap.values()].map((item) =>
      item.reduce((acc, cur) => acc + cur[1], 0)
    );
    return Math.max(...sumArr);
  }
  return -1;
}

function findMatch(times: number[][], findList: [number, PathItem[]][]) {
  const nextFindArr: [number, PathItem[]][] = [];
  for (const findItem of findList) {
    const [target, step] = findItem;
    const StartArr = times.filter((item) => item[0] === target);
    for (const item of StartArr) {
      const [, vi, t] = item;

      let curStep: PathItem[] = [...step, [vi, t]];
      if (completeMap.has(vi)) {
        const saved = completeMap.get(vi) as PathItem[];
        if (comparePath(saved, curStep) === -1) {
          curStep = saved;
        }
      }
      nextFindArr.push([vi, curStep]);
      completeMap.set(vi, curStep);
    }
  }

  const rest = times.filter(
    (item) => findList.findIndex((findItem) => findItem[0] === item[0]) === -1
  );
  if (rest.length && nextFindArr.length) {
    findMatch(rest, nextFindArr);
  }
}

function comparePath(path1: PathItem[], path2: PathItem[]) {
  const sum1 = path1.reduce((acc, cur) => acc + cur[1], 0);
  const sum2 = path2.reduce((acc, cur) => acc + cur[1], 0);

  if (sum1 > sum2) {
    return 1;
  }
  if (sum1 === sum2) {
    return 0;
  }
  if (sum1 < sum2) {
    return -1;
  }
}
```

```ts
// 方法3-性能问题
let completeMap: Map<number, number> = new Map();
export function networkDelayTime(times: number[][], n: number, k: number) {
  times = times.sort((a, b) => a[2] - b[2]);

  const temp = [];
  for (let i = 1; i <= n; i++) {
    if (i == k) {
      continue;
    }
    const step = findMatch(times, k, i);
    if (step === -1) {
      return -1;
    }
    temp.push(step);
  }

  return Math.max(...temp);
}

function findMatch(
  times: number[][],
  origin: number,
  target: number,
  step = 0
) {
  const sourceArr = times.filter((item) => item[0] === origin);
  const restArr = times.filter(
    (item) => item[0] !== origin && item[1] !== origin
  );

  const temp: number[] = [];
  for (const item of sourceArr) {
    const [ui, vi, time] = item;
    const curStep = time + step;
    if (
      completeMap.has(target) &&
      (completeMap.get(target) as number) <= curStep
    ) {
      break;
    }

    if (target === vi) {
      completeMap.set(vi, curStep);
      return curStep;
    }
    const itemResult = findMatch(restArr, vi, target, curStep);
    if (itemResult === -1) {
      continue;
    }
    temp.push(itemResult);
  }

  return temp.length ? Math.min(...temp) : -1;
}
```
