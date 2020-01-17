const { expect } = require('chai');
const radixSort = require('../src/radixSort');

describe('Radix Sort Algorithm', () => {
  it('sorts unsorted arrays', () => {
    let arr1 = [];
    // .to.eql is not strictly equal
    expect(radixSort(arr1)).to.eql([]);

    let arr2 = [55];
    expect(radixSort(arr2)).to.eql([55]);

    let arr3 = [1, 2, 3, 4, 5];
    expect(radixSort(arr3)).to.eql([1, 2, 3, 4, 5]);

    let arr4 = [9, 8, 7, 6, 5];
    expect(radixSort(arr4)).to.eql([5, 6, 7, 8, 9]);

    let arr5 = [109, 23, 457, 2, 1, 300];
    expect(radixSort(arr5)).to.eql([1, 2, 23, 109, 300, 457]);

    let arr6 = [892, 23, 562, 46, 3, 1112, 9, 0, 99];
    expect(radixSort(arr6)).to.eql([0, 3, 9, 23, 46, 99, 562, 892, 1112]);
  });
});
