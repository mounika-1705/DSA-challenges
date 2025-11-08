// 🚀 Day 69 - DSA Challenge
// Topic: Recursion
// Problem: Generate All Subsets of a String (Power Set Problem)

// Problem Statement:
// Given a string S, print all possible subsets (the power set) of that string using recursion.
// The order of subsets does not matter, but each subset should be unique.

// Example:
// Input:  
// S = "abc"

// Output:  
// ["", "a", "b", "c", "ab", "ac", "bc", "abc"]

// Requirements:
// 1. Use recursion only – no iterative loops for generating subsets.
// 2. In each recursive call, decide whether to include or exclude the current character.
// 3. Store or print each subset when the end of the string is reached.

// 💡 Hint:
// Think of recursion as branching at each step, you either take the current character or skip it.




function subsets(S) {
  const result = [];

  function generate(current, index) {
    if (index === S.length) {
      result.push(current);
      return;
    }

    generate(current, index + 1);   //excluding the current character
    generate(current + S[index], index + 1);  //including current character
   
  }

  generate("", 0);
  return result;
}

const S = "abc";
console.log(subsets(S));