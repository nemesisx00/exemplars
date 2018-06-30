'use strict'

require('../../init.js')

const test = require('tape')
const Piece = load('Core/Piece')
const PieceInitialMove = load('Core/PieceInitialMove')
const Position = load('Core/Position')

test('Testing PieceInitialMove set position', t => {
	let pos1 = new Position(1, 'a')
	let pos2 = new Position(2, 'a')
	//Start with no initial position
	let piece = new PieceInitialMove(Piece.Types.Pawn)
	
	t.notOk(piece.hasMoved, 'Piece has not moved yet')
	piece.position = pos1
	t.notOk(piece.hasMoved, 'Piece now has a position but has not moved')
	piece.position = pos2
	t.ok(piece.hasMoved, 'Piece has now moved')
	t.end()
})
