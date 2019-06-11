function solve(arr) {

    let closure = (function () {
        let result = "";

        return {
            append: (s) => result += s,
            removeStart: (n) => result = result.slice(Number(n)),
            removeEnd: (n) => result = result.slice(0, result.length - Number(n)),
            print: () => console.log(result)
        };
    })();

    for (let element of arr) {
        let tokens = element.split(" ").filter(x => x !== "");
        let command = tokens[0];
        let parameter = tokens[1]
        closure[command](parameter);
    }

}

solve(['append hello', 'append again', 'removeStart 3', 'removeEnd 4', 'print']);