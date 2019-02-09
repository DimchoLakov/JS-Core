function solve() {
	let button = document.getElementsByTagName('button')[0];

	button.addEventListener('click', function () {
	    let inputField = document.querySelector('#myNumbers input');
        let inputNumbers = inputField.value;
        let numbers = inputNumbers.split(' ').map(function (x) {
            return Number(x);
        });

        // check if numbers count is 6
        if (numbers.length !== 6){
            return;
        }

        // check if numbers are in range 1-49
        for (let number of numbers) {
            if (number < 1 || number > 49 || isNaN(number)){
                return;
            }
        }

        let allNumbersDiv = document.getElementById('allNumbers');

        for (let i = 1; i <= 49; i++) {
            let div = document.createElement('div');
            div.textContent = i.toString();
            div.classList.add('numbers');

            for (let j = 0; j < numbers.length; j++) {
                let currentNumber = numbers[j];
                if (currentNumber === i){
                    div.style.backgroundColor = 'orange';
                }
            }

            allNumbersDiv.appendChild(div);
        }
        button.disabled = true;
        inputField.disabled = true;
    })
}