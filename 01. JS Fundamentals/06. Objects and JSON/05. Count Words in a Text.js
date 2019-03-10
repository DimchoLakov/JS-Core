function solve(inputArr) {

    let pattern = /\w+/g;

    let words = {};

    for (let str of inputArr) {

        let matches = str.match(pattern);

        for (let match of matches) {
            if (!words.hasOwnProperty(match)) {
                words[match] = 1;
            } else {
                words[match] += 1;
            }
        }

    }

    console.log(JSON.stringify(words));
}


solve(
    ["JS devs use Node.js for server-side JS.-- JS for devs"]
);