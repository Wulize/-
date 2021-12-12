// 归并排序递归解法
function merge(arr1, arr2) {
    let res = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] <= arr2[0]) {
            res.push(arr1.shift());
        } else {
            res.push(arr2.shift());
        }
    }
    return res.concat(arr1, arr2);
}

function mergeSort(nums, left, right) {
    // 递归的退出条件,拿到单个元素
    if (left >= right) return [nums[left]];
    // 划分子问题
    let mid = Math.floor((left + right) / 2),
        leftArr, rightArr;
    leftArr = mergeSort(nums, left, mid);
    rightArr = mergeSort(nums, mid + 1, right);
    return merge(leftArr, rightArr);
}

const arr = [1, 2, 4, 3, 8, 5, 3];
console.log(mergeSort(arr, 0, 6));
/*
输出：
[
  1, 2, 3, 3,
  4, 5, 8
]
*/

// 归并排序的非递归解法
function mergeSort_2(nums) {
    for (let i = 0; i < nums.length; i += 2) {

    }
}