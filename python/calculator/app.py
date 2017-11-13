import calculator
import ui


def loopLogic(calc):
	action = ui.getAction()

	operation = None
	operand = None

	if action is not None:
		operation = action[1]

		if action[2] == True:
			operand = ui.getOperand()
			if operand is not None:
				calc.doAction(operation, operand)
		else:
			calc.doAction(operation)

	ui.displayValue(calc.value, operation, operand)

	return action is None or operation.lower() != 'quit'


def main():
	calc = calculator.Calculator()

	keepGoing = loopLogic(calc)
	while keepGoing == True:
		keepGoing = loopLogic(calc)

	print('\r\nHave a nice day!\r\n')


if __name__ == "__main__":
	main()
