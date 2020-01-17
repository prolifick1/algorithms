const { expect } = require('chai');
const Queue = require('../src/queue');

describe('Queue via Linked List', () => {
  let queue;
  beforeEach('create new queue', () => {
    queue = new Queue();
  });

  it('expect queue to have head, tail, length, enqueue, and dequeue properties', () => {
    expect(queue).to.have.property('head');
    expect(queue).to.have.property('tail');
    expect(queue).to.have.property('length');
    expect(queue).to.have.property('enqueue');
    expect(queue).to.have.property('dequeue');
  });

  it('expect to be able enqueue values onto the queue', () => {
    queue.enqueue('one');
    expect(queue.head.val).to.equal('one');
    queue.enqueue('two');
    queue.enqueue('three');
    expect(queue.head.val).to.equal('one');
    expect(queue.tail.val).to.equal('three');
  });

  it('expect enqueue method to return new length', () => {
    expect(queue.length).to.equal(0);
    expect(queue.enqueue('one')).to.equal(1);
    expect(queue.length).to.equal(1);
    expect(queue.enqueue('two')).to.equal(2);
    expect(queue.length).to.equal(2);
    expect(queue.enqueue('three')).to.equal(3);
    expect(queue.length).to.equal(3);
  });

  it(`expect dequeue method to return undefined there aren't any nodes`, () => {
    expect(queue.dequeue()).to.equal(undefined);
  });

  it('expect dequeue method to return removed vals in FIFO order', () => {
    queue.enqueue('cat');
    queue.enqueue('dog');
    queue.enqueue('fish');
    expect(queue.dequeue()).to.equal('cat');
    expect(queue.dequeue()).to.equal('dog');
    expect(queue.dequeue()).to.equal('fish');
  });

  it('expect dequeue method to decrease length', () => {
    queue.enqueue('red');
    queue.enqueue('green');
    queue.enqueue('blue');
    expect(queue.length).to.equal(3);
    queue.dequeue();
    expect(queue.length).to.equal(2);
    queue.dequeue();
    expect(queue.length).to.equal(1);
    queue.dequeue();
    expect(queue.length).to.equal(0);
    queue.dequeue();
    expect(queue.length).to.equal(0);
  });
});
