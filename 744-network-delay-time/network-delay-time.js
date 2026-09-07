/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    let graph = Array.from({length : n + 1},()=>[]);
    for(let [u,v,w] of times){
        graph[u].push([v,w]);
    }
    let dist = Array(n + 1).fill(Infinity);
    dist[k] = 0;
    const pq = new MinHeap();
    pq.push([0,k]);
    while(!pq.isEmpty()){
        let[currentDist , node] = pq.pop();
        if(currentDist > dist[node]) continue;
        for(let [neighbour , weight] of graph[node]){
            const newDist = currentDist + weight;
            if(newDist < dist[neighbour]){
                dist[neighbour] = newDist;
                pq.push([newDist,neighbour]);
            }
        }
    }
    let ans = 0;
    for(let i = 1;i<=n;i++){
        ans = Math.max(ans , dist[i]);
    }
    return ans == Infinity ? -1 : ans;
};