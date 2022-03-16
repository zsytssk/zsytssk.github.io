function isSymmetric(root: TreeNode | null): boolean {
  return compareTree(root?.left, root?.right);
}

function compareTree(left: TreeNode | null, right: TreeNode | null) {
  if (left?.val !== right?.val) {
    return false;
  }
  if (!left && !right) {
    return true;
  } else if (!left || !right) {
    return false;
  }
  if (!compareTree(left?.left, right?.right)) {
    return false;
  }
  if (!compareTree(left?.right, right?.left)) {
    return false;
  }
  return true;
}
