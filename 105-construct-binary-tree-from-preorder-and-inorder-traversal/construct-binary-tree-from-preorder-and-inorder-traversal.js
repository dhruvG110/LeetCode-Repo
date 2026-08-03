/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const dfs = (preorder, inorder) => {
        if(preorder.length == 0 && inorder.length == 0) return null;
        let root = new TreeNode(preorder[0]);
        let leftSubTree = [];//inorder arrays
        let rightSubTree = [];//inorder arrays
        let rootIdx = 0;//inorder index
        for (let i = 0; i < inorder.length; i++) {
            if (inorder[i] == root.val) {
                rootIdx = i;
                break;
            }
        }
        for (let i = 0; i < rootIdx; i++) {
            leftSubTree.push(inorder[i]);
        }
        for (let i = rootIdx + 1; i < inorder.length; i++) {
            rightSubTree.push(inorder[i])
        }
        let leftPreorder = preorder.slice(1, rootIdx + 1);
        let rightPreorder = preorder.slice(rootIdx + 1);
        root.left = dfs(leftPreorder , leftSubTree);
        root.right = dfs(rightPreorder , rightSubTree);
        return root;
    }
    return dfs(preorder , inorder);
};