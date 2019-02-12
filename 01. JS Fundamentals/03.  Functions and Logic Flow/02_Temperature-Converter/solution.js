function solve() {
    let degrees = Number(document.getElementById('num1').value);
    let type = document.getElementById('type').value.toLowerCase();

    let resultDiv = document.getElementById('result');

    if (type !== 'fahrenheit' && type !== 'celsius') {
        resultDiv.innerHTML = 'Error!';
        return
    }

    let result = 0;

    function convertDegrees(degrees, type) {
        if (type === 'fahrenheit') {
            result = (((degrees - 32) * 5) / 9);
        } else if (type === 'celsius') {
            result = (((degrees * 9) / 5) + 32);
        }

        result = Math.round(result);

        return result;
    }

    resultDiv.innerHTML = convertDegrees(degrees, type);
}