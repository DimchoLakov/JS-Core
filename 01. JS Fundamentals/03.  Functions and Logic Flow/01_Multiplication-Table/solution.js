function solve() {
    let num = Number(document.querySelector('#num1').value);
    let multiplier = Number(document.querySelector('#num2').value);

    let resultDiv = document.querySelector('#result');
    resultDiv.textContent = '';

    if (num > multiplier) {
        resultDiv.innerHTML = 'Try with other numbers.';
        return;
    }

    function printTable(num, multiplier) {
        for (let i = num; i <= multiplier; i++) {
            let result = i * multiplier;
            let p = document.createElement('p');
            p.innerHTML = `${i} * ${multiplier} = ${result}`;
            resultDiv.appendChild(p);
        }
    }

    printTable(num, multiplier);
}