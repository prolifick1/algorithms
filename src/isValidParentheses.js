let isValidParentheses = function(str) {
  let brackets = new Map([
    ['{', '}'],
    ['(', ')'],
    ['[', ']']
  ]);
  let stack = [];
  for(let i = 0; i < str.length; i++) {
    if(brackets.has(str[i])) {
      stack.push(str[i]);
    } else {
      let leftBracket = stack.pop();
      if(brackets.get(leftBracket) !== str[i]) {
	return false;
      }
    }
  }
  return stack.length === 0;
    
}

module.exports = isValidParentheses;
