// 🚀Day 70 - DSA Challenge
// Topic: Recursion
// Problem: Permutations of a String

// Problem Statement:
// Given a string S, print all possible permutations of the characters in the string using recursion.

// Example:
// Input:  
// S = "ABC"

// Output:  
// ABC  
// ACB  
// BAC  
// BCA  
// CAB  
// CBA

// Requirements:
// 1. Use recursion only – no built-in functions for permutation.
// 2. At each recursive call, fix one character and recursively find permutations of the remaining substring.
// 3. Handle duplicate characters properly (optional advanced part).

// 💡 Hint:
// Think of each recursion as choosing a character for the current position, and then recursively solving for the rest of the positions.


function Permutations(str, prefix = "") {
  if (str.length === 0) {
    console.log(prefix);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    let next = str.slice(0, i) + str.slice(i + 1);
    Permutations(next, prefix + current);
  }
}

let S = "ABC";
Permutations(S);