var findTheCity = function(n, edges, distanceThreshold) {
    let graph = Array.from({length : n},()=>[]);
    for(let [u,v,w] of edges){
        graph[u].push([v,w]);
        graph[v].push([u,w]);
    };
    let minCount = Infinity;
    let answer= 0;
    for(let i = 0;i<n;i++){
        let dist = Array.from({length : n}).fill(Infinity);
        let currentCount = 0;
        const pq = new MinHeap();
        dist[i]=0;
        pq.push([0,i]);
        while(!pq.isEmpty()){
            const [cost , node] = pq.pop();
            for(let [neighbour , weight] of graph[node]){
                let newCost = cost + weight;
                if(newCost < dist[neighbour]){
                    dist[neighbour]=newCost;
                    pq.push([newCost , neighbour]);
                }
            }
        }
        for(let j =0;j<dist.length;j++){
            if(dist[j] <= distanceThreshold && i !== j){
                currentCount++;
            }
        }
        if(currentCount <= minCount) {
            minCount =  currentCount;
            answer = i;
        }
    }
    return answer;
};