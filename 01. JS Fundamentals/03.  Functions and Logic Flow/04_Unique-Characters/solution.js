function solve() {
    let inputStr = document.querySelector('#string').value;
    let uniqueCharacters = '';

    function isCharWhiteSpace(i) {
        if (inputStr[i] === ' ') {
            uniqueCharacters += inputStr[i];
        }
    }

    function isCharUnique(i) {
        if (uniqueCharacters.indexOf(inputStr[i]) === -1) {
            uniqueCharacters += inputStr[i];
        }
    }

    function findUniqueCharacters(string) {
        for (let i = 0; i < string.length; i++) {
            isCharWhiteSpace(i);
            isCharUnique(i);
        }
    }

    findUniqueCharacters(inputStr);

    let resultSpan = document.querySelector('#result');
    resultSpan.textContent = uniqueCharacters;
}