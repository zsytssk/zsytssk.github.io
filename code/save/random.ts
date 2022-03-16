var rand10 = function () {
  const test = rand14();
  if (test > 10) {
    return rand10();
  }
  return test;
};

function rand2() {
  const test = rand7();
  if (test > 6) {
    return rand2();
  }

  return Math.ceil((2 * test) / 6);
}
function rand14() {
  const test = rand2();
  if (test < 2) {
    return rand7();
  }
  return rand7() + 7;
}
