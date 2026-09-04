/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, edges) {
    let indegree = Array(numCourses).fill(0);
    let graph = Array.from({length: numCourses}, () => []);
    for(let [u,v] of edges){
        graph[v].push(u);
        indegree[u]++;
    }
    let queue =[];
    for(let i = 0;i<numCourses;i++){
        if(indegree[i] == 0)queue.push(i);
    }
    let ans = [];
    while(queue.length > 0){
        let node = queue.shift();
        ans.push(node);
        for(let neighbour of graph[node]){
            indegree[neighbour]--;
            if(indegree[neighbour] == 0) queue.push(neighbour);
        }
    }
    if(ans.length == numCourses){
        return ans;
    }else{
        return [];
    }
};