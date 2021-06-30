class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.head = null
    }
    addNode(value) {
        const node = new Node(value)
        if (!this.head) this.head = node
        else {
            node.next = this.head
            this.head = node
        }
    }
    removeNode() {
        if (!this.head) return
        if (this.head.next === null) {
            this.head = null
            return
        }
        this.head = this.head.next
    }
}

const stack = new Stack()
stack.addNode(0)
stack.addNode(1)
stack.addNode(2)
stack.removeNode()
console.log(stack)

