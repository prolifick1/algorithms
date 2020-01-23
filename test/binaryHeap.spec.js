const { expect } = require('chai');
const MaxBinaryHeap = require('../src/binaryHeap');

describe('Max Binary Heap Implementation', () => {
  let heap;
  beforeEach('Create new max binary heap', () => {
    heap = new MaxBinaryHeap();
  });

  it('Insert method adds values and ensures parent is larger', () => {
    expect(heap.insert(41).values).to.eql([41]);

    expect(heap.insert(18).values).to.eql([41, 18]);

    expect(heap.insert(12).values).to.eql([41, 18, 12]);

    expect(heap.insert(39).values).to.eql([41, 39, 12, 18]);

    expect(heap.insert(27).values).to.eql([41, 39, 12, 18, 27]);

    expect(heap.insert(33).values).to.eql([41, 39, 33, 18, 27, 12]);

    expect(heap.insert(55).values).to.eql([55, 39, 41, 18, 27, 12, 33]);
  });

  it('extractMax methods removes max value and reorders', () => {
    heap.insert(41);
    heap.insert(18);
    heap.insert(12);
    heap.insert(39);
    heap.insert(27);
    heap.insert(33);
    heap.insert(55);
    //      55
    //   39    41
    //18  27  12  33
    expect(heap.extractMax()).to.equal(55);
    expect(heap.values).to.eql([41, 39, 33, 18, 27, 12]);
    //      41
    //   39    33
    //18  27  12
    expect(heap.extractMax()).to.equal(41);
    expect(heap.values).to.eql([39, 27, 33, 18, 12]);
    //      39
    //   27    33
    //18  12
    expect(heap.extractMax()).to.equal(39);
    expect(heap.values).to.eql([33, 27, 12, 18]);
    //      33
    //   27    12
    //18
    expect(heap.extractMax()).to.equal(33);
    expect(heap.values).to.eql([27, 18, 12]);
    //      27
    //   18    12
    expect(heap.extractMax()).to.equal(27);
    expect(heap.values).to.eql([18, 12]);
    //      18
    //   12
    expect(heap.extractMax()).to.equal(18);
    expect(heap.values).to.eql([12]);
    //      12
    expect(heap.extractMax()).to.equal(12);
    expect(heap.values).to.eql([]);
    //
    expect(heap.extractMax()).to.equal(undefined);
    expect(heap.values).to.eql([]);
  });

  it('Priority queue method serves highest priority element first', () => {
    //
  });
});
