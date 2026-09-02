/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let queue = [];
    let ans = Array.from(
        { length: mat.length },
        () => Array(mat[0].length).fill(-1)
    );
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] == 0) {
                ans[i][j] = 0;
                queue.push([i, j, 0]);
            }
        }
    }
    let directions =[
        [0,1],
        [1,0],
        [0,-1],
        [-1,0]
    ];
    while(queue.length > 0){
        let [row , col , distance ] = queue.shift();
        for(let [r , c] of directions){
            let newRow = row + r;
            let newCol = col + c;
            if(newRow >= 0 && newCol >= 0 && newRow < mat.length && newCol < mat[0].length && ans[newRow][newCol] == -1){
                ans[newRow][newCol] = distance + 1;
                queue.push([newRow , newCol , distance + 1]);
            }
        }
    }
    return ans;
};