
const PieceType = load('Core/PieceType')
const Position = load('Core/Position')

const types = Object.freeze([
	new PieceType('Pawn', 'P'),
	new PieceType('Rook', 'R'),
	new PieceType('Bishop', 'B'),
	new PieceType('Knight', 'N'),
	new PieceType('Queen', 'Q'),
	new PieceType('King', 'K')
])

class Piece
{
	constructor(type, position)
	{
		if(!(type instanceof PieceType) || !types.find(t => t.label === type.label))
			throw { error: 'Invalid type', type: type }
		
		this._position = position instanceof Position ? position : null
		this._type = type
	}
	
	validateMove(destination) { throw { error: 'Method \'validateMove\' not yet implemented!' } }
	
	get label() { return this._type.label }
	get type() { return this._type.abbreviation }
	get position() { return this._position }
	set position(pos)
	{
		let out = pos && pos instanceof Position
		if(out)
			this._position = pos
		return out
	}
}

Piece.Types = Object.freeze({
	Pawn: types[0],
	Rook: types[1],
	Bishop: types[2],
	Knight: types[3],
	Queen: types[4],
	King: types[5]
})

module.exports = Piece
