'use strict'

class Util
{
	/**
	 * Find the numeric distance between two numbers.
	 * Numeric distance is defined as the absolute value of the difference of two numbers.
	 * @param {number} a One of the numbers.
	 * @param {number} b One of the numbers.
	 * @return {number} Returns the absolute value of a minus b.
	 */
	static numericDistance(a, b)
	{
		return Math.abs(a - b)
	}
}

module.exports = Util
