function solve(arr) {

    let map = new Map();
    let pattern = /\w+/g;

    for (let str of arr) {

        let matches = str.match(pattern);

        for (let match of matches) {
            let word = match.toLowerCase();
            if (!map.has(word)) {
                map.set(word, 0);
            }

            map.set(word, map.get(word) + 1);
        }

    }

    let sortedMap = Array.from(map.keys()).sort();

    for (let element of sortedMap) {
        console.log(`'${element}' -> ${map.get(element)} times`);
    }

}


solve(["Far too slow, you're far too slow."]);