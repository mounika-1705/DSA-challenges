function Consecutive(nums) {
 
  const numSet = new Set(nums);
  let longest = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let count = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        count += 1;
      }

      longest = Math.max(longest, count);
    }
  }
  return longest;
}

let nums1 = [100, 4, 200, 1, 3, 2];
console.log(Consecutive(nums1)); 

let nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(Consecutive(nums2)); 