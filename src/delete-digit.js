const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	const str = new String(n);
	const arrOfNum = str.split('');

	const deleted = arrOfNum.map((el, i, arr) => {
		const newArr = [...arr];
		delete newArr[i];
		return +newArr.join('')
	})
	return Math.max(...deleted);
}

module.exports = {
  deleteDigit
};
