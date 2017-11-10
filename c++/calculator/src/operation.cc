#include "operation.hh"

bool Operation::isOperandRequired()
{
	return requiresOperand;
}

Operations Operation::getOperation()
{
	return operation;
}

std::string Operation::getOperationName()
{
	return operationName;
}
