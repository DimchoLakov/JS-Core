function solve() {
    let start = Number(document.querySelector('#firstNumber').value);
    let end = Number(document.querySelector('#secondNumber').value);
    let firstString = document.querySelector('#firstString').value;
    let secondString = document.querySelector('#secondString').value;
    let thirdString = document.querySelector('#thirdString').value;

    let resultSpan = document.querySelector('#result');

    for (let i = start; i <= end; i++) {
        checkCurrentNumber(i);
    }

    function checkCurrentNumber(i) {
        let p = document.createElement('p');

        if (i % 3 === 0 && i % 5 === 0) {
            p.textContent = `${i} ${firstString}-${secondString}-${thirdString}`;
        } else if (i % 3 === 0) {
            p.textContent = `${i} ${secondString}`;
        } else if (i % 5 === 0) {
            p.textContent = `${i} ${thirdString}`;
        } else {
            p.textContent = `${i}`;
        }
        resultSpan.appendChild(p);
    }
}