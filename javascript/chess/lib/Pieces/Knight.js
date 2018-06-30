'use strict'

const Piece = load('Core/Piece')
const Position = load('Core/Position')
const Util = load('Util')

class Rook extends Piece
{
	constructor(position)
	{
		super(Piece.Types.Rook, position)
	}
	
	validateMove(destination)
	{
		let out = false
		if(this.position && destination && destination instanceof Position)
		{
			let rankDistance = Util.numericDistance(this.position.rank, destination.rank)
			let fileDistance = Util.numericDistance(Position.Files.indexOf(this.position.file), Position.Files.indexOf(destination.file))
			
			return (rankDistance === 1 && fileDistance === 2) || (rankDistance === 2 && fileDistance === 1)
		}
		
		return out
	}
}

module.exports = Rook
