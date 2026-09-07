var minimumEffortPath = function(heights) {
    let n = heights.length;
    let m = heights[0].length;

    let pq = [[0, 0, 0]]; // [effort, row, col]
    let dist = Array.from({ length: n }, () => Array(m).fill(1e9));
    dist[0][0] = 0;

    let dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    while(pq.length > 0){
        let [diff, r, c] = pq.pop();

        if(r === n-1 && c === m-1) return diff;

        for(let k = 0; k < 4; k++){
            let nr = r + dir[k][0];
            let nc = c + dir[k][1];

            if(nr >= 0 && nr < n && nc >= 0 && nc < m){
                let newEffort = Math.max(Math.abs(heights[nr][nc] - heights[r][c]), diff);
                if(newEffort < dist[nr][nc]){
                    dist[nr][nc] = newEffort;

                    let newElement = [newEffort, nr, nc];
                    // Do Binary Search to plane the shorter dist in the right for O(1) pop
                    let low = 0, high = pq.length;
                    while(low < high){
                        let mid = (low + high) >> 1;
                        if(pq[mid][0] < newEffort) high = mid;
                        else low = mid + 1;
                    }

                    pq.splice(low, 0, newElement);
                }
            }
        }
    }
    return 0;
};