const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
// соседи i,j  -  [i-1][j-1], [i-1][j], [i-1][j+1], [i][j-1], [i][j], [i][j+1], [i+1][j-1], [i+1][j], [i+1][j+1]
const getNeigboursCount = (row, col, arr) => {
	let count = 0;
	for (let i=row-1; i <= row+1; i++) {  // от строки выше до строки ниже
		for (let j=col-1; j <= col+1; j++) {  // от элемента справа до элемента слева
			if (i === row && j === col) continue;  // пропускаем сам элемент
			if (arr.hasOwnProperty(i) && arr[i].hasOwnProperty(j) && arr[i][j] === true) {
				count++;
			}
		}
	}
	return count;
}


function minesweeper(matrix) {
	// Глубокая копия matrix
	const arr = JSON.parse(JSON.stringify(matrix))

	for (let row=0; row < matrix.length; row++ ) {
		for (let col=0; col < matrix[row].length; col++) {
			const count = getNeigboursCount(row, col, matrix);
			arr[row][col] = count; 
		}
	}
	return arr;
}

module.exports = {
  minesweeper
};
