function solve() {
    let inputArr = JSON.parse(document.querySelector('#arr').value).map(x => parseInt(x));

    let resultArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        if (i % 2 === 0) {
            resultArr.push(inputArr[i]);
        }
    }

    let spanResult = document.querySelector('#result');
    spanResult.textContent = resultArr.join(" x ");
}