// 🚀 Day 68 - DSA Challenge
// Topic: Recursion
// Problem: Find the Sum of Digits of a Number using Recursion

// Problem Statement:
// Write a recursive function to calculate the sum of digits of a given positive integer N.
// You cannot use loops or built-in functions like sum() or string conversion.

// Example:
// Input:  
// N = 1234  

// Output:  
// 10  

// Explanation:
// 1 + 2 + 3 + 4 = 10

// Requirements:
// 1. Use recursion only – no loops allowed.
// 2. Identify the base case (when the number becomes 0).
// 3. In each recursive call, extract one digit and add it to the result of the remaining digits.

// Hint:
// Use the modulus operator % to get the last digit and integer division // to remove it.
// 

function sumOfNumbers(n) {

    if(n==0)
        return 0;
    
    let digit = n % 10;
    return digit + sumOfNumbers(Math.floor(n/10))
}

let N = 1234;
console.log(sumOfNumbers(N));