function solve(arr) {
    let resultArr = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        let currentElement = resultArr[resultArr.length - 1];
        let nextElement = arr[i];

        if (nextElement >= currentElement) {
            resultArr.push(nextElement);
        }
    }

    for (let i = 0; i < resultArr.length; i++) {
        console.log(resultArr[i]);
    }
}


solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);