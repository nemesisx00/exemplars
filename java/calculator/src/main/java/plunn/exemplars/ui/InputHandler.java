package plunn.exemplars.ui;

import plunn.exemplars.calculator.Action;
import plunn.exemplars.calculator.Operation;
import plunn.exemplars.util.Util;

import java.util.Arrays;
import java.util.InputMismatchException;
import java.util.Iterator;
import java.util.Scanner;

public class InputHandler
{
	public enum Choice
	{
		Add("1"),
		Subtract("2"),
		Multiply("3"),
		Divide("4"),
		Exponent("5"),
		Root("6"),
		Reset("r"),
		Quit("q");
		
		public static Choice getByValue(String value)
		{
			return Arrays.stream(values())
				.filter(choice -> choice.value.equals(value))
				.findFirst()
				.orElse(null);
		}
		
		private static final String nameValueSeparator = ": ";
		
		public String value;
		
		Choice(String value)
		{
			this.value = value;
		}
		
		@Override
		public String toString()
		{
			StringBuilder sb = new StringBuilder();
			sb.append(value.toUpperCase());
			sb.append(nameValueSeparator);
			sb.append(name());
			return sb.toString();
		}
	}
	
	private static final String defaultPrompt = "Choose an action:";
	private static final String operandPrompt = "Enter the operand:";
	private static final String errorPrompt = "Error - %s";
	private static final String errorNumber = "Input is not a valid number: %s";
	
	private boolean quit;
	private String actionPrompt;
	
	public InputHandler()
	{
		quit = false;
		
		StringBuilder sb = new StringBuilder();
		sb.append(defaultPrompt);
		sb.append(Util.NewLine);
		
		Iterator<Choice> it = Arrays.asList(Choice.values()).iterator();
		while(it.hasNext())
		{
			sb.append(Util.Tab);
			sb.append(it.next());
			sb.append(Util.NewLine);
		}
		
		actionPrompt = sb.toString();
	}
	
	public boolean shouldQuit()
	{
		return quit;
	}
	
	public Action getAction()
	{
		Choice choice = getChoice();
		Action out = null;
		
		switch(choice)
		{
			case Quit:
				quit = true;
				break;
			case Reset:
			case Root:
				out = new Action(Operation.valueOf(choice.name()), null);
				break;
			case Add:
			case Subtract:
			case Multiply:
			case Divide:
			case Exponent:
				Double operand = getOperand();
				if(operand != null)
					out = new Action(Operation.valueOf(choice.name()), operand);
				break;
			default:
				break;
		}
		
		return out;
	}
	
	private void displayError(String message)
	{
		System.out.println(Util.NewLine + String.format(errorPrompt, message) + Util.NewLine);
	}
	
	private Choice getChoice()
	{
		Scanner input = new Scanner(System.in);
		System.out.println(actionPrompt);
		String choice = input.next();
		
		return Choice.getByValue(choice.toLowerCase());
	}
	
	private Double getOperand()
	{
		Scanner input = new Scanner(System.in);
		System.out.println(operandPrompt);
		Double operand = null;
		try
		{
			operand = input.nextDouble();
		}
		catch(InputMismatchException ex)
		{
			//If it's not a valid number, then just leave operand as null
			displayError(String.format(errorNumber, input.next()));
		}
		
		return operand;
	}
}
