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
var levelOrder = function (root) {
    if (root == null) return [];
    let queue = [];
    let ans = [];
    queue.push(root);
    while (queue.length != 0) {
        let size = queue.length;
        let level = [];
        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            level.push(node.val);

            if (node.left != null) {
                queue.push(node.left);
            }

            if (node.right != null) {
                queue.push(node.right);
            }
        }
        ans.push(level);
    }
    return ans;
};