'use strict'

const Piece = load('Core/Piece')

class PieceInitialMove extends Piece
{
	constructor(type, position)
	{
		super(type, position)
		
		this._initialPosition = position
	}
	
	get hasMoved() { return this._initialPosition && this.position && !this._initialPosition.equals(this.position) }
	get position() { return super.position }
	set position(pos)
	{
		let success = (super.position = pos)
		if(!this._initialPosition && success && !super.hasMoved)
			this._initialPosition = pos
		return success
	}
}

module.exports = PieceInitialMove
