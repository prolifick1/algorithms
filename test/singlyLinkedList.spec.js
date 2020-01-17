const { expect } = require('chai');
const SinglyLinked = require('../src/singlyLinkedList');

describe('Singly Linked List Data Structure', () => {
  let list;

  beforeEach('create new singly linked list', () => {
    list = new SinglyLinked();
  });

  it('Push method adds nodes to tail of list', () => {
    list.push(20);
    expect(list.head.val).to.equal(20);
    expect(list.tail.val).to.equal(20);
    list.push(40);
    expect(list.head.val).to.equal(20);
    expect(list.tail.val).to.equal(40);
    list.push(80);
    expect(list.head.val).to.equal(20);
    expect(list.tail.val).to.equal(80);
  });

  it('Pop method remove nodes from tail of list', () => {
    list.push('a');
    list.push('b');
    list.push('c');
    expect(list.head.val).to.equal('a');
    expect(list.tail.val).to.equal('c');
    expect(list.pop()).to.eql({ val: 'c', next: null });
    expect(list.head.val).to.equal('a');
    expect(list.tail.val).to.equal('b');
    expect(list.pop()).to.eql({ val: 'b', next: null });
    expect(list.head.val).to.equal('a');
    expect(list.tail.val).to.equal('a');
    expect(list.pop()).to.eql({ val: 'a', next: null });
    expect(list.head).to.equal(null);
    expect(list.tail).to.equal(null);
  });

  it('Unshift method adds nodes to tail of list', () => {
    list.unshift('one');
    expect(list.head.val).to.equal('one');
    expect(list.tail.val).to.equal('one');
    list.unshift('two');
    expect(list.head.val).to.equal('two');
    expect(list.tail.val).to.equal('one');
    list.unshift('three');
    expect(list.head.val).to.equal('three');
    expect(list.tail.val).to.equal('one');
  });

  it('Shift method removes nodes from tail of list', () => {
    list.unshift('car');
    list.unshift('truck');
    list.unshift('bike');
    expect(list.head.val).to.equal('bike');
    expect(list.tail.val).to.equal('car');
    expect(list.shift().val).to.eql('bike');
    expect(list.head.val).to.equal('truck');
    expect(list.tail.val).to.equal('car');
    expect(list.shift().val).to.eql('truck');
    expect(list.head.val).to.equal('car');
    expect(list.tail.val).to.equal('car');
    expect(list.shift().val).to.eql('car');
    expect(list.head).to.equal(null);
    expect(list.tail).to.equal(null);
  });

  it('Get method returns node at idx', () => {
    list.unshift('four');
    list.unshift('five');
    list.unshift('six');
    expect(list.get(0).val).to.equal('six');
    expect(list.get(1).val).to.equal('five');
    expect(list.get(2).val).to.equal('four');
    expect(list.get(-1)).to.equal(undefined);
    expect(list.get(10)).to.equal(undefined);
  });

  it('Set method changes value of node at idx', () => {
    list.unshift('four');
    list.unshift('five');
    list.unshift('six');
    expect(list.set(0, 'one')).to.equal(true);
    expect(list.set(1, 'two')).to.equal(true);
    expect(list.set(2, 'three')).to.equal(true);
    expect(list.set(-1, 'hello')).to.equal(false);
    expect(list.set(10, 'world')).to.equal(false);
    expect(list.get(0).val).to.equal('one');
    expect(list.get(1).val).to.equal('two');
    expect(list.get(2).val).to.equal('three');
  });

  it('Insert method adds nodes at idx', () => {
    list.push('blanket');
    list.push('pillow');
    list.push('sheets');
    expect(list.insert(3, 'duvet')).to.equal(true);
    expect(list.tail.val).to.equal('duvet');
    expect(list.insert(0, 'rug')).to.equal(true);
    expect(list.head.val).to.equal('rug');
  });

  it('Remmove method removes nodes at idx', () => {
    list.push('book');
    list.push('pencil');
    list.push('paper');
  });

  it('Reverse method reverses the list', () => {
    list.push('first');
    list.push('second');
    list.push('third');
    expect(list.reverse().head).to.eql({
      val: 'third',
      next: { val: 'second', next: { val: 'first', next: null } },
    });
    expect(list.reverse().head).to.eql({
      val: 'first',
      next: { val: 'second', next: { val: 'third', next: null } },
    });
  });
});
