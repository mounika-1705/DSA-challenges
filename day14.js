// 🧠 DSA Day 14 Challenge

// Topic: Sliding Window Technique
// Difficulty: Medium
// Approach Required: Brute-force Only ❌ No optimized solution allowed today!

// 🔍 Problem Statement:
// You are working on a website analytics dashboard. You receive hourly visitor counts for a website as an array visitors[], where each element represents the number of users visiting the site in that hour.

// Your task is to find the minimum number of visitors in any k consecutive hours.

// 📥 Input:

// ▫ visitors[]: an array of integers representing visitor counts

// ▫ k: an integer (number of consecutive hours)

// 📤 Output:
// An integer representing the minimum total visitors in any k-hour window

// 🧪 Example:
// Input: visitors = [120, 80, 100, 90, 150, 110, 70], k = 3  
// Output: 270

let visitorsData = [120, 80, 100, 90, 150, 110, 70];
let k = 3;

function visitors(visits, k) {
    let minSum = Infinity;

    for (let i = 0; i <= visits.length - k; i++) {
        let sum = 0;

        for (let j = i; j < i + k; j++) {
            sum += visits[j];
        }

        if (sum < minSum) {
            minSum = sum;
        }
    }
    return minSum;
}
console.log(visitors(visitorsData, k)); 