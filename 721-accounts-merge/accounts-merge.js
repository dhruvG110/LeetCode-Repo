
var accountsMerge = function (accounts) {
    let parent = [];
    const map = new Map();

    for (let i = 0; i < accounts.length; i++) {
        parent.push(i);
    }
    const find = (x) => {
        while (x != parent[x]) {
            x = parent[x];
        }
        return x;
    }
    const union = (x, y) => {
        const u = find(x);
        const v = find(y);
        if (u == v) return false;
        parent[v] = u;
        return true;
    }
    const dsu = (u, v) => {
        return union(u, v);
    }

    for (let i = 0; i < accounts.length; i++) {
        for (let j = 1; j < accounts[i].length; j++) {
            if (!map.has(accounts[i][j])) {
                map.set(accounts[i][j], i);
            } else {
                const oldAccount = map.get(accounts[i][j]);
                union(i, oldAccount);
            }
        }
    }
    let answer = Array.from({ length: parent.length }, () => []);

    for (let i = 0; i < parent.length; i++) {
        let root = find(i);

        for (let j = 1; j < accounts[i].length; j++) {
            answer[root].push(accounts[i][j]);
        }
    }

    let result = [];

    for (let i = 0; i < answer.length; i++) {
        if (answer[i].length > 0) {
            answer[i] = [...new Set(answer[i])].sort();
            answer[i].unshift(accounts[i][0]);
            result.push(answer[i]);
        }
    }

    return result;
};