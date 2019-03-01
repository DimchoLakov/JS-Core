function solve() {
    let input = document.getElementById('str').value;
    let divider = Number(document.getElementById('num').value);

    let result = '';

    if(input.length % divider === 0){
        getSeparatedString();
        result = result.trim();

    } else {
        let remainingLength = divider - (input.length % divider);
        getSeparatedString();

        for (let i = 0; i < remainingLength; i++) {
            result += input[i];
        }
    }

    let resultElement = document.getElementById('result');
    resultElement.textContent = result;

    function getSeparatedString() {
        let index = 1;
        for(let char of input){
            result += char;
            if(index % divider === 0){
                result += ' ';
            }
            index++;
        }
    }
}