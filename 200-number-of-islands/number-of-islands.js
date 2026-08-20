/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const dfs =(row , col)=>{
        grid[row][col]="0";
        let directions =[
            [-1,0],
            [1,0],
            [0,-1],
            [0,1]
        ];
        for(const [dr , dc] of directions){
            let newRow = row + dr;
            let newCol = col + dc;
            if(newRow >=0&&newRow < grid.length && newCol >= 0 && newCol < grid[0].length && grid[newRow][newCol] == "1"){
                dfs(newRow , newCol);
            }
        }
    }
    let islands = 0;
    for(let i = 0;i < grid.length ;i++){
        for(let j = 0;j <grid[0].length;j++){
            if(grid[i][j] == "1"){
                islands++;
                dfs(i,j);
            }
        }
    }
    return islands;
};