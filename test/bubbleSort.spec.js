const { expect } = require('chai');
const bubbleSort = require('../src/bubbleSort');

describe('Bubble Sort Algorithm', () => {
  it('sorts unsorted arrays', () => {
    let arr1 = [];
    // .to.eql is not strictly equal
    expect(bubbleSort(arr1)).to.eql([]);

    let arr2 = [55];
    expect(bubbleSort(arr2)).to.eql([55]);

    let arr3 = [1, 2, 3, 4, 5];
    expect(bubbleSort(arr3)).to.eql([1, 2, 3, 4, 5]);

    let arr4 = [9, 8, 7, 6, 5];
    expect(bubbleSort(arr4)).to.eql([5, 6, 7, 8, 9]);

    let arr5 = [109, 23, 457, 2, 1, 300];
    expect(bubbleSort(arr5)).to.eql([1, 2, 23, 109, 300, 457]);

    let arr6 = [892, 23, 562, 46, 3, 1112, 9, 0, 99, -12, -30];
    expect(bubbleSort(arr6)).to.eql([
      -30,
      -12,
      0,
      3,
      9,
      23,
      46,
      99,
      562,
      892,
      1112,
    ]);
  });
});
