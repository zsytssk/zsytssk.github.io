function mincostTickets(days: number[], costs: number[]): number {
  let result = 0;
  let num = 0;

  const num1 = Math.ceil(costs[1] / costs[0]) - 1;
  const num2 = (Math.ceil(costs[2] / costs[1]) - 1) * 7;

  console.log(num1, num2);
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
    } else if (space < 7 && num > num1) {
      bestMatch = costs[1];
    } else if (space < 30 && num > num2) {
      bestMatch = costs[2];
    } else {
      bestMatch += costs[0];
    }

    if (i === days.length - 1) {
      result += bestMatch;
    }

    console.log(`test:>`, current, space, bestMatch, result);
  }

  return result;
}

const result = mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]);
console.log(result);
