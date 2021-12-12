//递归写法
function quickSort(nums, left, right) {
    if (left >= right) return;
    let i = left,
        j = right,
        mid = Math.floor((left + right) / 2);
    while (i < j) {
        while (i < j && nums[j] >= nums[left]) {
            j--;
        }
        while (i < j && nums[i] < nums[left]) {
            i--;
        }
        if (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    [nums[i], nums[left]] = [nums[left], nums[i]];
    quickSort(nums, left, mid - 1);
    quickSort(nums, mid + 1, right);
}
const arr = [1, 2, 4, 3, 8, 5, 3];
quickSort(arr, 0, 6)
console.log(arr);