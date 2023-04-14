const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(str) {
	if (str.length !== 17 ) return false;

	const separated = str.split('-');
	if (separated.length !== 6) return false;

	let i = 0;
	while (i < separated.length) {
		if (separated[i].length !== 2) return false;
		const num =  Number(`0x${separated[i]}`);
		if (Number.isNaN(num)) return false;
		i++;
	}
	return true;
}
module.exports = {
  isMAC48Address
};
