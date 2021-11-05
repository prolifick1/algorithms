let expect = require('chai').expect;
let binarySearch = require(`../src/binarySearch`);

describe('binarySearch', () => {
  it('should search number in sorted array', () => {
    expect(binarySearch([], 1)).to.equal(-1);
     expect(binarySearch([1], 1)).to.equal(0);
     expect(binarySearch([1, 2], 1)).to.equal(0);
    expect(binarySearch([1, 2], 2)).to.equal(1);
    expect(binarySearch([1, 5, 10, 12], 1)).to.equal(0);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 17)).to.equal(5);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 1)).to.equal(0);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 100)).to.equal(7);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 0)).to.equal(-1);
  });

//   it('should search object in sorted array', () => {
//     const sortedArrayOfObjects = [{
//         key: 1,
//         value: 'value1'
//       },
//       {
//         key: 2,
//         value: 'value2'
//       },
//       {
//         key: 3,
//         value: 'value3'
//       },
//     ];

//     const comparator = (a, b) => {
//       if (a.key === b.key) return 0;
//       return a.key < b.key ? -1 : 1;
//     };

//     expect(binarySearch([], {
//       key: 1
//     }, comparator)).to.equal(-1);
//     expect(binarySearch(sortedArrayOfObjects, {
//       key: 4
//     }, comparator)).to.equal(-1);
//     expect(binarySearch(sortedArrayOfObjects, {
//       key: 1
//     }, comparator)).to.equal(0);
//     expect(binarySearch(sortedArrayOfObjects, {
//       key: 2
//     }, comparator)).to.equal(1);
//     expect(binarySearch(sortedArrayOfObjects, {
//       key: 3
//     }, comparator)).to.equal(2);
//   });
});
