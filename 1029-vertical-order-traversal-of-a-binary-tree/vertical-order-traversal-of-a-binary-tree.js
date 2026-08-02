/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
    if (root == null) return [];
    let queue = [];
    let ans = [];
    const map = new Map();
    queue.push([root, 0, 0]);
    while (queue.length != 0) {
        let level = []
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let [node, row, col] = queue.shift();
            level.push([node.val, row, col]);
            if (!map.has(col)) {
                map.set(col, []);
            }
            map.get(col).push([row, node.val]);
            if (node.left != null) queue.push([node.left, row + 1, col - 1]);
            if (node.right != null) queue.push([node.right, row + 1, col + 1]);
        }
        ans.push(level);
    }
    let vT = [];
    for (let [col, arr] of map) {
        arr.sort((a, b) => {
            if (a[0] !== b[0]) return a[0] - b[0];
            return a[1] - b[1];
        });
    }
    let cols = [...map.keys()].sort((a, b) => a - b);

    for (let col of cols) {
        let temp = [];

        for (let [row, val] of map.get(col)) {
            temp.push(val);
        }

        vT.push(temp);
    }
    return vT;
};