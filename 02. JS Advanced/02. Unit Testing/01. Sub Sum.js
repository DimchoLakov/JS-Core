function subsum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    startIndex = Number(startIndex);
    endIndex = Number(endIndex);

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex < 0 || endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }
    let sum = 0;

    let numbers = Array.from(arr.map(x => parseFloat(x)));

    for (let index = startIndex; index <= endIndex; index++) {
        let num = numbers[index];
        sum += num;
    }
    return sum;
}

console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subsum([10, 'twenty', 30, 40], 0, 2));
console.log(subsum([], 1, 2));
console.log(subsum('text', 0, 2));