// 01. String Length
function getTotalAndAverageLength(arr1, arr2, arr3){
    let totalLength = arr1.length + arr2.length + arr3.length;
    let average = Math.round(totalLength / 3);
    console.log(totalLength);
    console.log(average);
}


// 02.	Math Operations
function mathOperations(num1, num2, operator) {
    let firstNumber = Number(num1);
    let secondNumber = Number(num2);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
        case '%':
            result = num1 % num2;
            break;
    }
    console.log(result);
}


// 03.	Sum of Numbers N…M
function sumOfNumbers(n, m) {
    let startNum = Number(n);
    let endNum = Number(m);
    let result = 0;

    for (let i = startNum; i <= endNum; i++){
        result += i;
    }
    console.log(result);
}


// 04.	Largest Number
function getLargestNumber(num1, num2, num3) {
    let firstNum = Number(num1);
    let secondNum = Number(num2);
    let thirdNum = Number(num3);

    let result = firstNum > secondNum ? firstNum : secondNum;
    result = result > thirdNum ? result : thirdNum;
    console.log(`The largest number is ${result}.`);
}


// 05.	Circle Area
function getCircleArea(input) {
    let typeOfInput = typeof(input);
    if (typeOfInput == 'number'){
        let result = (Math.pow(input, 2) * Math.PI).toFixed(2);
        console.log(result);
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`);
    }
}