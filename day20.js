// 🚀 DSA DAY 20 Challenge 

// 💡 Task: Solve this problem using an optimized approach (think sliding window, avoid nested loops).

// Problem Statement:
// You are working on a website analytics dashboard. You receive hourly visitor counts for a website as an array visitors[], where each element represents the number of users visiting the site in that hour.

// Your task is to find the minimum total number of visitors in any k consecutive hours.

// 📥 Input:
// visitors[]: an array of integers representing visitor counts
// k: an integer (number of consecutive hours)

// 📤 Output:
// An integer representing the minimum total visitors in any k-hour window

// Example:
// Input:
// visitors = [120, 80, 100, 90, 150, 110, 70]  
// k = 3
// Output:
// 270

// Explanation:
// The 3-hour windows and their sums are:

// [120, 80, 100] → 300
// [80, 100, 90] → 270 ✅ (minimum)
// [100, 90, 150] → 340
// [90, 150, 110] → 350
// [150, 110, 70] → 330



let visitors = [120, 80, 100, 90, 150, 110, 70];
let k = 3;

function totalVisitors(visitors, k) {
    if (k > visitors.length) return null; 

    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += visitors[i];
    }

    let currentSum = windowSum;
    
    for (let i = k; i < visitors.length; i++) {
        windowSum += visitors[i] - visitors[i - k]; 
        currentSum = Math.min(currentSum, windowSum);
    }
    return currentSum;
}
console.log(totalVisitors(visitors, k));