package plunn.exemplars.calculator;

import plunn.exemplars.calculator.Action;
import plunn.exemplars.calculator.Operation;

/**
 * A simple calculator, not designed to handle extreme values.
 */
public class Calculator
{
	private static final double DefaultValue = 0.0;
	
	private double value;
	private boolean error;
	
	public Calculator()
	{
		this(DefaultValue);
	}
	
	public Calculator(double value)
	{
		error = false;
		this.value = value;
	}
	
	public boolean isError()
	{
		return error;
	}
	
	public double getValue()
	{
		return value;
	}
	
	public boolean doOperation(Action action)
	{
		return doOperation(action.getOperation(), action.getOperand());
	}
	
	public boolean doOperation(Operation operation, Double operand)
	{
		boolean out = true;
		switch(operation)
		{
			case Add:
				out = operand != null;
				if(operand != null)
					add(operand);
				break;
			case Subtract:
				out = operand != null;
				if(operand != null)
					sub(operand);
				break;
			case Multiply:
				out = operand != null;
				if(operand != null)
					mult(operand);
				break;
			case Divide:
				out = operand != null;
				if(operand != null)
					div(operand);
				break;
			case Exponent:
				out = operand != null;
				if(operand != null)
					exp(operand);
				break;
			case Root:
				sqrt();
				break;
			case Reset:
				reset();
				break;
			default:
				out = false;
				break;
		}
		
		return out;
	}
	
	public void add(double operand)
	{
		value += operand;
	}
	
	public void sub(double operand)
	{
		value -= operand;
	}
	
	public void mult(double operand)
	{
		value *= operand;
	}
	
	public void div(double operand)
	{
		if(operand != 0.0)
			value /= operand;
		else
			error = true;
	}
	
	public void exp(double exponent)
	{
		value = Math.pow(value, exponent);
	}
	
	public void sqrt()
	{
		value = Math.sqrt(value);
	}
	
	public void reset()
	{
		error = Boolean.FALSE;
		value = DefaultValue;
	}
}
