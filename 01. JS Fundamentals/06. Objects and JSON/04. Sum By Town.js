function solve(input) {

    let obj = {};

    let index = 1;

    for (let i = 0; i < input.length - 1; i += 2) {
        let key = input[i];
        let value = input[i + 1];

        if (!obj.hasOwnProperty(key)) {
            obj[key] = Number(value);
        } else {
            obj[key] += Number(value);
        }
    }

    console.log(JSON.stringify(obj));

}

solve(
    ["Sofia", "20", "Varna", "3", "Sofia", "5", "Varna", "4"]
);