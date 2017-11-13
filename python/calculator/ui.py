actions = [
	('1', 'Add', True),
	('2', 'Subtract', True),
	('3', 'Multiply', True),
	('4', 'Divide', True),
	('5', 'Exponent', True),
	('6', 'Square Root', False),
	('R', 'Reset', False),
	('Q', 'Quit', False)
]

menuFormat = '{}: {}\t\t{}: {}\r\n{}: {}\t{}: {}\r\n{}: {}\t{}: {}\r\n{}: {}\t{}: {}\r\n'
valueFormat = '\r\n\tOperation: {}\r\n\tOperand: {}\r\n\r\nValue: {}\r\n'

def displayMenu():
	#There's probably a more elegant way to handle this but it's good enough for now
	print(menuFormat.format(
		actions[0][0], actions[0][1], actions[4][0], actions[4][1],
		actions[1][0], actions[1][1], actions[5][0], actions[5][1],
		actions[2][0], actions[2][1], actions[6][0], actions[6][1],
		actions[3][0], actions[3][1], actions[7][0], actions[7][1]
	))


def displayValue(value, operation, operand):

	op = None
	if operation is not None:
		op = operation

	oper = None
	if operand is not None:
		oper = operand

	print(valueFormat.format(op, oper, value))


def getAction():
	displayMenu()

	inString = input('Choose an action: ')
	action = [item for item in actions if item[0] == inString[0].upper()]

	if len(action) > 0:
		action = action[0]
	else:
		action = None

	return action


def getOperand():
	inString = input('--> ')

	operand = None
	try:
		operand = float(inString)
	except:
		print('\r\nError: "' + inString + '" is not a number')

	return operand
