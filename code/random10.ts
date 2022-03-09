function rand7() {
  return Math.ceil(Math.random() * 7);
}

var rand10 = function () {
  const test = rand2();
  if (test < 2) {
    return rand5();
  }
  return rand5() + 5;
};

function rand2() {
  const test = rand7();
  if (test > 6) {
    return rand2();
  }

  return Math.ceil((2 * test) / 6);
}
function rand5() {
  const test = rand7();
  if (test > 5) {
    return rand5();
  }

  return Math.ceil((5 * test) / 5);
}

function main() {
  const arr = [];
  const num = 100000;
  for (let i = 0; i < num; i++) {
    arr.push(rand10());
  }
  const num1s = arr.filter((x) => x === 1).length / num;
  const num2s = arr.filter((x) => x === 2).length / num;
  const num3s = arr.filter((x) => x === 3).length / num;
  const num4s = arr.filter((x) => x === 4).length / num;
  const num5s = arr.filter((x) => x === 5).length / num;
  const num6s = arr.filter((x) => x === 6).length / num;
  const num7s = arr.filter((x) => x === 7).length / num;
  const num8s = arr.filter((x) => x === 8).length / num;
  const num9s = arr.filter((x) => x === 9).length / num;
  const num10s = arr.filter((x) => x === 10).length / num;

  console.log(
    num1s,
    num2s,
    num3s,
    num4s,
    num5s,
    num6s,
    num7s,
    num8s,
    num9s,
    num10s
  );
}

main();
