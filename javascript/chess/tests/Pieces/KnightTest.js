'use strict'

require('../../init.js')

const test = require('tape')
const Knight = load('Pieces/Knight')
const Position = load('Core/Position')

const data = [
	{
		init: new Position(4, 'd'),
		valid: [
			new Position(2, 'c'),
			new Position(6, 'c'),
			new Position(3, 'b'),
			new Position(3, 'f'),
			new Position(5, 'b'),
			new Position(5, 'f'),
			new Position(2, 'e'),
			new Position(6, 'e')
		],
		fail: [
			new Position(3, 'c'),
			new Position(4, 'f'),
			new Position(7, 'd')
		]
	}
]

test('Testing Knight.validateMove', t => {
	data.forEach(positions => {
		let knight = new Knight(positions.init)
		t.ok(!knight.hasMoved && knight.position, 'Knight has an initial position and has not moved')
		
		let valid = true
		positions.valid.forEach(validMove => { valid = valid && knight.validateMove(validMove) })
		t.ok(valid, 'Valid Knight moves are valid')
		
		let fail = []
		positions.fail.forEach(failMove => fail.push(knight.validateMove(failMove)))
		t.notOk(fail.find(v => v === true), 'Invalid Knight moves are invalid')
	})
	t.end()
})
