function solve() {
    let stringToCheck = document.querySelector('#string').value;
    let character = document.querySelector('#character').value;

    function countOccurrencesOfCharInString(string, char) {
        let count = 0;

        for (let i = 0; i < stringToCheck.length; i++) {
            if (string[i] === char) {
                count++;
            }
        }
        return count;
    }

    function checkEvenOrOdd(number) {
        return number % 2 === 0 ? 'even' : 'odd';
    }

    let count = countOccurrencesOfCharInString(stringToCheck, character);
    let result = `Count of ${character} is ${checkEvenOrOdd(count)}.`;

    let spanResult = document.querySelector('#result');
    spanResult.textContent = result;
}