// 🚀 Day 21 – DSA Challenge is LIVE! 

// Hey problem solvers! 

// ✅ Challenge: Longest Productive Streak

// 📈 Problem Statement:
// You’re building a productivity tracker. The user has a record of their daily productivity over the past few weeks. Each day is marked as:

// 1 → productive

// 0 → unproductive

// You’re allowed to take a break for up to k unproductive days, and you want to find the maximum streak of days that can be considered productive by flipping up to k zeros.

// 📥 Input Example:

// days = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0]  
// k = 2

// 📤 Expected Output:

// 7

// Explanation:
// If you flip two 0’s (at indices 4 and 5), you get a streak of 7 continuous 1’s.

//  Instructions:

// Solve this using an optimized Sliding Window approach

// Avoid brute-force solutions  aim for O(n) time complexity



let days = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0];
let k = 2;

function maximumStreak(days, k) {
    let left = 0, Count = 0, length = 0;

    for (let right = 0; right < days.length; right++) {
        if (days[right] === 0) Count++;

        while (Count > k) {
            if (days[left] === 0) Count--;
            left++;
        }

        length = Math.max(length, right - left + 1);
    }
    return length;
}
console.log(maximumStreak(days, k));