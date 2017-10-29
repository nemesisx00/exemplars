package plunn.exemplars;

/**
 * A simple calculator, not designed to handle extreme values.
 */
public class Calculator
{
	public enum Operation
	{
		Addition("+"),
		Subtraction("-"),
		Multiplication("*"),
		Division("/"),
		Exponent("^"),
		SquareRoot("sqrt");
		
		private String operator;
		
		Operation(String operator)
		{
			this.operator = operator;
		}
		
		public String operator()
		{
			return operator;
		}
	}
	
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
