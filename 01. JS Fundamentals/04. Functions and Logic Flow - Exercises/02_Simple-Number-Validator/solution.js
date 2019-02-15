function validate() {
    let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];

    let checkButton = document.querySelector('#exercise div button');
    checkButton.addEventListener('click', () => {

        let input = document.querySelector('#exercise div input[type=number]');
        let numberAsString = input.value;

        let spanResult = document.querySelector('#exercise div #output #response');

        if (isValidNumber(numberAsString, weights)) {
            spanResult.textContent = 'This number is Valid!';
        } else {
            spanResult.textContent = 'This number is NOT Valid!';
        }
    });


    function isValidNumber(numAsStr, weights) {
        let lastDigit = Number(numAsStr[numAsStr.length - 1]);
        let remainder = 0;

        let sum = 0;
        for (let i = 0; i < numAsStr.length - 1; i++) {
            let number = Number(numAsStr[i]);
            sum += number * weights[i];
        }
        remainder = sum % 11;

        if (remainder === 10) {
            remainder = 0;
        }

        return lastDigit === remainder;
    }
}