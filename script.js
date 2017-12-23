/* global $*/
var keys = document.querySelectorAll("#button");
var memory = 0;
var num1 = 0;
var currNum = 0;
var sign = 0;
var z = 0;

for (var i = 0; i < keys.length; i++) {

	keys[i].onclick = function(punch) {
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;

		if (btnVal == 'CE') {
			input.innerHTML = '';
			currNum = 0;
			num1 = 0;
		}

		else if (btnVal == '+') {
			calc()
			sign = btnVal;
			num1 = currNum;
			console.log("now num1 is " + num1);
			currNum = 0;
			input.innerHTML += btnVal;

		}

		else if (btnVal == '-') {
			calc()
			sign = btnVal;
			num1 = currNum;
			console.log("now num1 is " + num1);
			currNum = 0;
			input.innerHTML += btnVal;
		}

		else if (btnVal == '/') {
			calc()
			sign = btnVal;
			num1 = currNum;
			console.log("now num1 is " + num1);
			currNum = 0;
			input.innerHTML += btnVal;
		}

		else if (btnVal == '*') {
			calc()
			sign = btnVal;
			num1 = currNum;
			console.log("now num1 is " + num1);
			currNum = 0;
			input.innerHTML += btnVal;
		}

		else if (btnVal == '=') {
			calc();
			num1 = 0;
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
			memory += parseFloat(inputVal);
			console.log(memory);
		}

		else if (btnVal == 'MS') {
			memory -= parseFloat(inputVal);
			console.log(memory);
		}

		else if (btnVal == 'MR') {
			input.innerHTML = memory;
		}

		else {
			input.innerHTML += btnVal;
			currNum += btnVal;
		}

		punch.preventDefault();
	}


}

function calc() {
	if (sign == '+') {
		z = parseFloat(num1) + parseFloat(currNum);
		document.getElementById('screen').innerHTML = z;
		console.log("the answer is " + z);
		currNum = z;
		sign = 0;
	}
	else if (sign == '-') {
		z = parseFloat(num1) - parseFloat(currNum);
		document.getElementById('screen').innerHTML = z;
		console.log(z);
		currNum = z;
		sign = 0;
	}
	else if (sign == '*' && num1 > 0 || num1 < 0) {
		z = parseFloat(num1) * parseFloat(currNum);
		document.getElementById('screen').innerHTML = z;
		console.log(z);
		currNum = z;
		sign = 0;
	}
	else if (sign == '/' && num1 > 0 || num1 < 0) {
		z = parseFloat(num1) / parseFloat(currNum);
		document.getElementById('screen').innerHTML = z;
		console.log(z);
		currNum = z;
		sign = 0;
	}
	else {
		z = parseFloat(currNum);
		document.getElementById('screen').innerHTML = z;
		sign = 0;
	}

}
