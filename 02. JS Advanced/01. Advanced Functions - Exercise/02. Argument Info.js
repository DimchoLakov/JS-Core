function solve() {

    let argsKvp = new Map();

    for (let i = 0; i < arguments.length; i++) {
        let argument = arguments[i];
        let argType = typeof (argument);

        console.log(`${argType}: ${argument}`);

        if (!argsKvp.has(argType)) {
            argsKvp.set(argType, 1);
        } else {
            argsKvp.set(argType, argsKvp.get(argType) + 1);
        }

    }

    let resultDictionary = Array.from(argsKvp).sort(function (a, b) {
        return b[1] - a[1]
    });

    for (let array of resultDictionary) {
        console.log(`${array[0]} = ${array[1]}`);
    }
}


solve({name: 'bob'}, 3.333, 9.999);