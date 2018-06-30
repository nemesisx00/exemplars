'use strict'

require('../../init.js')

const test = require('tape')
const Rook = load('Pieces/Rook')
const Position = load('Core/Position')

const data = [
	{
		init: new Position(4, 'd'),
		left: new Position(4, 'a'),
		right: new Position(4, 'f'),
		forward: new Position(6, 'd'),
		backward: new Position(1, 'd'),
		diag1: new Position(3, 'c'),
		diag2: new Position(8, 'g')
	}
]

test('Testing Rook.validateMove', t => {
	data.forEach(positions => {
		let rook = new Rook(positions.init)
		t.ok(!rook.hasMoved && rook.position, 'Rook has an initial position and has not moved')
		t.ok(rook.validateMove(positions.left), 'Rook can move left')
		t.ok(rook.validateMove(positions.right), 'Rook can move right')
		t.ok(rook.validateMove(positions.forward), 'Rook can move forward')
		t.ok(rook.validateMove(positions.backward), 'Rook can move backward')
		t.notOk(rook.validateMove(positions.diag1), 'Rook cannot move diagonally')
		t.notOk(rook.validateMove(positions.diag2), 'Rook cannot move diagonally, regardless of distance')
	})
	t.end()
})
