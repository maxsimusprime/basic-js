const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	s1 = s1.split('');
	s2 = s2.split('');
	let count = 0;

	// Убираю дубли по первому indexOf = текущему индексу
	// s1 = s1.filter((el, i, arr) => arr.indexOf(el) === i );

	// Проверяю опять по indexOf со вторым массивом
	for (let i=0; i < s1.length; i++) {
		let foundedIndx = s2.indexOf(s1[i]); foundedIndx
		if (foundedIndx !== -1) {
			count++; 
			delete s2[foundedIndx];
		}
	}
	return count;
}

module.exports = {
  getCommonCharacterCount
};
