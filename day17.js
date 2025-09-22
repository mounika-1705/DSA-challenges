let nums = [2, 1, 5, 1, 3, 2];
let k = 8;

function longestSubarray(nums, k) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum <= k) {
                result = Math.max(result, j - i + 1);
            }
        }
    }

    return result;
}
console.log(longestSubarray(nums, k)); 