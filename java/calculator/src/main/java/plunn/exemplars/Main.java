package plunn.exemplars;

import plunn.exemplars.calculator.Action;
import plunn.exemplars.calculator.Calculator;
import plunn.exemplars.ui.InputHandler;
import plunn.exemplars.util.Util;

import java.io.IOException;

public class Main
{
	private static final String displayActionFormat = "Most Recent Action\r\n\tOperation: %s\r\n\tOperand: %s";
	private static final String displayValueFormat = "Current Value: %s";
	private static final String displayQuitFormat = "Final Value: %s\r\nHave a nice day!";
	
	public static void main(String[] args) throws IOException, InterruptedException
	{
		Calculator calc = new Calculator();
		InputHandler ih = new InputHandler();
		
		clearDisplay();
		
		do
		{
			Action action = ih.getAction();
			if(action != null)
			{
				calc.doOperation(action);
			}
			
			clearDisplay();
			displayValue(calc, action, ih.shouldQuit());
		} while(!ih.shouldQuit());
	}
	
	private static void displayValue(Calculator calc, Action action, boolean quit)
	{
		StringBuilder sb = new StringBuilder();
		
		if(!quit)
		{
			if(action != null)
			{
				String operand = "N/A";
				if(action.getOperand() != null)
					operand = action.getOperand().toString();
				sb.append(String.format(displayActionFormat, action.getOperation(), operand));
				sb.append(Util.NewLine);
				sb.append(Util.NewLine);
			}
			
			sb.append(String.format(displayValueFormat, calc.getValue()));
			sb.append(Util.NewLine);
		}
		else
		{
			sb.append(String.format(displayQuitFormat, calc.getValue()));
		}
		
		System.out.println(sb.toString());
	}
	
	private static void clearDisplay() throws IOException, InterruptedException
	{
		if(Util.isWindows())
		{
			new ProcessBuilder("cmd", "/c", "cls").inheritIO().start().waitFor();
		}
		else
		{
			Runtime.getRuntime().exec("clear");
		}
	}
}
