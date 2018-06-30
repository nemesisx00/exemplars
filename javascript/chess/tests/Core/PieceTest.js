'use strict'

require('../../init.js')

const test = require('tape')
const Piece = load('Core/Piece')

test('Testing Piece.label', t => {
	let piece = new Piece(Piece.Types.Pawn)
	t.equal(piece.label, Piece.Types.Pawn.label, `Piece's type label is '${Piece.Types.Pawn.label}'!`)
	t.end()
})

test('Testing Piece.type', t => {
	let piece = new Piece(Piece.Types.Pawn)
	t.equal(piece.type, Piece.Types.Pawn.abbreviation, `Piece's type abbreviation is '${Piece.Types.Pawn.abbreviation}'!`)
	t.end()
})
