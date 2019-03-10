function solve(arr) {

    let obj = {};

    for (let str of arr) {
        let tokens = str.split(/[\<\-\>]+/).filter(x => x !== "");

        let key = tokens[0].trim();
        let value = tokens[1].trim();

        if (!obj.hasOwnProperty(key)) {
            obj[key] = 0;
        }

        obj[key] += Number(value);
    }

    let keys = Object.keys(obj);

    for (let key of keys) {
        console.log(`${key} : ${obj[key]}`)
    }
}


solve(
    [
        "Istanbul <-> 100000",
        "Honk Kong <-> 2100004",
        "Jerusalem <-> 2352344",
        "Mexico City <-> 23401925",
        "Istanbul <-> 1000"
    ]
);