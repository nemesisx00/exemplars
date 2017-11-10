#ifndef CALCULATOR_H
#define CALCULATOR_H

#include <cmath>

class Calculator
{
	public:
		Calculator();
		
		double getValue();
		
		void add(double operand);
		void sub(double operand);
		void mult(double operand);
		void div(double operand);
		void exp(double operand);
		void root();
		void reset();
	
	private:
		double value;
};

#endif //CALCULATOR_H
