function solve(matrix) {

    let horizontalSums = matrix.map(function (y) {
        return y.reduce(function (a, b) {
            return a + b;
        });
    });

    let sumVertical = (r, a) => r.map((b, i) => a[i] + b);
    let verticalSums = matrix.reduce(sumVertical);

    for (let horizontalSum of horizontalSums) {
        for (let verticalSum of verticalSums) {
            if (horizontalSum !== verticalSum) {
                return false;
            }
        }
    }

    return true;
}


console.log(solve(
    [[11, 32, 45, 10, 20],
        [21, 0, 1, 30, 40],
        [21, 1, 1, 50, 60]]
));