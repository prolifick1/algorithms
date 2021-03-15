const isValidParentheses = function(s) {
  let stack = [];
  const brackets = new Map([
    ['[', ']'],
    ['{', '}'],
    ['(', ')']
  ]);
  if(!s) {
    return true;
  }

  for(let i = 0; i < s.length; i++) {
    if(brackets.has(s[i])) {
      stack.push(s[i]);
      console.log(`stack: ${stack}`);
    } else {
      let val = stack.pop();
      if (brackets.get(val) !== s[i]) return false;
    }
  }
  return stack.length === 0;
}

module.exports = isValidParentheses;