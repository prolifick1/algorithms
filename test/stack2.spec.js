const {
  expect
} = require('chai');
const Stack = require('../src/stack2');

describe('Stack via array', () => {
  let stack;
  beforeEach('create new stack', () => {
    stack = new Stack();
  });
  it('initialize with empty storage object and a count of 0', () => {
    expect(stack.storage).to.eql([]);
    expect(stack.count).to.equal(0);
  })
  it('#push to storage object', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.storage).to.eql([1, 2, 3]);
    expect(stack.count).to.equal(3);
  })
  it('#pop returns undefined when pop on empty stack', () => {
    expect(stack.pop()).to.equal(undefined);
  });
  it('#pop elements from the stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).to.equal(2);
    expect(stack.count).to.equal(1);
    expect(stack.pop()).to.equal(1);
    expect(stack.count).to.equal(0);
  });
  it('#length returns length', () => {
    expect(stack.length()).to.equal(0);
    stack.push(1);
    expect(stack.length()).to.equal(1);
    stack.push(2);
    expect(stack.length()).to.equal(2);
    stack.push(3);
    expect(stack.length()).to.equal(3);
  });
  it('#peek returns the element at the top of the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).to.equal(3);
  });
  it('#isEmpty returns boolean for empty condition', () => {
    expect(stack.isEmpty()).to.equal(true);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.isEmpty()).to.equal(false);
  })
});
