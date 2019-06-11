function makeACard(face, suit) {
    face = face.toUpperCase();
    suit = suit.toLowerCase();
    let faces = {
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        J: "J",
        Q: "Q",
        K: "K",
        A: "A"
    };
    let suits = {
        s: "\u2660",
        h: "\u2665 ",
        d: "\u2666",
        c: "\u2663"
    };
    if (!faces.hasOwnProperty(face) || !suits.hasOwnProperty(suit)) {
        return "Error";
    }

    return `${faces[face]}${suits[suit]}`;
}

console.log('' + makeACard('A', 'S'));
console.log('' + makeACard('10', 'H'));
console.log('' + makeACard('1', 'C'));