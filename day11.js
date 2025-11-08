// 📢 DSA Day - 11 Challenge: Advanced Two Pointers 🧠🔥
// Hey Students!
// You’ve now got the hang of basic and medium-level problems. Today, let’s push your thinking with a hard-level problem that demands both logic and optimization using the Two Pointers technique.

// 🔥 Challenge: Find All Unique Triplets That Sum to Zero
// Problem Statement:
// You’re building a feature for a finance dashboard that analyzes daily profit/loss patterns. You're given an array of integers representing daily net changes.
// Your task is to find all unique triplets (i, j, k) such that:
// arr[i] + arr[j] + arr[k] == 0  and i != j != k

// 📝 Input Example:
// arr = [-1, 0, 1, 2, -1, -4]

// 📤 Expected Output:
// [[-1, -1, 2], [-1, 0, 1]]

// 🔧 Constraints:

// The output must not contain duplicate triplets.

// You must solve this in better than O(n³) — try to get it down to O(n²) using Two Pointers.

// 🧠 Hint:

// Sort the array.

// Fix one element and use two pointers to scan for the other two.

// Skip duplicates carefully.


let arr = [-1, 0, 1, 2, -1, -4];

function duplicates(numbers) {
  numbers.sort((a, b) => a - b);  //[-4, -1, -1, 1, 2]    
  let result = [];

  for (let i = 0; i < numbers.length - 2; i++) {
    if (i > 0 && numbers[i] === numbers[i - 1]) continue;

    let left = i + 1;
    let right = numbers.length - 1;

    while (left < right) {
      let sum = numbers[i] + numbers[left] + numbers[right];

      if (sum === 0) {
        result.push([numbers[i], numbers[left], numbers[right]]);
        

        while (left < right && numbers[left] === numbers[left + 1]) left++;
        while (left < right && numbers[right] === numbers[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;  
      } else {
        right--; 
      }
    }
  }

  return result;
}
console.log(duplicates(arr));
