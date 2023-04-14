const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let res = '';
	for (let i=0; i < str.length; i++) { i
		let count = 1;
		for (let j=i+1; j < str.length; j++) {
			if (str[j] === str[i]) {
				count++;
				i++;
			} else {
				i = j - 1;
				break;
			}
		}
		res += count > 1 ? `${count}${str[i]}` : str[i];
	}
	return res;
}

module.exports = {
  encodeLine
};
