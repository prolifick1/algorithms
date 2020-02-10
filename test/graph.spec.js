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

  it(`depthFirstSearchRecursive method does a depth first traversal of nodes`, ()=> {
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addVertex('D')
    graph.addVertex('E')
    graph.addVertex('F')

    graph.addEdge('A','B')
    graph.addEdge('A','C')
    graph.addEdge('B','D')
    graph.addEdge('C','E')
    graph.addEdge('D','E')
    graph.addEdge('D','F')
    graph.addEdge('E','F')

    // {
    //   A: [ 'B', 'C' ],
    //   B: [ 'A', 'D' ],
    //   C: [ 'A', 'E' ],
    //   D: [ 'B', 'E', 'F' ],
    //   E: [ 'C', 'D', 'F' ],
    //   F: [ 'D', 'E' ]
    // }

    //        A
    //      /   \
    //     B     C
    //     |     |
    //     D --- E
    //      \   /
    //        F

    expect(graph.depthFirstSearchRecursive('A')).to.eql(['A','B','D','E','C','F'])
    expect(graph.depthFirstSearchRecursive('B')).to.eql(['B','A','C','E','D','F'])
    expect(graph.depthFirstSearchRecursive('C')).to.eql(['C','A','B','D','E','F'])
    expect(graph.depthFirstSearchRecursive('D')).to.eql(['D','B','A','C','E','F'])
    expect(graph.depthFirstSearchRecursive('E')).to.eql(['E','C','A','B','D','F'])
    expect(graph.depthFirstSearchRecursive('F')).to.eql(['F','D','B','A','C','E'])
  })

  it(`depthFirstSearchIterative method does a depth first traversal of nodes`, ()=> {
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addVertex('D')
    graph.addVertex('E')
    graph.addVertex('F')

    graph.addEdge('A','B')
    graph.addEdge('A','C')
    graph.addEdge('B','D')
    graph.addEdge('C','E')
    graph.addEdge('D','E')
    graph.addEdge('D','F')
    graph.addEdge('E','F')

    // {
    //   A: [ 'B', 'C' ],
    //   B: [ 'A', 'D' ],
    //   C: [ 'A', 'E' ],
    //   D: [ 'B', 'E', 'F' ],
    //   E: [ 'C', 'D', 'F' ],
    //   F: [ 'D', 'E' ]
    // }

    //        A
    //      /   \
    //     B     C
    //     |     |
    //     D --- E
    //      \   /
    //        F

    expect(graph.depthFirstSearchIterative('A')).to.eql(['A','C','E','F','D','B'])
    expect(graph.depthFirstSearchIterative('B')).to.eql(['B','D','F','E','C','A'])
    expect(graph.depthFirstSearchIterative('C')).to.eql(['C','E','F','D','B','A'])
    expect(graph.depthFirstSearchIterative('D')).to.eql(['D','F','E','C','A','B'])
    expect(graph.depthFirstSearchIterative('E')).to.eql(['E','F','D','B','A','C'])
    expect(graph.depthFirstSearchIterative('F')).to.eql(['F','E','D','B','A','C'])
  })

  it(`breadthFirstSearch method does a breadth first traversal of nodes`, () => {
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addVertex('D')
    graph.addVertex('E')
    graph.addVertex('F')

    graph.addEdge('A','B')
    graph.addEdge('A','C')
    graph.addEdge('B','D')
    graph.addEdge('C','E')
    graph.addEdge('D','E')
    graph.addEdge('D','F')
    graph.addEdge('E','F')

    // {
    //   A: [ 'B', 'C' ],
    //   B: [ 'A', 'D' ],
    //   C: [ 'A', 'E' ],
    //   D: [ 'B', 'E', 'F' ],
    //   E: [ 'C', 'D', 'F' ],
    //   F: [ 'D', 'E' ]
    // }

    //        A
    //      /   \
    //     B     C
    //     |     |
    //     D --- E
    //      \   /
    //        F
    expect(graph.breadthFirstSearch('A')).to.eql(['A','B','C','D','E','F'])
    expect(graph.breadthFirstSearch('B')).to.eql(['B','A','D','C','E','F'])
    expect(graph.breadthFirstSearch('C')).to.eql(['C','A','E','B','D','F'])
    expect(graph.breadthFirstSearch('D')).to.eql(['D','B','E','F','A','C'])
    expect(graph.breadthFirstSearch('E')).to.eql(['E','C','D','F','A','B'])
    expect(graph.breadthFirstSearch('F')).to.eql(['F','D','E','B','C','A'])
  })

})
