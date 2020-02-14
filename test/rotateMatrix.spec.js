const {expect} = require('chai')
const rotateMatrix = require('../src/rotateMatrix')

describe('Rotate Matrix 90 Degrees', () => {

  it('rotates 2x2 matrix by 90 degress', () => {
    let array = [[1,2],[3,4]]
    rotateMatrix(array)
    expect(array).to.eql([[3,1], [4,2]])
  })

  it('rotates 3x3 matrix by 90 degress', () => {
    let array = [[1,2,3],[4,5,6],[7,8,9]]
    rotateMatrix(array)
    expect(array).to.eql([[7,4,1],[8,5,2],[9,6,3]])
  })

  it('rotates 4x4 matrix by 90 degress', () => {
    let array = [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
    rotateMatrix(array)
    expect(array).to.eql([[16,12,14,15], [7,6,3,13],[10,8,4,2],[11,9,1,5]])
  })

})
