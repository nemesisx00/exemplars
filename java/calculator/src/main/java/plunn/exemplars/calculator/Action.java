package plunn.exemplars.calculator;

public class Action
{
	private Operation operation;
	private Double operand;
	
	public Action(Operation op, Double oper)
	{
		operation = op;
		operand = oper;
	}
	
	public Operation getOperation()
	{
		return operation;
	}
	
	public Double getOperand()
	{
		return operand;
	}
}
