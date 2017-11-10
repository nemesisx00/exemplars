#ifndef INTERACTION_H
#define INTERACTION_H

#include <iostream>
#include <memory>
#include <string>
#include "operation.hh"

class Interaction
{
	public:
		static double getOperand()
		{
			std::cout << std::endl << "Enter the operand: ";
			
			std::string operand;
			std::cin >> operand;
			
			return std::stod(operand);
		}
		
		static Operation getOperation()
		{
			Operations operation = getChoice();
			
			bool operandRequired;
			switch(operation)
			{
				case Add:
				case Subtract:
				case Multiply:
				case Divide:
				case Exponent:
					operandRequired = true;
					break;
				default:
					operandRequired = false;
					break;
			}
			
			return Operation::createOperation(operation, getOperationName(operation), operandRequired);
		}
		
		static void displayOperation(Operation &operation, double operand)
		{
			std::cout << "\tOperation: " << operation.getOperationName() << std::endl;
			if(operation.isOperandRequired())
				std::cout << "\tOperand: " << operand << std::endl;
		}
		
		static void displayValue(double value)
		{
			std::cout << "\r\nValue: " << value << std::endl << std::endl;
		}
		
	private:
		const static std::string MenuPrompt;
		
		const static std::string Choice_Add;
		const static std::string Choice_Subtract;
		const static std::string Choice_Multiply;
		const static std::string Choice_Divide;
		const static std::string Choice_Exponent;
		const static std::string Choice_Root;
		const static std::string Choice_Reset;
		const static std::string Choice_Reset_Lower;
		const static std::string Choice_Quit;
		const static std::string Choice_Quit_Lower;
		
		static Operations getChoice()
		{
			std::cout << Interaction::MenuPrompt << std::endl;
			
			std::string input;
			std::cin >> input;
			
			return getOperationByChoice(input);
		}
		
		static Operations getOperationByChoice(std::string choice)
		{
			if(Interaction::Choice_Add == choice)
				return Operations::Add;
			
			if(Interaction::Choice_Subtract == choice)
				return Operations::Subtract;
			
			if(Interaction::Choice_Multiply == choice)
				return Operations::Multiply;
			
			if(Interaction::Choice_Divide == choice)
				return Operations::Divide;
			
			if(Interaction::Choice_Exponent == choice)
				return Operations::Exponent;
			
			if(Interaction::Choice_Root == choice)
				return Operations::SquareRoot;
			
			if(Interaction::Choice_Reset == choice || Interaction::Choice_Reset_Lower == choice)
				return Operations::Reset;
			
			if(Interaction::Choice_Quit == choice || Interaction::Choice_Quit_Lower == choice)
				return Operations::Quit;
			
			return Operations::NoAction;
		}
		
		static std::string getOperationName(Operations operation)
		{
			std::string name;
			switch(operation)
			{
				case Add:
					name = "Add";
					break;
				
				case Subtract:
					name = "Subtract";
					break;
				
				case Multiply:
					name = "Multiply";
					break;
				
				case Divide:
					name = "Divide";
					break;
				
				case Exponent:
					name = "Exponent";
					break;
				
				case SquareRoot:
					name = "Square Root";
					break;
				
				case Reset:
					name = "Reset";
					break;
				
				case Quit:
					name = "Quit";
					break;
				
				default:
					name = "N/A";
					break;
			}
			
			return name;
		}
};

#endif //INTERACTION_H
