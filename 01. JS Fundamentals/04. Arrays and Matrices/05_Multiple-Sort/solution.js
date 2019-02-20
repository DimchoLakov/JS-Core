function solve() {
    let numbers = JSON.parse(document.querySelector('#arr').value).map(x => parseInt(x));

    let numbersSortedByAscending = numbers.sort(sortByAscending);
    let firstDiv = document.createElement('div');
    firstDiv.textContent = numbersSortedByAscending.join(', ');

    let numbersSortedAlphabetically = numbersSortedByAscending.map(String).sort(sortAlphabetically);
    let secondDiv = document.createElement('div');
    secondDiv.textContent = numbersSortedAlphabetically.join(', ');

    let spanResult = document.querySelector('#result');
    spanResult.appendChild(firstDiv);
    spanResult.appendChild(secondDiv);

    function sortByAscending(a, b) {
        return a - b;
    }

    function sortAlphabetically(a, b) {
        if (a < b) return -1;
        else if (a > b) return 1;
        return 0;
    }
}