const isValidParentheses = function (s) {
 	let parens = new Map([
		['[',']'],
		['(',')'],
		['{','}']
	]);
	let stack = [];
	for(let  i = 0; i < s.length; i++) {
		if(parens.has(s[i])) {
			stack.push(s[i]);
		} else {
			let leftParens = stack.pop();
			if(parens.get(leftParens) !== s[i]) {
				return false;
			};
		};
	};
	return stack.length === 0;
}


module.exports = isValidParentheses;
