const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/* date */) {
	if (arguments.length === 0) return 'Unable to determine the time of year!';
	const date = arguments[0];

	// typeof date !== 'Date' // Object
	// date instanceof Date
	// Object.prototype.toString.call(date) !== '[object Date]'
	// date.toTimeString === undefined
	// 'getUTCMinutes' in date.__proto__

	// В оригинальном объекте нет свойства toString, они реализуются через __proto__  
	if (date instanceof Date && date.toTimeString !== undefined && !date.hasOwnProperty('toString')) {
		const month = date.getMonth();
		if (month <= 1 || month >= 11) return 'winter';
		if (month <= 4) return 'spring';
		if (month <= 7) return 'summer';
		if (month <= 10) return 'autumn';
	}
	throw new Error('Invalid date!');
}

module.exports = {
  getSeason
};
