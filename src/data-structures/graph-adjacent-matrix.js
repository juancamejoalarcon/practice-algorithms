class Node {
    constructor(value) {
        this.value = value
    }
}

class Graph {
    constructor() {
        this.verts = [] 
        this.edges = []
    }
    add(vert) {
        this.verts.push(new Node(vert))
        const newArr = [0]
        this.edges.forEach((edge) => {
            edge.push(0)
            newArr.push(0)
        })
        this.edges.push(newArr)
    }
    createEdge(v1, v2) {
        let index1;
        let index2;
        this.verts.forEach((vert, index) => {
            if (vert.value === v1)  index1 = index
            if (vert.value === v2)  index2 = index
        })
        this.edges[index1][index2] = 1
        this.edges[index2][index1] = 1

    }
}

const graph = new Graph()
graph.add(0)
graph.add(1)
graph.add(2)
graph.add(3)
graph.add(4)
graph.createEdge(0, 4)
graph.createEdge(0, 1)
graph.createEdge(1, 4)
graph.createEdge(1, 3)
graph.createEdge(1, 2)
graph.createEdge(1, 2)
graph.createEdge(2, 3)
graph.createEdge(4, 3)
console.log(graph)