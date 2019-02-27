function solve(commands) {
    let number = 1;
    let arr = [];

    for (let i = 0; i < commands.length; i++) {
        let command = commands[i];
        if (command === 'add') {
            arr.push(number++);
        } else if (command === 'remove') {
            arr.pop();
            number++
        }
    }

    printResult(arr);

    function printResult(array) {
        if (array.length === 0) {
            console.log('Empty');
        } else {
            for (let i = 0; i < array.length; i++) {
                console.log(array[i]);
            }
        }
    }
}

solve(['add',
    'add',
    'remove',
    'add',
    'add']

);