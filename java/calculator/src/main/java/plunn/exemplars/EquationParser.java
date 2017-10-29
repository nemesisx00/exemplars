package plunn.exemplars;

import java.util.Map;
import java.util.regex.Pattern;

public class EquationParser
{
	private static final Pattern subscopePattern = Pattern.compile("(\\([^\\\\(\\\\)]*?\\))");
	private static final Pattern equationSplit = Pattern.compile("/([\\\\+\\\\-\\\\*\\\\/]?.*?[\\d\\\\.]+)/");
	
	private Calculator calc;
	
	public EquationParser(Calculator calc)
	{
		this.calc = calc;
	}
	
	public void parse(String equation)
	{
	
	}
	
	private Map<Calculator.Operation, Double> extractOperations(String equation)
	{
		return null;
	}
}
