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