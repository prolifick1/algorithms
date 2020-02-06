const { expect } = require('chai');
const Graph = require('../src/graph')

describe('Graph Implementation', () => {
  let graph;
  beforeEach('Create new graph', () => {
    graph = new Graph()
  })

  it('addVertex method adds a new key to the adjacencyList', () => {
    expect(Object.keys(graph.adjacencyList).length).to.equal(0)
    graph.addVertex('New York')
    expect(Object.keys(graph.adjacencyList).length).to.equal(1)
    expect(graph.adjacencyList).to.ownProperty('New York')
    graph.addVertex('Chicago')
    expect(Object.keys(graph.adjacencyList).length).to.equal(2)
    expect(graph.adjacencyList).to.ownProperty('New York')
    expect(graph.adjacencyList).to.ownProperty('Chicago')
  })

  it('addEdge method connections between verticies in the adjacencyList', () => {
    graph.addVertex('New York')
    graph.addVertex('Chicago')
    graph.addVertex('Los Angeles')
    expect(graph.adjacencyList['New York']).to.be.empty
    expect(graph.adjacencyList['Chicago']).to.be.empty
    expect(graph.adjacencyList['Los Angeles']).to.be.empty
    graph.addEdge('New York', 'Chicago')
    expect(graph.adjacencyList['New York']).to.include('Chicago')
    expect(graph.adjacencyList['Chicago']).to.include('New York')
    expect(graph.adjacencyList['Los Angeles']).to.be.empty
  })

  it('addEdge method connections between verticies in the adjacencyList', () => {
    graph.addVertex('New York')
    graph.addVertex('Chicago')
    graph.addVertex('Los Angeles')
    graph.addEdge('New York', 'Chicago')
    graph.addEdge('New York', 'Los Angeles')
    expect(graph.adjacencyList['New York']).to.include('Chicago')
    expect(graph.adjacencyList['New York']).to.include('Los Angeles')
    expect(graph.adjacencyList['Chicago']).to.include('New York')
    expect(graph.adjacencyList['Los Angeles']).to.include('New York')
    graph.removeVertex('New York')
    expect(graph.adjacencyList).to.not.ownProperty('New York')
    expect(graph.adjacencyList).to.ownProperty('Chicago')
    expect(graph.adjacencyList['Chicago']).to.be.empty
    expect(graph.adjacencyList['Los Angeles']).to.be.empty
    graph.removeVertex('Chicago')
    expect(graph.adjacencyList).to.not.ownProperty('Chicago')
  })

})
