/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let parent = [];
    for(let i = 0;i<edges.length + 1;i++){
        parent.push(i);
    }
    console.log(parent);
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
    for(let [u,v] of edges){
        if(!dsu(u,v)){
            return [u,v];
        }
    }
};