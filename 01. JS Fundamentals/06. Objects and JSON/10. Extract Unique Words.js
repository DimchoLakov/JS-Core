function solve(arr) {
    let uniqueWords = [];

    let pattern = /\W+/g;
    for (let element of arr) {
        let words = element.split(pattern).filter(x => x !== "");

        for (let word of words) {
            word = word.toLowerCase();
            if (!uniqueWords.includes(word)) {
                uniqueWords.push(word);
            }
        }
    }

    console.log(uniqueWords.join(", "));
}


solve(
    [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.",
        "Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.",
        "Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.",
        "Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.",
        "Morbi in ipsum varius, pharetra diam vel, mattis arcu.",
        "Integer ac turpis commodo, varius nulla sed, elementum lectus.",
        "Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus."
    ]
);