/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let color = Array(graph.length).fill(-1);
    const dfs =(node)=>{
        for(let neighbour of graph[node]){
            if(color[neighbour] == -1){
                color[neighbour] = 1 - color[node];
                if(!dfs(neighbour)) return false;
            }
            else if(color[neighbour] == color[node])return false;
        }
        return true;
    }
    let ans =[];
    let finalAns = true;
    for(let i = 0;i<graph.length;i++){
        if(color[i] == -1){
            color[i] = 0;
           ans.push(dfs(i));
        }
    }
    for(let i = 0;i<ans.length;i++){
        finalAns = finalAns && ans[i];
    }
    return finalAns;
};