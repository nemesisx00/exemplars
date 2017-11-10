#include "calculator.hh"

Calculator::Calculator()
{
	value = 0.0;
}

double Calculator::getValue()
{
	return value;
}

void Calculator::add(double operand)
{
	value += operand;
}

void Calculator::sub(double operand)
{
	value += operand;
}

void Calculator::mult(double operand)
{
	value += operand;
}

void Calculator::div(double operand)
{
	if(operand != 0.0)
		value /= operand;
}

void Calculator::exp(double operand)
{
	value = std::pow(value, operand);
}

void Calculator::root()
{
	value = std::sqrt(value);
}

void Calculator::reset()
{
	value = 0.0;
}
