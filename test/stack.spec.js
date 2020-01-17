const { expect } = require('chai');
const Stack = require('../src/stack');

describe('Stack via Linked List', () => {
  let stack;
  beforeEach('create new stack', () => {
    stack = new Stack();
  });

  it('expect stack to have head, tail, length, push, and pop properties', () => {
    expect(stack).to.have.property('head');
    expect(stack).to.have.property('tail');
    expect(stack).to.have.property('length');
    expect(stack).to.have.property('pop');
    expect(stack).to.have.property('push');
  });

  it('expect to be able push values onto the stack', () => {
    stack.push('one');
    expect(stack.head.val).to.equal('one');
    stack.push('two');
    stack.push('three');
    expect(stack.head.val).to.equal('three');
    expect(stack.tail.val).to.equal('one');
  });

  it('expect push method to return new length', () => {
    expect(stack.length).to.equal(0);
    expect(stack.push('one')).to.equal(1);
    expect(stack.length).to.equal(1);
    expect(stack.push('two')).to.equal(2);
    expect(stack.length).to.equal(2);
    expect(stack.push('three')).to.equal(3);
    expect(stack.length).to.equal(3);
  });

  it(`expect pop method to return undefined there aren't any nodes`, () => {
    expect(stack.pop()).to.equal(undefined);
  });

  it('expect pop method to return removed vals in LIFO order', () => {
    stack.push('cat');
    stack.push('dog');
    stack.push('fish');
    expect(stack.pop()).to.equal('fish');
    expect(stack.pop()).to.equal('dog');
    expect(stack.pop()).to.equal('cat');
  });

  it('expect pop method to decrease length', () => {
    stack.push('red');
    stack.push('green');
    stack.push('blue');
    expect(stack.length).to.equal(3);
    stack.pop();
    expect(stack.length).to.equal(2);
    stack.pop();
    expect(stack.length).to.equal(1);
    stack.pop();
    expect(stack.length).to.equal(0);
    stack.pop();
    expect(stack.length).to.equal(0);
  });
});
