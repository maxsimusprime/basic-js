const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
	const members = arguments[0];
	if (!Array.isArray(members)) return false; // check is Array
	return members
	.filter(el => typeof el === 'string')  // filter not string
	.map(el => el.trim())  // delete probels witespaces
	.map(el => el[0].toUpperCase())  // first letter in upper case
	.sort()  // sortiruem po rostu
	.join('')  // joinim vmeste
}

module.exports = {
  createDreamTeam
};
