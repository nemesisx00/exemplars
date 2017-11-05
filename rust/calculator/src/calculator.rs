use std::{clone, fmt};
use ui::Choice;

#[derive(Copy, Debug, PartialEq)]
pub enum Operation {
	Add,
	Subtract,
	Multiply,
	Divide,
	Exponent,
	Root,
	Reset,
	Quit,
}

impl Operation {
	pub fn find_by_value(val: Choice) -> Option<Operation> {
		match val {
			Choice::Calculation(n) => {
				match n {
					1 => Some(Operation::Add),
					2 => Some(Operation::Subtract),
					3 => Some(Operation::Multiply),
					4 => Some(Operation::Divide),
					5 => Some(Operation::Exponent),
					6 => Some(Operation::Root),
					_ => None,
				}
			},
			Choice::Logistics(c) => {
				match c {
					'r' => Some(Operation::Reset),
					'q' => Some(Operation::Quit),
					_ => None,
				}
			},
		}
	}
}

impl clone::Clone for Operation {
	fn clone(&self) -> Self {
		match self {
			&Operation::Add => Operation::Add,
			&Operation::Subtract => Operation::Subtract,
			&Operation::Multiply => Operation::Multiply,
			&Operation::Divide => Operation::Divide,
			&Operation::Exponent => Operation::Exponent,
			&Operation::Root => Operation::Root,
			&Operation::Reset => Operation::Reset,
			&Operation::Quit => Operation::Quit,
		}
	}
}

impl fmt::Display for Operation {
	fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
		write!(f, "{:?}", self)
	}
}

pub struct Calculator
{
	pub value: f64
}

impl Calculator
{
	pub fn new() -> Calculator {
		Calculator { value: 0.0 }
	}
	
	pub fn add(&mut self, operand: Option<f64>) -> f64 {
		if let Some(op) = operand {
			self.value += op;
		}
		
		self.value
	}
	
	pub fn sub(&mut self, operand: Option<f64>) -> f64 {
		if let Some(op) = operand {
			self.value -= op;
		}
		
		self.value
	}
	
	pub fn mult(&mut self, operand: Option<f64>) -> f64 {
		if let Some(op) = operand {
			self.value *= op;
		}
		
		self.value
	}
	
	pub fn div(&mut self, operand: Option<f64>) -> f64 {
		if let Some(op) = operand {
			//Divide by 0 is detected and entirely ignored, rather than throwing an error.
			//Not the most robust solution, but whatever. This isn't meant to replace your OS calculator application.
			if op != 0.0 {
				self.value /= op;
			}
		}
		
		self.value
	}
	
	pub fn exp(&mut self, operand: Option<f64>) -> f64 {
		if let Some(op) = operand {
			self.value = self.value.powf(op);
		}
		
		self.value
	}
	
	pub fn root(&mut self) -> f64 {
		self.value = self.value.sqrt();
		self.value
	}
	
	pub fn reset(&mut self) -> f64 {
		self.value = 0.0;
		self.value
	}
}

#[cfg(test)]
mod tests
{
	use super::*;
	
	fn prepare() -> Calculator {
		let mut calc = Calculator::new();
		calc.add(Some(4.0));
		calc
	}
	
	#[test]
	fn test_add() {
		let mut calc = prepare();
		let expected = 6.0;
		
		assert_eq!(expected, calc.add(Some(2.0)));
		assert_eq!(expected, calc.add(None));
	}
	
	#[test]
	fn test_sub() {
		let mut calc = prepare();
		let expected = 2.0;
		
		assert_eq!(expected, calc.sub(Some(2.0)));
		assert_eq!(expected, calc.sub(None));
	}
	
	#[test]
	fn test_mult() {
		let mut calc = prepare();
		let expected = 8.0;
		
		assert_eq!(expected, calc.mult(Some(2.0)));
		assert_eq!(expected, calc.mult(None));
	}
	
	#[test]
	fn test_div() {
		let mut calc = prepare();
		let expected = 2.0;
		
		assert_eq!(expected, calc.div(Some(2.0)));
		
		let expected2 = calc.value;
		assert_eq!(expected2, calc.div(Some(0.0)));
		assert_eq!(expected2, calc.div(None));
	}
	
	#[test]
	fn test_exp() {
		let mut calc: Calculator = prepare();
		let expected: f64 = 64.0;
		
		assert_eq!(expected, calc.exp(Some(3.0)));
		assert_eq!(expected, calc.exp(None));
	}
	
	#[test]
	fn test_root() {
		let mut calc: Calculator = prepare();
		let expected: f64 = 2.0;
		
		assert_eq!(expected, calc.root());
	}
	
	#[test]
	fn test_reset() {
		let mut calc: Calculator = prepare();
		let expected: f64 = 0.0;
		
		assert_eq!(expected, calc.reset());
	}
}
