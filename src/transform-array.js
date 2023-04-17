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
	const transformed = [];

	let isPreviousDiscared= false;
	let isDoubleNext = false;
	let isDiscardNext = false;

	for (let el of arr) {
		switch (el) {

			case '--discard-next':
				isDiscardNext = true; // --discard-next было выполнено
				break;

			case '--double-next':
				isDoubleNext = true;
				break;

			case '--discard-prev':
				// Если предыдущая команда не --discard-next
				if (transformed.length > 0 && !isPreviousDiscared) {
					transformed.pop();
					isPreviousDiscared = false;
				}
				break;

			case '--double-prev':
				// Если предыдущая команда не --discard-next
				if (transformed.length > 0 && !isPreviousDiscared) {
					transformed.push(transformed[transformed.length - 1]);
					isPreviousDiscared= false;
				}
				break;

			default:
				if (isDiscardNext) {
					isDiscardNext = false;
					// было удалено
					isPreviousDiscared= true;
					break;
				}
				// Сброс --discard-next
				isPreviousDiscared= false;
				transformed.push(el)
				if (isDoubleNext) {
					// Сброс --double-next
					isDoubleNext = false;
					transformed.push(el);
				}
		}
	}
	return transformed;
}

module.exports = {
  transform
};
