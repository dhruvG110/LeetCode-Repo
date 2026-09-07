/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    if (grid[0][0] == 1) return -1;
    if (grid[grid.length - 1][grid[0].length - 1] == 1) return -1;
    let queue = [];
    const visited = Array.from({ length: grid.length }, () =>
        Array(grid[0].length).fill(1)
    );
    for (let i = 0; i < visited.length; i++) {
        for (let j = 0; j < visited[0].length; j++) {
            if (grid[i][j] == 1) {
                visited[i][j] = -1;
            }
        }
    }
    queue.push([0, 0, 1]);
    let directions = [
        [1, 0], [0, 1], [-1, 0], [0, -1],
        [-1, -1], [1, 1], [-1, 1], [1, -1]
    ];
    while (queue.length > 0) {
        let [row, col, distance] = queue.shift();
        visited[row][col] = 0;
        for (let [r, c] of directions) {
            let newR = row + r;
            let newC = col + c;
            if (newR >= 0 && newC >= 0 && newR < grid.length && newC < grid[0].length && grid[newR][newC] == 0 && visited[newR][newC] == 1) {
                visited[newR][newC] = 0;
                queue.push([newR , newC , distance + 1]);
            }
        }
        if(row == grid.length - 1 && col == grid[0].length - 1){
            return distance;
        }
    }
    return -1;

};