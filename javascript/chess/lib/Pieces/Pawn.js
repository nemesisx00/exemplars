'use strict'

const Piece = load('Core/Piece')
const PieceInitialMove = load('Core/PieceInitialMove')
const Position = load('Core/Position')
const Util = load('Util')

class Pawn extends PieceInitialMove
{
	constructor(position)
	{
		super(Piece.Types.Pawn, position)
	}
	
	validateMove(destination)
	{
		if(!this._initialPosition)
			throw { error: 'No initial position set!' }
		
		let out = false
		if(this.position && destination && destination instanceof Position)
		{
			let intensity = 1
			if(!this.hasMoved)
				intensity = 2
			
			let distance1 = this.position.rank - destination.rank
			let distance2 = destination.rank - this.position.rank
			
			let rankLogic = (this._initialPosition.rank > destination.rank && distance1 > 0 && distance1 <= intensity)
					|| (this._initialPosition.rank < destination.rank && distance2 > 0 && distance2 <= intensity)
			
			if(this.position.file === destination.file)
				out = rankLogic
			else
			{
				let distance = Util.numericDistance(Position.Files.indexOf(this.position.file), Position.Files.indexOf(destination.file))
				if(distance === 1)
					out = rankLogic
			}
		}
		
		return out
	}
}

module.exports = Pawn
