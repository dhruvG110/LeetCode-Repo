/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    let directions =[
        [1,0],
        [0,1],
        [-1,0],
        [0,-1]
    ];
    let count = 0;
    const dfs =(row , col)=>{
        grid[row][col] = 0;
        for(let [dr , dc] of directions){
            let newRow = row + dr;
            let newCol = col + dc;
            if(newRow >= 0 && newCol >= 0 && newCol < grid[0].length && newRow < grid.length && grid[newRow][newCol] == 1){
                dfs(newRow , newCol);
            }
        }
    }
    for(let j = 0;j<grid[0].length;j++){
        if(grid[0][j] == 1){
            dfs(0,j);
        }if(grid[grid.length - 1][j] == 1){
            dfs(grid.length - 1 , j);
        }
    }
    for(let i = 0;i<grid.length;i++){
        if(grid[i][0] == 1){
            dfs(i,0);
        }if(grid[i][grid[0].length - 1] == 1){
            dfs(i , grid[0].length - 1);
        }
    }
    for(let i = 0;i<grid.length;i++){
        for(let j = 0;j<grid[0].length;j++){
            if(grid[i][j] == 1){
                count++;
            }
        }
    }
    return count;
};