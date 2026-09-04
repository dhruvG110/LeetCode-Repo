/**
 * @param {number[][]} graph
 * @return {number[]}
 */
const reverseGraph =(graph)=>{
    const reversed = Array.from({ length: graph.length }, () => []);
    for(let i = 0;i<graph.length;i++){
        for(const des of graph[i]){
            reversed[des].push(i);
        }
    }
    return reversed;
}

var eventualSafeNodes = function(graph) {

    const revGraph = reverseGraph(graph);

    const indegree = Array(revGraph.length).fill(0);
    for (let i = 0; i < revGraph.length; i++) {
        for (let neighbour of revGraph[i]) {
            indegree[neighbour]++;
        }
    }

    let queue = [];
    for(let i = 0;i<revGraph.length;i++){
        if(indegree[i] == 0){
            queue.push(i)
        }
    }
    let ans = [];
    while(queue.length > 0){
        let node = queue.shift();
        ans.push(node);
        for(let neighbour of revGraph[node]){
            indegree[neighbour]--;
            if(indegree[neighbour] == 0){
                queue.push(neighbour);
            }
        }
    }
    return ans.sort((a,b)=> a -b);
};