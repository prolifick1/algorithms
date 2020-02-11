/*

  Dijkstra's Algorithm:
  - Finds the shortest path between two vertices on a graph
  - 'What's the fastest way to get from point A to point B'
  -

*/

const PriorityQueue = require('./priorityQueue')

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({node: v2, weight})
    this.adjacencyList[v2].push({node: v1, weight})
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}

    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else  {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }

    while (nodes.values.length) {
      let smallest = nodes.dequeue()
      if (smallest === finish) {
        // Done
        // Build up path to return
        let path = []
        let current = finish
        while (current) {
          path.unshift(current)
          current = previous[current]
        }
        return path
      }
      if (smallest || distances[smallest] !== Infinity) {
        this.adjacencyList[smallest].forEach(neighbor => {
          // find neighboring node
          // calculate new distance to the neighboring node
          let candidate = distances[smallest] + neighbor.weight
          if (candidate < distances[neighbor.node]) {
            // updating new smallest distance to neighbor
            distances[neighbor.node] = candidate
            // updating how we got to neighbor
            previous[neighbor.node] = smallest
            // enqueue in priority queue with new priority
            nodes.enqueue(neighbor.node, candidate)
          }
        })
      }
    }
  }
}

module.exports = WeightedGraph
