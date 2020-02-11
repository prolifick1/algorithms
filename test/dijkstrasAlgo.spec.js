const {expect} = require('chai')
const WeightedGraph = require('../src/dijkstrasAlgo')

describe(`Dijkstra's Algorithm Implementation`, () => {

  let graph;
  beforeEach('Create a new graph', () => {
    graph = new WeightedGraph;
  })

  it(`Finds the shortest path`, () => {
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addVertex('D')
    graph.addVertex('E')
    graph.addVertex('F')

    graph.addEdge('A', 'B', 4)
    graph.addEdge('A', 'C', 2)
    graph.addEdge('B', 'E', 3)
    graph.addEdge('C', 'D', 2)
    graph.addEdge('C', 'F', 4)
    graph.addEdge('D', 'F', 1)
    graph.addEdge('D', 'E', 3)
    graph.addEdge('F', 'E', 1)

    expect(graph.Dijkstra('A','E')).to.eql(['A', 'C', 'D', 'F','E'])
  })

})
