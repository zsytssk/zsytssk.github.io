export function mincostTickets(days: number[], costs: number[]): number {
  const continueDays: number[] = [];
  let num = 0;
  for (let i = 0; i < days.length; i++) {
    if (i === 0) {
      num += 1;
      continue;
    }
    if (days[i] - days[i - 1] === 1) {
      num += 1;
    } else {
      continueDays.push(num);
      num = 1;
    }

    if (i === days.length - 1) {
      continueDays.push(num);
    }
  }
  console.log(continueDays);
  let result = 0;
  for (const item of continueDays) {
    const map = calcNum(item);
    console.log(map);
    result += map["num1"] * costs[0];
    result += map["num7"] * costs[1];
    result += map["num30"] * costs[2];
  }
  console.log(`result: ${result}`);
  return result;
}

function convertToRange(days: number[], costs: number[]) {
  let result = 0;

  console.log(result);
}

type NumMap = {
  num1: number;
  num7: number;
  num30: number;
};
function calcNum(num: number, map = { num1: 0, num7: 0, num30: 0 } as NumMap) {
  if (num < 1 * 4) {
    map["num1"] += num;
    return map;
  }
  if (num < 7 * 2) {
    map["num7"] += Math.floor(num / 7);
    const rest = num % 7;
    calcNum(rest, map);
    return map;
  }
  map["num30"] += Math.floor(num / 30);
  const rest = num % 15;
  calcNum(rest, map);
  return map;
}

mincostTickets([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 30, 31], [2, 7, 15]);

function mincostTickets(days: number[], costs: number[]): number {
  let result = 0;
  let num = 0;

  let start = 0;
  let current = 0;
  let bestMatch = 0;
  for (let i = 0; i < days.length; i++) {
    num++;
    current = days[i];
    const space = current - start + 1;

    if (i === 0) {
      start = days[0];
      bestMatch = costs[0];
      continue;
    }

    if (space >= 30) {
      result += bestMatch;
      num = 1;
      start = current;
      bestMatch = costs[0];
    } else if (space >= 7) {
      result += bestMatch;
      num = 1;
      start = current;
      bestMatch = costs[0];
    } else if (space < 7 && num > 3) {
      bestMatch = costs[1];
    } else if (space < 30 && num > 14) {
      bestMatch = costs[2];
    } else {
      bestMatch += costs[0];
    }

    if (i === days.length - 1) {
      // console.log(`test:>3`, current, bestMatch);
      result += bestMatch;
    }

    console.log(`test:>`, current, space, bestMatch, result);
  }

  return result;
}

const result = mincostTickets(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31],
  [2, 7, 15]
);
console.log(result);

// 方法2
// function mincostTickets(days: number[], costs: number[]): number {
//   let result = 0;
//   let num = 0;

//   let start = 0;
//   let current = 0;
//   let bestMatch = 0;
//   for (let i = 0; i < days.length; i++) {
//     num++;
//     current = days[i];
//     const space = current - start + 1;

//     if (i === 0) {
//       start = days[0];
//       bestMatch = costs[0];
//       continue;
//     }

//     if (space >= 30) {
//       result += bestMatch;
//       num = 1;
//       start = current;
//       bestMatch = costs[0];
//     } else if (space >= 7) {
//       result += bestMatch;
//       num = 1;
//       start = current;
//       bestMatch = costs[0];
//     } else if (space < 7 && num > 3) {
//       bestMatch = costs[1];
//     } else if (space < 30 && num > 14) {
//       bestMatch = costs[2];
//     } else {
//       bestMatch += costs[0];
//     }

//     if (i === days.length - 1) {
//       // console.log(`test:>3`, current, bestMatch);
//       result += bestMatch;
//     }

//     console.log(`test:>`, current, space, bestMatch, result);
//   }

//   return result;
// }

// const result = mincostTickets(
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31],
//   [2, 7, 15]
// );
// console.log(result);

// 方法3
// function mincostTickets(days: number[], costs: number[]): number {
//   let result = 0;
//   let num = 0;

//   let start = 0;
//   let current = 0;
//   let bestMatch: [number, number, number] = [0, 0, 0];
//   for (let i = 0; i < days.length; i++) {
//     num++;
//     current = days[i];
//     const space = current - start + 1;

//     if (space < 7) {
//       bestMatch[0] += 1;
//     } else if (space < 30) {
//       if (bestMatch[0] * costs[0] > costs[1]) {
//         bestMatch[0] = 0;
//         bestMatch[1] += 1;
//       }
//     } else {
//     }

//     console.log(`test:>`, current, space, bestMatch, result);
//   }

//   return result;
// }

// const result = mincostTickets([6, 8, 9, 18, 20, 21, 23, 25], [2, 7, 15]);
// console.log(result);
