/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const ogColor = image[sr][sc];
    const dfs = (row , col)=>{
        if(image[row][col] == color ) return image;
        image[row][col] = color;
        let directions =[
            [-1,0],
            [1,0],
            [0,-1],
            [0,1]
        ];
        for(const [dr ,dc] of directions){
            let newRow = row + dr;
            let newCol = col + dc;
            if(newRow >= 0 && newCol >= 0 && newRow < image.length && newCol < image[0].length && image[newRow][newCol] == ogColor){
                dfs(newRow , newCol);
            }
        }
        
    }
    dfs(sr , sc);
    return image;
};