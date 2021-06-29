const {
  expect
} = require('chai');
const happyNumber = require('../src/happyNumber');

describe('happyNumber', function () {
  it("Is Happy Number (1) ?", () => {
    expect(happyNumber(1)).to.eq(true);
  });

  it("Is Happy Number (2) ?", () => {
    expect(happyNumber(2)).to.eq(false);
  });
  
  it("Is Happy Number (3) ?", () => {
      expect(happyNumber(3)).to.eq(false);
    });

  it("Is Happy Number (319) ?", () => {
    expect(happyNumber(319)).to.eq(true);
  });
});