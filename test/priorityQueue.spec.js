const { expect } = require('chai');
const PriorityQueue = require('../src/priorityQueue');

describe('Priority Queue Implementation', () => {
  let queue;
  beforeEach('Create new priority queue', () => {
    queue = new PriorityQueue();
  });

  it('Enqueue methods adds to queue in correct order', () => {
    expect(queue.enqueue('Grocery shop', 3).values).to.eql([
      { val: 'Grocery shop', priority: 3 },
    ]);
    expect(queue.enqueue('Walk dog', 1).values).to.eql([
      { val: 'Walk dog', priority: 1 },
      { val: 'Grocery shop', priority: 3 },
    ]);
    expect(queue.enqueue('Workout', 4).values).to.eql([
      { val: 'Walk dog', priority: 1 },
      { val: 'Grocery shop', priority: 3 },
      { val: 'Workout', priority: 4 },
    ]);
    expect(queue.enqueue('Eat breakfast', 2).values).to.eql([
      { val: 'Walk dog', priority: 1 },
      { val: 'Eat breakfast', priority: 2 },
      { val: 'Workout', priority: 4 },
      { val: 'Grocery shop', priority: 3 },
    ]);
  });

  it('Dequeue methods removes highest priority and reorders', () => {
    queue.enqueue('Grocery shop', 3);
    queue.enqueue('Walk dog', 1);
    queue.enqueue('Workout', 4);
    queue.enqueue('Eat breakfast', 2);
    //       Dog/1
    //  Eat/2    Workout/4
    // Shop/3
    expect(queue.dequeue()).to.equal('Walk dog');
    expect(queue.values).to.eql([
      { val: 'Eat breakfast', priority: 2 },
      { val: 'Grocery shop', priority: 3 },
      { val: 'Workout', priority: 4 },
    ]);
    //       Eat/2
    //  Shop/3    Workout/4
    expect(queue.dequeue()).to.equal('Eat breakfast');
    expect(queue.values).to.eql([
      { val: 'Grocery shop', priority: 3 },
      { val: 'Workout', priority: 4 },
    ]);
    //       Shop/3
    //   Workout/4
    expect(queue.dequeue()).to.equal('Grocery shop');
    expect(queue.values).to.eql([{ val: 'Workout', priority: 4 }]);
    //   Workout/4
    expect(queue.dequeue()).to.equal('Workout');
    expect(queue.values).to.eql([]);
    //
    expect(queue.dequeue()).to.equal(undefined);
    expect(queue.values).to.eql([]);
    //
  });
});
