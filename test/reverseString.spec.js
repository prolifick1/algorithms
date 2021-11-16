let reverse = require('../src/reverseString.js');
let { expect } = require('chai');

describe('#reverse()', function() {
 it('should return a string', function() {
   expect(reverse(['s', 'o', 'm', 'e', ' ', 't', 'e', 'x', 't'])).to.be.a('Array');
 });
  it('handles a reversed string with capital letter', function() {
    expect(reverse(['H', 'a', 'n', 'n', 'a', 'h'])).to.eql(['h','a','n','n','a','H']);
  });
  it('should return a reversed version of the orginal string', function() {
    expect(reverse(['p', 'a', 'r', 'r', 'o', 't', 's'])).to.eql(['s', 't', 'o', 'r', 'r', 'a', 'p']);
  });
  it('handles a single letter', function() {
    expect(reverse(['h'])).to.eql(['h']);
  });
  it('handles empty example', function() {
    expect(reverse([])).to.eql([]);
  });
});
