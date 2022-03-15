const rangeArr = [1, 7, 30];

function mincostTickets(days: number[], costs: number[]): number {
  let result = 0;
  let num = 0;

  let start = 0;
  let current = 0;
  let bestMatch = 0;
  for (let i = 0; i < days.length; i++) {
    num++;
    current = days[i];
    const space = current - start;

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
    }

    if (space < 7 && num > 3) {
      bestMatch = costs[1];
      // console.log(`test:>1.1`, current, num, bestMatch);
    } else if (space < 30 && num > 14) {
      bestMatch = costs[2];
      // console.log(`test:>1.2`, current, num, bestMatch);
    } else {
      bestMatch += costs[0];
      // console.log(`test:>1.3`, current, num, bestMatch);
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
