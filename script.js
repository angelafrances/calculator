var keys = document.querySelectorAll("#button");


for (var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(calculate) {

		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;


		if (btnVal == 'CE') {
			input.innerHTML = '';
		}


		else if (btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			input.innerHTML = eval(equation);
		}

		else if (btnVal == 'C') {
			input.innerHTML -= btnVal;
			var backspace = inputVal;
			input.innerHTML = backspace.substring(0, backspace.length - 1);
		}


		else {
			input.innerHTML += btnVal;

		}

		calculate.preventDefault();
	}
}
