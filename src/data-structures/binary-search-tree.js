class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
    insertFunct(value, side) {
        if (this[side] === null) {
            this[side] = new Node(value)
        } else {
            this[side].insert(value)
        }
    }
    insert(value) {
        if (value >= this.value) this.insertFunct(value, 'right')
        else this.insertFunct(value, 'left')
    }
    contains(value) {
        if (this.value === value) return true
        if (value > this.value) {
            if (this.right !== null) return this.right.contains(value)
        } else {
            if (this.left !== null) return this.left.contains(value)
        }
        return false
    }
}

const tree = new Node(5)
tree.insert(8)
tree.insert(6)
tree.insert(3)
tree.insert(2)
tree.insert(7)
console.log(tree.contains(3))
