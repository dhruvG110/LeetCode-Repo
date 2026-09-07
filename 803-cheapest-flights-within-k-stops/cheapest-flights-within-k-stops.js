/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

class MiinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.isEmpty()) return null;
    const top = this.heap[0];
    const bottom = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = bottom;
      this.sinkDown(0);
    }
    return top;
  }

  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index][0] < this.heap[parentIndex][0]) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  sinkDown(index) {
    let length = this.heap.length;
    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }
      if (right < length && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }
      if (smallest !== index) {
        [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
        index = smallest;
      } else {
        break;
      }
    }
  }
}

var findCheapestPrice = function(n, flights, src, dst, k) {
    if(src == dst) return 0;
    let costArr = Array.from({length : n},()=> Array.from({length :k+2}).fill(Infinity));
    let graph = Array.from({length : n},()=>[]);
    for(let [u,v,w] of flights){
        graph[u].push([v,w]);
    }
    let pq = new MiinHeap();
    costArr[src][0] = 0;
    console.log(costArr);
    pq.push([0,src,0]);
    while(!pq.isEmpty()){
        let [cost , node , stops] = pq.pop();
        if(node == dst)return cost;
        for(let [neighbour , weight] of graph[node]){
            let newCost = cost + weight;
            let newStop = stops + 1;
            if(newStop > k + 1 ){
                continue;
            }else if(newStop <= k + 1){
                if(costArr[neighbour][newStop] > newCost){
                    costArr[neighbour][newStop] = newCost;
                    pq.push([newCost , neighbour , newStop]);
                }
            }
        }
    }
    return -1;
};