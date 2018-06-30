'use strict'

require('../../init.js')

const test = require('tape')
const Pawn = load('Pieces/Pawn')
const Position = load('Core/Position')

const data = [
	{
		direction: '1 to 8',
		init: new Position(2, 'a'),
		first: new Position(4, 'a'),
		second: new Position(6, 'a'),
		backwards: new Position(3, 'a'),
		attack: new Position(5, 'b'),
		attackFail: new Position(6, 'c')
	},
	{
		direction: '8 to 1',
		init: new Position(7, 'c'),
		first: new Position(5, 'c'),
		second: new Position(3, 'c'),
		backwards: new Position(6, 'c'),
		attack: new Position(4, 'b'),
		attackFail: new Position(3, 'a')
	}
]

test('Testing Pawn.validateMove', t => {
	data.forEach(positions => {
		let pawn = new Pawn(positions.init)
		t.comment(`Direction: ${positions.direction}`)
		t.notOk(pawn.hasMoved && pawn.position, 'Pawn has an initial position and has not moved')
		t.ok(pawn.validateMove(positions.first), 'Pawn can move forward twice on its first move')
		pawn.position = positions.first
		t.notOk(pawn.validateMove(positions.second), 'Pawn can not move forward twice after its first move')
		t.notOk(pawn.validateMove(positions.backwards), 'Pawn can not move backwards')
		t.ok(pawn.validateMove(positions.attack), 'Pawn can move diagonally to attack')
		t.notOk(pawn.validateMove(positions.attackFail), 'Pawn can only move 1 space diagonally to attack')
	})
	t.end()
})
