'use strict'

const validDimensions = Object.freeze({
	ranks: Object.freeze([1, 2, 3, 4, 5, 6, 7, 8]),
	files: Object.freeze(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])
})

class Position
{
	constructor(rank, file)
	{
		if(validDimensions.ranks.indexOf(rank) < 0)
			throw { error: 'Rank invalid!', rank: rank }
		if(validDimensions.files.indexOf(file) < 0)
			throw { error: 'File invalid!', file: file }
		
		this._rank = rank
		this._file = file
	}
	
	equals(pos)
	{
		return pos
			&& pos instanceof Position
			&& this.rank === pos.rank
			&& this.file === pos.file
	}
	
	get rank() { return this._rank }
	get file() { return this._file }
}

Position.Ranks = validDimensions.ranks
Position.Files = validDimensions.files

module.exports = Position
