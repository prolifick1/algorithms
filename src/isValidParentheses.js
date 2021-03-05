function isValidParentheses(s) {
  if(!s) return true;
  let stack = [];
  const brackets = new Map([
    ['[', ']'],
    ['{', '}'],
    ['(', ')']
  ]);
  for(var i = 0; i < s.length; i++) {
    if(brackets.has(s[i])) {
      stack.push(s[i]);
    } else {
      let char = stack.pop();
      if(brackets.get(char) !== s[i] ) return false;
    }
  }
  if(stack.length !== 0) return false;
  return true;
}

module.exports = isValidParentheses;