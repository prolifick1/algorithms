const { expect } = require('chai');
const insertionSort = require('../src/insertionSort');

describe('Insertion Sort Algorithm', () => {
  it('sorts unsorted arrays', () => {
    let arr1 = [];
    expect(insertionSort(arr1)).to.eql([]);

    let arr2 = [55];
    expect(insertionSort(arr2)).to.eql([55]);

    let arr3 = [1, 2, 3, 4, 5];
    expect(insertionSort(arr3)).to.eql([1, 2, 3, 4, 5]);

    let arr4 = [9, 8, 7, 6, 5];
    expect(insertionSort(arr4)).to.eql([5, 6, 7, 8, 9]);

    let arr5 = [109, 23, 457, 2, 1, 300];
    expect(insertionSort(arr5)).to.eql([1, 2, 23, 109, 300, 457]);

    let arr6 = [892, 23, 562, 46, 3, 1112, 9, 0, 99, -12, -30];
    expect(insertionSort(arr6)).to.eql([
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
