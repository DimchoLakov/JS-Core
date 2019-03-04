function solve() {
    let input = document.querySelector('#str').value;

    let sum = getOnesSum(input);

    let result = input.slice(sum, input.length - sum);

    let finalString = result
        .split(/([\d]{8})/)
        .filter((x) => x)
        .map((x) => binaryToString(x))
        .filter((c) => /[A-Za-z ]+/g.test(c))
        .join("");

    let spanResult = document.querySelector('#result');
    spanResult.textContent = finalString;

    function getOnesSum(value) {

        let result = value;

        while (result.length > 1) {
            let temp = result
                .split('')
                .reduce((a, b) => +a + +b)
                .toString();

            result = temp;
        }
        return +result;
    }

    function binaryToString(element) {
        let decimal = parseInt(element, 2);
        return String.fromCharCode(decimal);
    }
}