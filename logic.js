var Expression = [];
var result;
var operators = ['+','-','/','*'];

function getInput(input = 0){
	// checking first input
	if (Expression[0] == 0 || (operators.includes(Expression[0]) && Expression[0]!= '-') ) {
		Expression[0] = input;
	}else{
		//stop operator repetition
		let prevInput = Expression[Expression.length-1];
		if(operators.includes(prevInput) && operators.includes(input)){
			Expression.pop();
			Expression.push(input);
		}else{
			Expression.push(input);
		}
	}
	document.getElementById('display').value = Expression.join('');
}


function solveExpression(){
	const expr = Expression.join('');
	result = eval(expr);
	Expression.length = 0;
	Expression[0] = result;
	document.getElementById('display').value = Expression.join('');
}


function ResetExpression(){
	Expression.length = 0;
	Expression[0] = 0;
	document.getElementById('display').value = Expression.join('');
}

