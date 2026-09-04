/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, edges) {
    let ans = [];
    let graph = Array.from({length : numCourses} ,()=>[]);
    for(let [u ,v] of edges){
        graph[v].push(u);
    }
    const visited = Array(graph.length).fill(false);
    const pathVisited = Array(graph.length).fill(false);
    const dfs =(node)=>{
        visited[node] = true;
        pathVisited[node] = true;
        for(let neighbour of graph[node]){
            if(!visited[neighbour]){
                if(!dfs(neighbour))return false;
            }else if(pathVisited[neighbour])return false;
        }
        pathVisited[node] = false;
        ans.push(node);
        return true;
    }
    for(let i = 0;i<graph.length;i++){
        if(!visited[i]){
            if(!dfs(i))return [];
        }
    }
    return ans.reverse();
};