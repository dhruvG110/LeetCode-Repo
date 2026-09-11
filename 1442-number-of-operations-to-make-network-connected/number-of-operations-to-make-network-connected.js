/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    let extraCable = 0;
    let computers = connections.length;
    let parent = [];
    for(let i = 0;i<n;i++){
        parent.push(i);
    }
    const find =(x)=>{
        while(x != parent[x]){
            x = parent[x];
        }
        return x;
    }
    const union =(x,y)=>{
        const u = find(x);
        const v = find(y);
        if(u == v) return false;
        parent[v] = u;
        return true;
    }
    const dsu =(u,v)=>{
        return union(u,v) ? true : false;
    }
    for(let [u,v] of connections){
        if(!dsu(u,v)){
            extraCable++;
        }
    }
    if(n - 1  <= computers){
        return n - (computers - extraCable) - 1;
    }
    return -1;
};