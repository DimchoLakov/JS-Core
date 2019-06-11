function solve(numbers) {

    console.log("Sum = " + numbers.reduce((a, b) => a + b));
    console.log("Min = " + numbers.reduce((a, b) => Math.min(a, b)));
    console.log("Max = " + numbers.reduce((a, b) => Math.max(a, b)));
    console.log("Product = " + numbers.reduce((a, b) => a * b));
    console.log("Join = " + numbers.reduce((a, b) => "" + a + b));
}


solve([2, 3, 10, 5]);