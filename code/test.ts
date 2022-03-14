// 二叉树两种状态的转化
function isSymmetric(root: (number | null)[]): boolean {
  for (let i = 0; i < root.length; i++) {
    const matchIndex = findMatchIndex(i + 1) - 1;
    console.log(i, matchIndex, root[i] !== root[matchIndex]);
    if (root[i] !== root[matchIndex]) {
      return false;
    }
  }
  return true;
}

function findMatchIndex(index: number) {
  const num = index.toString(2);
  return index ^ (Math.pow(2, num.length - 1) - 1);
}
console.log(`test:>`, isSymmetric([1, 2, 2, null, 3, null, 3]));
