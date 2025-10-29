function subarray(arr, target) {

  const prefixSum = new Set();
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum === target) {
      return true;
    }

    if (prefixSum.has(currentSum - target)) {
      return true;
    }
    prefixSum.add(currentSum);
  }
  
  return false;
}

let arr1 = [10, 2, -2, -20, 10];
let target1 = -10;
console.log(subarray(arr1, target1));

let arr2 = [1, 4, 20, 3, 10, 5];
let target2 = 33;
console.log(subarray(arr2, target2));
