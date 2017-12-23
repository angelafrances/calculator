var keys = document.querySelectorAll("#button");
var memory = 0;
var num1;
var num2;
var sign;

for (var i = 0; i < keys.length; i++) {

	keys[i].onclick = function(punch) {
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;


		if (btnVal == 'CE') {
			input.innerHTML = '';
		}

		else if (btnVal == '+') {
			num1 = inputVal;
			sign = btnVal;
			input.innerHTML = '';
		}

		else if (btnVal == '-') {
			num1 = inputVal;
			sign = btnVal;
			input.innerHTML = '';
		}

		else if (btnVal == '/') {
			num1 = inputVal;
			sign = btnVal;
			input.innerHTML = '';
		}

		else if (btnVal == '*') {
			num1 = inputVal;
			sign = btnVal;
			input.innerHTML = '';
		}

		else if (btnVal == '=') {
			num2 = inputVal;
			calc();
		}

		else if (btnVal == 'C') {
			input.innerHTML -= btnVal;
			var backspace = inputVal;
			input.innerHTML = backspace.substring(0, backspace.length - 1);
		}

		else if (btnVal == 'MC') {
			memory = 0;
			console.log(memory);
			input.innerHTML = '';
		}

		else if (btnVal == 'MA') {
			memory += parseInt(inputVal);
			console.log(memory);
		}

		else if (btnVal == 'MS') {
			memory -= parseInt(inputVal);
			console.log(memory);
		}

		else if (btnVal == 'MR') {
			input.innerHTML = memory;
		}

		else {
			input.innerHTML += btnVal;
		}

		punch.preventDefault();
	}


}

function calc() {
	if (sign == '+') {
		var z = parseFloat(num1) + parseFloat(num2);
		document.getElementById('screen').innerHTML = z;
	}
	else if (sign == '-') {
		var z = parseFloat(num1) - parseFloat(num2);
		document.getElementById('screen').innerHTML = z;
	}
	else if (sign == '*') {
		var z = parseFloat(num1) * parseFloat(num2);
		document.getElementById('screen').innerHTML = z;
	}
	else if (sign == '/') {
		var z = parseFloat(num1) / parseFloat(num2);
		document.getElementById('screen').innerHTML = z;
	}


}
