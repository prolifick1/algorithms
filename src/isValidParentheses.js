const isValidParentheses = function (s) {
  let stack = [];
  let brackets = new Map([
    ['[', ']'],
    ['(', ')'],
    ['{', '}']
  ]);
  for(let i = 0; i < s.length; i++) {
    if(brackets.has(s[i])) {
      stack.push(s[i]);
    } else {
      let newVal = stack.pop();
      if(brackets.get(newVal) != s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}


module.exports = isValidParentheses;