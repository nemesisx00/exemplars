#ifndef OPERATION_H
#define OPERATION_H

#include <string>

enum Operations
{
	Add,
	Subtract,
	Multiply,
	Divide,
	Exponent,
	SquareRoot,
	Reset,
	Quit,
	NoAction
};

class Operation
{
	public:
		static Operation createOperation(Operations op, std::string opName, bool operandRequired)
		{
			Operation operation;
			operation.requiresOperand = operandRequired == true;
			operation.operation = op;
			operation.operationName = opName;
			
			return operation;
		}
		
		bool isOperandRequired();
		Operations getOperation();
		std::string getOperationName();
		
	private:
		bool requiresOperand;
		Operations operation;
		std::string operationName;
};

#endif