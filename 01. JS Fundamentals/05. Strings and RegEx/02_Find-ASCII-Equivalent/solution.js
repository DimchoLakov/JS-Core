function solve() {
    let input = document.querySelector('#str').value;

    let arr = input
        .split(' ')
        .filter(x => x !== '');

    let asciiCodesArr = [];
    let finalWord = '';

    let resultDiv = document.querySelector('#result');

    for (let str of arr) {
        if (!isNaN(str)) {
            let charCode = Number(str);
            finalWord += String.fromCharCode(charCode);
        } else {
            let p = document.createElement('p');
            p.textContent = getAsciiString(str);
            resultDiv.appendChild(p);
        }
    }

    let p = document.createElement('p');
    p.textContent = finalWord;
    resultDiv.appendChild(p);

    function getAsciiString(str) {
        return str
            .split('')
            .map(x => x.charCodeAt(0))
            .join(' ');
    }
}