function solve() {
    let number = Number(document.querySelector('#num').value);
    let arr = JSON.parse(document.querySelector('#arr').value);

    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        let containsNum = arr[i].includes(number);
        let indexOfNum = arr[i].indexOf(number);

        resultArr.push(`${containsNum} -> ${indexOfNum}`);
    }

    let resultSpan = document.querySelector('#result');
    resultSpan.textContent = resultArr.join(',');
}