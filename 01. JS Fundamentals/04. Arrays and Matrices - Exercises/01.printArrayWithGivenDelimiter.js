function solve(arr) {
    let delimiter = arr[arr.length - 1];

    arr.pop();
    let resultArr = arr.join(delimiter);
    console.log(resultArr);
}

solve(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']
);