// 🚀 Day 71 - DSA Challenge
// Topic: Recursion
// Problem: N-Queens Problem 👑

// Problem Statement:
// You are given an integer N, representing the size of an N x N chessboard.
// Your task is to place N queens on the board such that no two queens attack each other (i.e., no two queens share the same row, column, or diagonal).

// You must print all possible arrangements of queens using recursion and backtracking.

// Example:
// Input:  
// N = 4  

// Output:  
// Solution 1:  
// . Q . .  
// . . . Q  
// Q . . .  
// . . Q .  

// Solution 2:  
// . . Q .  
// Q . . .  
// . . . Q  
// . Q . .

// Requirements:
// 1. Use recursion + backtracking only.
// 2. Represent the board as a 2D array or list.
// 3. Ensure that each recursive step places a queen safely before moving to the next row.
// 4. When a valid configuration is found, print or store it.

// 💡 Hint:
// * Create a helper function isSafe(row, col) to check if placing a queen at (row, col) is valid.
// * Try placing a queen in each column of the current row, and recursively call for the next row.
// * If no valid position is found, backtrack (remove the queen and try another column).




function solveNQueens(N) {
  const board = Array.from({ length: N }, () => Array(N).fill('.')); // create board
  const result = [];

  function isSafe(row, col) {  //checks for safety
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {  //checks diagonal
      if (board[i][j] === 'Q') return false;
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < N; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }

    return true;
  }

  function placeQueen(row) {
    if (row === N) {
      const copy = board.map(r => r.join(' '));
      result.push(copy);
      return;
    }

    for (let col = 0; col < N; col++) {
      if (isSafe(row, col)) {
        board[row][col] = 'Q';       
        placeQueen(row + 1);         
        board[row][col] = '.';    
      }
    }
  }

  placeQueen(0);

  result.forEach((solution, index) => {
    console.log(`Solution ${index + 1}:`);
    solution.forEach(row => console.log(row));
    console.log();
  });
}

solveNQueens(4);