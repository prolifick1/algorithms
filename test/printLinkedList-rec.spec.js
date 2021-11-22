let chai = require('chai');
let spyWrapper = require('../src/printLinkedList-rec.js');
let expect = chai.expect;
let sinonChai = require('sinon-chai');
let sinon = require('sinon');
chai.use(sinonChai);
let { arrayToLinkedList, linkedListToArray } = require('./utils');

describe('#printList', function() {
  afterEach(function() {
    sinon.restore();
  });
  it('is called recursively', function() {
    sinon.spy(console, "log");
    spyWrapper.printList(arrayToLinkedList([1, 2, 3, 4]));

    expect(console.log).to.have.been.calledWith(1);
    expect(console.log).to.have.been.calledWith(2);
    expect(console.log).to.have.been.calledWith(3); 
    expect(console.log).to.have.been.calledWith(4);
  });
  it('is recursively called 4 times given [1,2,3,4]', function() {
    let printSpy = sinon.spy(spyWrapper, 'printList');
    printSpy(arrayToLinkedList([1, 2, 3, 4]));

    expect(printSpy.callCount).to.equal(4);
  });
});

