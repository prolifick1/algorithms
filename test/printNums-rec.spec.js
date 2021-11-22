let chai = require('chai');
let expect = chai.expect;
let spyWrapper = require('../src/printNums-rec.js');
let sinon = require('sinon');
let sinonChai = require('sinon-chai');
chai.use(sinonChai);

describe('#printNums', function() {
  afterEach(function() {
    sinon.restore();
  });
  it('is a function', function() {
    expect(spyWrapper.printNums).to.be.a('Function');
  });
  it('accepts only 1 argument', function() {
    expect(spyWrapper.printNums.length).to.equal(1);
  });
  it('recursively calls n times', function() { 
    sinon.spy(console, 'log'); 

    spyWrapper.printNums(5);
    expect(console.log).to.have.been.calledWith(5);
    expect(console.log).to.have.been.calledWith(4);
    expect(console.log).to.have.been.calledWith(3);
    expect(console.log).to.have.been.calledWith(2);
    expect(console.log).to.have.been.calledWith(1);
    
  });
});
