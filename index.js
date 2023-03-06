const prompt = require("prompt-sync")({ sigint: true });

let M = prompt("Enter the value of M.: ");
let N = prompt("Enter the value of N.:  ");

let board = [];
for (let i = 0; i < M; i++) {
    board.push([]);
    for (let j = 0; j < N; j++) {
        board[i][j] = Math.round(Math.random());
    }
}

function printData() {
    for (let i = 0; i < M; i++) {
        let row = '';
        for (let j = 0; j < N; j++) {
            row += board[i][j] ? '  0' : '  1';
        }
        console.log(row);
    }
}

function nextGeneration() {
    let newBoard = [];
    for (let i = 0; i < M; i++) {
        newBoard.push([]);
        for (let j = 0; j < N; j++) {
            let neighbors = 0;
            for (let k = -1; k <= 1; k++) {
                for (let l = -1; l <= 1; l++) {
                    if (k === 0 && l === 0) continue;
                    let row = i + k;
                    let col = j + l;
                    if (row < 0) row = M - 1;
                    if (row >= M) row = 0;
                    if (col < 0) col = N - 1;
                    if (col >= N) col = 0;
                    neighbors += board[row][col];
                }
            }
            if (board[i][j]) {
                if (neighbors === 2 || neighbors === 3) {
                    newBoard[i][j] = 1;
                } else {
                    newBoard[i][j] = 0;
                }
            } else {
                if (neighbors === 3) {
                    newBoard[i][j] = 1;
                } else {
                    newBoard[i][j] = 0;
                }
            }
        }
    }
    board = newBoard;
}

function gameLoop() {
    printData();
    nextGeneration();
}


gameLoop();
