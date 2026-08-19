/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let n = isConnected.length;
    let visited = Array(n).fill(false);
    const dfs = (node)=>{
        visited[node]= true;
        for(let j=0;j<n;j++){
            if(isConnected[node][j] === 1 && !visited[j]){
                dfs(j);
            }
        }
    }
    let provinces = 0;
    for(let i=0;i<n;i++){
        if(!visited[i]){
            provinces++;
            dfs(i);
        }
    }
    return provinces;
};