class Graph {
    constructor() {
        this.hashMap = {}
    }
    addVertex(vertex) {
        this.hashMap[vertex] = []
    }
    createEdge(v1, v2) {
        this.hashMap[v1].push(v2)
        this.hashMap[v2].push(v1)
    }
}

const graph = new Graph()
graph.addVertex(0)
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.createEdge(0, 1)
graph.createEdge(0, 4)
graph.createEdge(1, 2)
graph.createEdge(1, 3)
graph.createEdge(1, 4)
graph.createEdge(2, 3)
graph.createEdge(3, 4)
console.log(graph)