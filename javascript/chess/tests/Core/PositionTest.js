'use strict'

require('../../init.js')

const test = require('tape')
const Position = load('Core/Position')

test('Testing Position.equals', t => {
	let pos1 = new Position(1, 'a')
	let pos2 = new Position(1, 'a')
	let pos3 = new Position(2, 'a')
	let pos4 = new Position(1, 'b')
	
	t.ok(pos1.equals(pos2), 'Positions with equal rank and file are equal')
	t.ok(pos2.equals(pos1), 'Equality is atomic')
	t.notOk(pos1.equals(pos3), 'Positions with different ranks are not equal')
	t.notOk(pos1.equals(pos4), 'Positions with different files are not equal')
	t.end()
})
