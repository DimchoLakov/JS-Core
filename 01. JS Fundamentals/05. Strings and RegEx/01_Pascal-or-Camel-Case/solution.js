function solve() {
    let input = document.querySelector('#str1').value;
    let casingType = document.querySelector('#str2').value;
    casingType = casingType.toLowerCase();

    let result = '';

    if (casingType === 'pascal case') {
        result = toPascalCaseArray(input);
    } else if (casingType === 'camel case') {
        result = toCamelCaseArray(input);
    } else {
        result = 'Error!';
    }

    let resultDiv = document.querySelector('#result');
    resultDiv.textContent = result;

    function toPascalCaseArray(input) {
        return input
            .split(' ')
            .filter(x => x !== '')
            .map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
            .join('');
    }

    function toCamelCaseArray(input) {
        let words = input.split(' ').filter(x => x !== '');

        return words[0].toLowerCase() +
            words
                .slice(1)
                .map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
                .join('');
    }
}