function mincostTickets(days: number[], costs: number[]): number {
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

mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]);
