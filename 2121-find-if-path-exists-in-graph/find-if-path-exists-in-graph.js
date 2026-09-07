/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    if(source == destination) return true;
    let graph = Array.from({length : n},()=>[]);
    for(let [u,v] of edges){
        graph[u].push(v);
        graph[v].push(u);
    };
    let visited = Array(n).fill(false);
    let queue = [];
    queue.push(source);
    while(queue.length > 0){
        let node = queue.shift();
        
        for(let neighbour of graph[node]){
            if(neighbour == destination){
                return true;
            }else if(!visited[neighbour]){
                visited[neighbour] = true;
                queue.push(neighbour);
            }
        }
    }
    return false;
};