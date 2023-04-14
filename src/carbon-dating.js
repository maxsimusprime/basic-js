const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(/* sampleActivity */) {
	if (arguments.length === 0 || typeof arguments[0] !== 'string') return false;

	const sampleActivity = Number(arguments[0]);
	if (isNaN(sampleActivity)) return false;
	if (sampleActivity > 15 || sampleActivity <= 0) return false;

	const LN2 = 0.693;  // логарифм от 2 
	const age = Math.log(sampleActivity / MODERN_ACTIVITY) / (LN2 / HALF_LIFE_PERIOD);

	return Math.ceil(Math.abs(age));
// https://www.youtube.com/watch?v=ZG4ul30mH5w&list=PLxGo9dxQkqWA-SD1lyrtltt8KxfLk9z4f&index=22
}

module.exports = {
  dateSample
};
