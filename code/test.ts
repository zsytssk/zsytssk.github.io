function main() {
  const arr = [5, 10, 1, 2, 3, 7, 8, 9, 4, 6];

  let tree: Tree;
  for (const item of arr) {
    tree = insert(item, tree);
  }

  console.log(`test:>`, JSON.stringify(tree));
}

main();

type Tree = {
  value: number;
  left: Tree;
  right: Tree;
};

function sort(arr: number[]) {
  let tree: Tree;
  for (const item of arr) {
    tree = insert(item, tree);
  }
  const result = treeToArr(tree);
  return result;
}

function treeToArr(tree: Tree, arr: number[] = []): number[] {
  if (tree.left) {
    treeToArr(tree.left, arr);
  }
  arr.push(tree.value);
  if (tree.right) {
    treeToArr(tree.right, arr);
  }
  return arr;
}

function insert(num: number, tree?: Tree) {
  if (!tree) {
    return {
      value: num,
    } as Tree;
  }

  if (tree.value > num) {
    if (!tree.left) {
      tree.left = { value: num } as Tree;
    } else {
      insert(num, tree.left);
    }
    return tree;
  }

  if (!tree.right) {
    tree.right = { value: num } as Tree;
  } else {
    insert(num, tree.right);
  }
  return tree;
}
