// Create a binary tree an write a function to find the sume in O(n) time

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(root) {
        this.root = new Node(root)
    }
}

function findSumOfTree(node) {
    if (node === null) return 0
    return node.value + findSumOfTree(node.left) + findSumOfTree(node.right)
}

const tree = new Tree(2)
tree.root.left = new Node(3)
tree.root.left.left = new Node(5)
tree.root.left.right = new Node(6)
tree.root.right = new Node(4)
console.log(findSumOfTree(tree.root))