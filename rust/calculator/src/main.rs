mod calculator;
mod ui;

use calculator::{Calculator, Operation};

fn main() {
	let mut calc: Calculator = Calculator::new();
	
	loop {
		ui::display_menu();
		let mut action: ui::Action = ui::get_action();
		
		action.value = None;
		if let Some(op) = action.operation {
			action.value = match op {
				Operation::Add => Some(calc.add(action.operand)),
				Operation::Subtract => Some(calc.sub(action.operand)),
				Operation::Multiply => Some(calc.mult(action.operand)),
				Operation::Divide => Some(calc.div(action.operand)),
				Operation::Exponent => Some(calc.exp(action.operand)),
				Operation::Root => Some(calc.root()),
				Operation::Reset => Some(calc.reset()),
				Operation::Quit => Some(calc.value),
			};
		}
		
		ui::display_result(&action);
		
		if let Some(op) = action.operation {
			if Operation::Quit == op {
				break;
			}
		}
	}
	
	println!("Have a nice day!");
}
