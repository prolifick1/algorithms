const { expect } = require('chai');
const longestValidParentheses = require('../src/longestValidParentheses');

describe('Find the length of the longest valid (well-formed) parentheses substring', () => {
  it('Test case #1 - (()', () => {
    expect(longestValidParentheses('(()')).to.equal(2);
  });

  it('Test case #2 - )()())', () => {
    expect(longestValidParentheses(')()())')).to.equal(4);
  });

  it('Test case #3 - ((', () => {
    expect(longestValidParentheses('((')).to.equal(0);
  });

  it('Test case #4 - ()(()', () => {
    expect(longestValidParentheses('()(()')).to.equal(2);
  });

  it('Test case #5 - (()())', () => {
    expect(longestValidParentheses('(()())')).to.equal(6);
  });

  it('Test case #6 - ()(())', () => {
    expect(longestValidParentheses('()(())')).to.equal(6);
  });
});
