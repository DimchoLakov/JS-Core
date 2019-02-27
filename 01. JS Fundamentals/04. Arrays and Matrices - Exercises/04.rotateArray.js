function solve(arr) {
    let jumps = Number(arr.pop());
    let totalJumps = jumps % arr.length;

    for (let i = 0; i < totalJumps; i++) {
        rotateArray(arr);
    }

    console.log(arr.join(' '));

    function rotateArray(array) {
        let lastElement = array[array.length - 1];
        for (let i = array.length - 1; i >= 0; i--) {
            array[i] = array[i - 1];
        }
        array[0] = lastElement
    }
}


solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']
);