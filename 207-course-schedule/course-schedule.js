/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, edges) {
    let graph = Array.from(
        { length: numCourses },
        () => []
    );
    for (let [u, v] of edges) {
        graph[v].push(u);
    }
    const visited = Array(graph.length).fill(false);
    const pathVisited = Array(graph.length).fill(false);

    const dfs = (node) => {
        visited[node] = true;
        pathVisited[node] = true;
        for (let neighbour of graph[node]) {
            if (!visited[neighbour]) {
                if(!dfs(neighbour)) return false;
            } else if (pathVisited[neighbour] == true) return false;
        }
        pathVisited[node] = false;
        return true;
    }
    let ans = [];let finalAns = true;
    for(let i = 0;i<graph.length;i++){
        if(!visited[i]){
           ans.push(dfs(i)) 
        }
    }
    for(let a of ans){
        finalAns = finalAns && a;
    }
    return finalAns;
};