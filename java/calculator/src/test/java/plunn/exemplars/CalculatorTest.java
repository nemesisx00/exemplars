package plunn.exemplars;

import org.junit.jupiter.api.Test;
import plunn.exemplars.calculator.Calculator;

import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest
{
	@Test
	void add()
	{
		double value = 2.0;
		double operand = 3.0;
		double expected = 5.0;
		
		Calculator instance = new Calculator(value);
		instance.add(operand);
		
		assertEquals(expected, instance.getValue());
	}
	
	@Test
	void sub()
	{
		double value = 4.0;
		double operand = 3.0;
		double expected = 1.0;
		
		Calculator instance = new Calculator(value);
		instance.sub(operand);
		
		assertEquals(expected, instance.getValue());
	}
	
	@Test
	void mult()
	{
		double value = 2.0;
		double operand = 4.0;
		double expected = 8.0;
		
		Calculator instance = new Calculator(value);
		instance.mult(operand);
		
		assertEquals(expected, instance.getValue());
	}
	
	@Test
	void div()
	{
		double value = 4.0;
		double operandSuccess = 2.0;
		double operandFailure = 0.0;
		double expectedSuccess = 2.0;
		boolean expectedFailure = true;
		
		Calculator instance = new Calculator(value);
		instance.div(operandSuccess);
		
		assertEquals(expectedSuccess, instance.getValue());
		
		instance.div(operandFailure);
		assertEquals(expectedFailure, instance.isError());
	}
	
	@Test
	void exp()
	{
		double value = 2.0;
		double expected = 8.0;
		
		Calculator instance = new Calculator(value);
		instance.exp(3.0);
		
		assertEquals(expected, instance.getValue());
	}
	
	@Test
	void sqrt()
	{
		double value = 4.0;
		double expected = 2.0;
		
		Calculator instance = new Calculator(value);
		instance.sqrt();
		
		assertEquals(expected, instance.getValue());
	}
	
	@Test
	void reset()
	{
		double value = 5.0;
		double expected = 0.0;
		
		Calculator instance = new Calculator(value);
		instance.reset();
		
		assertEquals(expected, instance.getValue());
	}
}
