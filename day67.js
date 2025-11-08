// 🚀 Day 67 - DSA Challenge
// Topic: Recursion
// Problem: Print Numbers from 1 to N using Recursion
// Problem Statement:
// Write a recursive function to print all natural numbers from 1 to N.
// You are not allowed to use loops (for, while, etc.).

// Example:
// Input:  
// N = 5

// Output:  
// 1 2 3 4 5

// 💡 Hint:
// * Think of the base case (when should the recursion stop?).
// * In each recursive call, print one number and move towards the next.
// * Use function call stack to print in the correct order.

// Requirements:
// * Must use recursion (no loops).
// * Handle edge cases like N = 0 or negative input.

function Numbers(n) {
    if(n<=0) 
        return;
    Numbers(n-1);
    console.log(n);
}
let N=5;
Numbers(N)