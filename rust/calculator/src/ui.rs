use std::io;
use calculator::Operation;

#[derive(PartialEq)]
pub enum Choice {
	Calculation(u32),
	Logistics(char),
}

pub struct Action {
	pub operation: Option<Operation>,
	pub operand: Option<f64>,
	pub value: Option<f64>,
}

pub fn display_menu() {
	println!("{}", String::from(format!(
		"\r\nChoose an operation:\r\n\t1: {}\t\t\t5: {}\r\n\t2: {}\t\t6: {}\r\n\t3: {}\t\tR: {}\r\n\t4: {}\t\tQ: {}\r\n",
		Operation::Add.to_string(),
		Operation::Exponent.to_string(),
		Operation::Subtract.to_string(),
		Operation::Root.to_string(),
		Operation::Multiply.to_string(),
		Operation::Reset.to_string(),
		Operation::Divide.to_string(),
		Operation::Quit.to_string(),
	)));
}

pub fn display_result(action: &Action) {
	let mut output = String::new();
	
	if action.operation.is_some() {
		output.push_str(&format!("\r\nLast Action\r\n\tOperation: {}\r\n", action.operation.unwrap()));
		
		if action.operand.is_some() {
			output.push_str(&format!("\tOperand: {}\r\n", action.operand.unwrap()));
		}
	}
	
	output.push_str(&format!("\r\nValue: {}", action.value.unwrap_or(0.0)));
	
	println!("{}", output);
}

pub fn get_action() -> Action {
	let mut input: String = String::new();
	let option: Option<String> = match io::stdin().read_line(&mut input) {
		Ok(_n) => Some(input.to_lowercase()),
		Err(_e) => None,
	};
	
	let mut operation: Option<Operation> = None;
	if let Some(opt) = option {
		let choice = match opt.trim().parse::<u32>() {
			Ok(n) => Choice::Calculation(n),
			Err(_e) => Choice::Logistics(opt.trim().chars().last().unwrap())
		};
		
		operation = Operation::find_by_value(choice);
	}
	
	let mut operand: Option<f64> = None;
	if let Some(op) = operation {
		println!("Enter a value: ");
		operand = match op {
			Operation::Add => get_operand(),
			Operation::Subtract => get_operand(),
			Operation::Multiply => get_operand(),
			Operation::Divide => get_operand(),
			Operation::Exponent => get_operand(),
			Operation::Root => None,
			Operation::Reset => None,
			Operation::Quit => None,
		};
	}
	
	Action { operation, operand, value: None }
}

fn get_operand() -> Option<f64> {
	let mut input: String = String::new();
	
	match io::stdin().read_line(&mut input) {
		Ok(_n) => match input.trim().parse::<f64>() {
			Ok(f) => Some(f),
			Err(_e) => None,
		},
		Err(_e) => None,
	}
}
