function solve() {
    let inputArr = document.querySelector('#arr').value;
    let replaceString = document.querySelector('#str').value;

    let arr = JSON.parse(inputArr);
    let wordToReplace = arr[0].split(' ')[2];
    let regex = new RegExp(wordToReplace, 'i');

    let spanResult = document.querySelector('#result');

    replaceCertainWord();

    function replaceCertainWord() {
        for (let i = 0; i < arr.length; i++) {
            let currentElement = arr[i];
            let replaced = currentElement.replace(regex, replaceString);

            let p = document.createElement('p');
            p.textContent = replaced;
            spanResult.appendChild(p);
        }
    }
}