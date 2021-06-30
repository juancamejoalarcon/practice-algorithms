class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
    }
    add(value) {
        const node = new Node(value)
        if (this.tail != null) {
            this.tail.next = node
        }
        this.tail = node
        if (this.head === null) this.head = node
    }
    remove() {
        if (!this.head) return
        if (this.head.next === null) {
            this.head = null
            this.tail = null
            return
        }
        this.head = this.head.next
    }
}

const queue = new Queue()
queue.add(0)
queue.add(1)
queue.add(2)
queue.add(3)
queue.remove()
console.log(queue)
