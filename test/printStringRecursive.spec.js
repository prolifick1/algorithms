let spyWrapper = require('../src/printStringRecursive.js');

let chai = require('chai');
let sinon = require('sinon');
let sinonChai = require("sinon-chai");
let expect = chai.expect;
chai.use(sinonChai);

describe('printStrignRecursive()', function() {
  it('recursively prints out all the characters passed in a string', function() {
    sinon.spy(console, 'log');

    spyWrapper.printString('pizza');
    expect(console.log).to.have.been.calledWith('p');
    expect(console.log).to.have.been.calledWith('i');
    expect(console.log).to.have.been.calledWith('z');
    expect(console.log).to.have.been.calledWith('z');
    expect(console.log).to.have.been.calledWith('a');    
  });
  it('recurses calling itself once for each letter in the string', function() {

    let printSpy = sinon.spy(spyWrapper, 'printString');
    printSpy('pizza');

    expect(printSpy.callCount).to.equal(5);
  });
});
