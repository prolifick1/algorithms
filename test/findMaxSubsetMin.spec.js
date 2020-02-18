const {expect} = require('chai')
const findMaxSubsetMin = require('../src/findMaxSubsetMin')


describe('findMaxSubsetMin function', () => {

  it('If subset size is greater than array length, return -1', () => {
    let arr = [1,2,3,4,5]
    expect(findMaxSubsetMin(8,arr)).to.equal(-1)
  })

  it('Returns max value from all of the minimun subset values', () => {
    let arr = [1,2,3,4,5]
    expect(findMaxSubsetMin(1,arr)).to.equal(5)
    expect(findMaxSubsetMin(2, arr)).to.equal(4)
  })
})
