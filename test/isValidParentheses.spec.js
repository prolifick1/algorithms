const isValidParentheses = require('../src/isValidParentheses.js');
const {
  expect
} = require('chai');


describe('isValidParentheses', () => {
  it('returns true for \(\)', () => {
    expect(isValidParentheses('()')).to.equal(true);
  });
  it('returns true for \(\)\[\]\{\}', () => {
    expect(isValidParentheses('()[]{}')).to.equal(true);
  });
  it('returns true for \(\]', () => {
    expect(isValidParentheses('(]')).to.equal(false);
  });
  it('returns true for \(\[\)\]', () => {
    expect(isValidParentheses('([)]')).to.equal(false);
  });
  it('returns true for \{\[\]\}', () => {
    expect(isValidParentheses('{[]}')).to.equal(true);
  });
});