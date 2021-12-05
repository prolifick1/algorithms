const deleteNode = require('../src/deleteNode.js');
const { expect } = require('chai');
const { arrayToLinkedList, linkedListToArray } = require('./utils');

describe('#deleteNode', () => {
  it('trivial case, deletes a node from the middle of a list', () => {
   const input = arrayToLinkedList([20, 6, 2, 19, 7, 4, 15, 9]); 
    const expected = arrayToLinkedList([20, 6, 2, 7, 4, 15, 9]);
    expect(deleteNode(input, 3)).to.eql(expected);
  });
  it('deletes node at position 1 (second node)', () => {
    const input = arrayToLinkedList([11, 9, 2, 9]);
    const expected = arrayToLinkedList([11, 2, 9]);
    expect(deleteNode(input,1)).to.eql(expected);

  });
  it('deletes node at position 0 (head node)', () => {
    const input = arrayToLinkedList([7, 11, 12, 8, 18, 16, 5, 18]);
    const expected = arrayToLinkedList([11, 12, 8, 18, 16, 5, 18]);
    expect(deleteNode(input,0)).to.eql(expected);

  });
  it('deletes from a longer list 1', () => {
    const input = arrayToLinkedList([51,15,72,6,22,93,61,86,6,28,24,55,8,63,18,51,71,81]);
    const expected = arrayToLinkedList([51,15,6,22,93,61,86,6,28,24,55,8,63,18,51,71,81]);
    
    expect(deleteNode(input,2)).to.eql(expected);
  });
  it('deletes from a longer list 2', () => {
    const input = arrayToLinkedList([34,5,45,25,2,48,54,70,3,42,6,54,33]);
    const expected = arrayToLinkedList([34,5,45,25,2,54,70,3,42,6,54,33]);
    expect(deleteNode(input, 5)).to.eql(expected);
  });
  it('deletes from longer list 3', () => {
    const input = arrayToLinkedList([20,94,40,72,79,52,45,94,81,91]);
    const expected = arrayToLinkedList([20,94,40,79,52,45,94,81,91]);
    expect(deleteNode(input, 3)).to.eql(expected);
  });
});
