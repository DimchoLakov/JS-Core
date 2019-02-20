function solve() {
    let input = document.querySelector('#exercise #arr').value;
    let arr = Array.from(JSON.parse(input)).map(x => parseInt(x));

    let resultArray = getResultArray(arr);
    printResult(resultArray);

    function printResult(resultArr) {
        let resultSpan = document.querySelector('#result');

        for (let i = 0; i < resultArr.length; i++) {
            let currentElement = resultArr[i];
            let p = document.createElement('p');
            p.textContent = currentElement;
            resultSpan.appendChild(p);
        }
    }

    function getResultArray(array) {
        let arrayLength = array.length;
        let resultArray = [];

        for (let i = 0; i < arrayLength; i++) {
            let product = array[i] * arrayLength;
            resultArray[i] = `${i} -> ${product}`;
        }

        return resultArray;
    }
}