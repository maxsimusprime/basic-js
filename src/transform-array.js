const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");
	const transformed = [...arr];

	const nav = {
		'--discard-next': function(i, arr) { if (arr[i+1]) arr.splice(i+1, 1) },
		'--discard-prev': function(i, arr) { arr[i-1] ? arr.splice(i-1, 2) : arr.splice(i, 1)},  // +
		'--double-next': function(i, arr) { arr[i+1] ? arr.splice(i, 1, arr[i+1]) : arr.splice(i, 1) },  // +
		'--double-prev': function(i, arr) { arr[i-1] ? arr.splice(i, 1, arr[i-1]) : arr.splice(i, 1) } // +
	}


	let i = 0;
	for (let i=0; i < arr.length; i++) {
		if ( arr[i] in nav) {
			i;
			nav[arr[i]](i, transformed)
		}
	}
	return transformed;
}

module.exports = {
  transform
};
