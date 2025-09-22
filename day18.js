const arr = [4, 2, 1, 7, 8, 1, 2, 8, 1];
const k = 8;

function slidingWindow(arr, k) {
    let result = 0;
    let windowSum = 0;
    let left = 0;

    for (let i = 0; i < arr.length; i++) {
        windowSum += arr[i];

        while (windowSum > k) {
            windowSum -= arr[left];
            left++;
        }
        result = Math.max(result, i - left + 1);
    }
    return result;
}
console.log(slidingWindow(arr, k));