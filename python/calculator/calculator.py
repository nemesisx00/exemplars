import math


class Calculator:
	def __init__(self):
		self.reset()

	def doAction(self, choice, operand=None):
		if choice == 'Add':
			self.add(operand)
		elif choice == 'Subtract':
			self.sub(operand)
		elif choice == 'Multiply':
			self.mult(operand)
		elif choice == 'Divide':
			self.div(operand)
		elif choice == 'Exponent':
			self.exp(operand)
		elif choice == 'Square Root':
			self.root()
		elif choice == 'Reset':
			self.reset()

		return self.value

	def add(self, operand):
		self.value += operand
		return self

	def sub(self, operand):
		self.value -= operand
		return self

	def mult(self, operand):
		self.value *= operand
		return self

	def div(self, operand):
		if operand != 0.0:
			self.value /= operand
		return self

	def exp(self, operand):
		self.value **= operand
		return self

	def root(self):
		self.value = math.sqrt(self.value)
		return self

	def reset(self):
		self.value = 0.0
		return self
