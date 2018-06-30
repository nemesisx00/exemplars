'use strict'

class PieceType
{
	constructor(label, abbreviation)
	{
		this._label = label
		this._abbreviation = abbreviation
	}
	
	get label() { return this._label }
	get abbreviation() { return this._abbreviation }
}

module.exports = PieceType
