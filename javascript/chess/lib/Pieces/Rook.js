'use strict'

const Piece = load('Core/Piece')
const PieceInitialMove = load('Core/PieceInitialMove')
const Position = load('Core/Position')

class Rook extends PieceInitialMove
{
	constructor(position)
	{
		super(Piece.Types.Rook, position)
	}
	
	validateMove(destination)
	{
		if(!this._initialPosition)
			throw { error: 'No initial position set!' }
		
		let out = false
		if(this.position && destination && destination instanceof Position)
		{
			return (this.position.rank === destination.rank && this.position.file !== destination.file)
				|| (this.position.rank !== destination.rank && this.position.file === destination.file)
		}
		
		return out
	}
}

module.exports = Rook
