// 🚀 Day 19 - DSA Challenge

// Topic: Arrays / Strings – Sliding Window (Optimized Approach)

// 🧠 Problem Statement:
// You're analyzing user browsing behavior. You are given a list of webpages (as strings), visited in order, and a window size k. You need to determine if any window of k consecutive pages contains all unique pages (no repeats).

// If such a window exists, return true. Otherwise, return false.

// 📥 Input:
// pages[ ] = ["home", "about", "products", "home", "cart", "checkout"]  
// k = 3

// 📤 Output: true

// Explanation:
// The window ["about", "products", "home"] contains all unique entries.

// ⚡ Your Task:
// ▫ Solve this using an optimized sliding window approach.
// ▫ Avoid using brute force (O(n*k))  aim for O(n) time complexity.


let pages = ["home", "about", "products", "home", "cart", "checkout"];
let k = 3;

function unique(pages, k) {
    let window = new Set();
    let start = 0;
    for (let end = 0; end < pages.length; end++) {
        while (window.has(pages[end])) {
            window.delete(pages[start]);
            start++;
        }
        window.add(pages[end]);

        if (end - start + 1 === k && window.size === k) {
            return true;
        }
    }
    return false;
}
console.log(unique(pages, k)); 