/*

  Graphs:
  - Collection of nodes (vertex) and connections (edge) between those nodes

  Directed Vs. Undirected
  - Undirected graphs do not have directed edges. Goes both ways. Two way relationship.
  - Directed graph have directed edges. Could go both directions or only go one direction. Depends.

  Weighted Vs. Unweighted
  - Weighted - Edges are given different weights
  - Unweighted - Edges do not have an associated weight

  Trees
  - Type of graph where there is only one path to each node

  Adjacency Matrix
  - Two dimensional connections usually represented by nested arrays
  - If there is a connection between two nodes, usually represented as a 1
  - If there is not a connection between two nodes, usually represented as a 1
  - Quicker to lookup connections, but uses more memory
      A    B   C   D
  A: [[0,  1,  0,  1],
  B:  [0,  1,  0,  1],
  C:  [0,  1,  0,  1],
  D:  [0,  1,  0,  1]]

  Adjacency List
  - Only connections are represented
  - Slower to lookup connections, but uses less memory
  - Many nodes with few connections lends better to an adjacency list
  {
    A: [B, C],
    B: [A],
    C: [A, D],
    D: [C]
  }

*/

class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      if (!this.adjacencyList[v1].includes(v2)) {
        this.adjacencyList[v1].push(v2)
      }
      if (!this.adjacencyList[v2].includes(v1)) {
        this.adjacencyList[v2].push(v1)
      }
    }
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter( v => v !== v2)
      this.adjacencyList[v2] = this.adjacencyList[v2].filter( v => v !== v1)
    }
  }

  removeVertex(vertex) {
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(adjacentVertex,vertex)
    }
    delete this.adjacencyList[vertex]
  }

  depthFirstSearchRecursive(start, visited = {}) {
    let order = []
    order.push(start)
    visited[start] = true
    this.adjacencyList[start].forEach(v => {
      if (!visited[v]) {
        order = order.concat(this.depthFirstSearchRecursive(v, visited))
      }
    })
    return order
  }

  depthFirstSearchIterative(start) {
    let visited = {}
    let stack = [start]
    let order = []
    while (stack.length) {
      let current = stack.pop()
      if (!visited[current]) {
        order.push(current)
        visited[current] = true
        this.adjacencyList[current].forEach(v => {
          stack.push(v)
        })
      }
    }
    return order
  }

  breadthFirstSearch(start) {
    let visited = {}
    let queue = [start]
    let order = []
    while (queue.length) {
      let current = queue.shift()
      if (!visited[current]) {
        visited[current] = true
        order.push(current)
        this.adjacencyList[current].forEach(v => {
          queue.push(v)
        })
      }
    }
    return order
  }
}

module.exports = Graph
