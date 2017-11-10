#include <iostream>
#include "calculator.hh"
#include "interaction.hh"
#include "operation.hh"

void doAction(Calculator &calc, Operation &operation)
{
	try
	{
		double operand;
		if(operation.isOperandRequired())
			operand = Interaction::getOperand();
		
		switch(operation.getOperation())
		{
			case Add:
				calc.add(operand);
				break;
			case Subtract:
				calc.sub(operand);
				break;
			case Multiply:
				calc.mult(operand);
				break;
			case Divide:
				calc.div(operand);
				break;
			case Exponent:
				calc.exp(operand);
				break;
			case SquareRoot:
				calc.root();
				break;
			case Reset:
				calc.reset();
				break;
			default:
				break;
		}
		
		Interaction::displayOperation(operation, operand);
	}
	catch(std::invalid_argument ex)
	{
		std::cout << "Invalid operand value!" << std::endl;
	}
}

int main(int argc, char* argv[])
{
	Calculator calc;
	
	Operation operation;
	do
	{
		operation = Interaction::getOperation();
		
		doAction(calc, operation);
		
		Interaction::displayValue(calc.getValue());
	} while(operation.getOperation() != Operations::Quit);
	
	return 0;
}
