function solve(arr) {
    arr.sort(sortByAscendingCaseInsensitive);
    arr.sort(sortAlphabeticallyByLength);

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    function sortAlphabeticallyByLength(a, b) {
        return a.length - b.length;
    }

    function sortByAscendingCaseInsensitive(a, b) {
        return a.localeCompare(b);
    }
}


solve(['alpha',
    'beta',
    'gamma']


);