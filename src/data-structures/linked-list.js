class Node {
    constructor(value, next) {
        this.value = value
        this.next = next || null
    }
}

class LinkedList {
    constructor(node) {
        this.head = node || null
    }
    insert(value) {
        this.head = new Node(value, this.head)
    }
    append(value) {
        if (this.head === null) {
            this.head = new Node(value, this.head)
            return
        }
        let currentNode = this.head
        while (currentNode.next !== null) currentNode = currentNode.next
        currentNode.next = new Node(value, null)
    }
    delete(value) {
        if (this.head === null) return
        if (this.head.value === value) {
            this.head = this.head.next
            return
        }
        let currentNode = this.head
        while (currentNode.next !== null) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next
                return
            }
            currentNode = currentNode.next
        }
    }
}

const linkedList = new LinkedList()
linkedList.append(10)
linkedList.insert(2)
linkedList.insert(3)
linkedList.insert(5)
linkedList.append(9)
// linkedList.delete(5)
let currentNode = linkedList.head
while (currentNode.next !== null) {
    console.log(currentNode.value)
    currentNode = currentNode.next
}
console.log(currentNode.value)