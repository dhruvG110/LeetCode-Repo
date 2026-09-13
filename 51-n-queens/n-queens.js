var solveNQueens = function(n) {

    function isSafe(board, row, col, n) {

        // horizontal
        for (let i = 0; i < n; i++) {
            if (board[row][i] === 'Q') {
                return false;
            }
        }

        // vertical
        for (let i = 0; i < n; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }

        // left diagonal
        for (let i = row, j = col;
             i >= 0 && j >= 0;
             i--, j--) {

            if (board[i][j] === 'Q') {
                return false;
            }
        }

        // right diagonal
        for (let i = row, j = col;
             i >= 0 && j < n;
             i--, j++) {

            if (board[i][j] === 'Q') {
                return false;
            }
        }

        return true;
    }

    function NQueens(board, ans, row, n) {

        // Base case
        if (row === n) {
            ans.push(board.map(row => row.join('')));
            return;
        }

        for (let j = 0; j < n; j++) {

            if (isSafe(board, row, j, n)) {

                board[row][j] = 'Q';

                NQueens(board, ans, row + 1, n);

                board[row][j] = '.';
            }
        }
    }

    // Create board
    let board = Array.from(
        { length: n },
        () => Array(n).fill('.')
    );

    let ans = [];

    NQueens(board, ans, 0, n);

    return ans;
};