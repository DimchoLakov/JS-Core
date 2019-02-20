function solve() {
    let inputArr = JSON.parse(document.querySelector('#arr').value);

    let resultArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        let currentString = inputArr[i];
        currentString = reverseString(currentString);
        currentString = capitalizeFirstLetter(currentString);

        resultArr.push(currentString);
    }

    let resultSpan = document.querySelector('#result');
    resultSpan.textContent = resultArr.join(' ');

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function reverseString(str) {
        return str.split('').reverse().join('');
    }
}