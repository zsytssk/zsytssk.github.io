function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const allLen = nums1.length + nums2.length;

  if (allLen % 2 === 0) {
    const leftIndex = allLen / 2 - 1;
    const rightIndex = allLen / 2;
    const left = find(nums1, nums2, 0, 0, leftIndex);
    const right = find(nums1, nums2, 0, 0, rightIndex);

    return (left + right) / 2;
  }

  return find(nums1, nums2, 0, 0, (allLen - 1) / 2);
}

function find(
  nums1: number[],
  nums2: number[],
  num1Index: number,
  num2Index: number,
  curIndex: number
) {
  let num = 0;
  let changeIndex = 1;
  if (num1Index <= nums1.length - 1 && num2Index <= nums2.length - 1) {
    num = Math.min(nums1[num1Index], nums2[num2Index]);
    if (nums1[num1Index] > nums2[num2Index]) {
      changeIndex = 2;
    } else {
      changeIndex = 1;
    }
  } else if (num1Index > nums1.length - 1) {
    num = nums2[num2Index];
    changeIndex = 2;
  } else {
    num = nums1[num1Index];
    changeIndex = 1;
  }

  if (num1Index + num2Index >= curIndex) {
    return num;
  }

  if (changeIndex === 1) {
    num1Index += 1;
  } else {
    num2Index += 1;
  }

  return find(nums1, nums2, num1Index, num2Index, curIndex);
}
