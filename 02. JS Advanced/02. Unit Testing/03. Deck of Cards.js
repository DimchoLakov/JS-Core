function printDeckOfCards(arr) {

    let cards = [];
    for (let pair of arr) {
        let f = pair[0];
        let s = pair[1];
        if (pair.length > 2) {
            f = pair.substring(0, 2);
            s = pair[2];
        }
        let card = makeACard(f, s);
        if (card === "Error") {
            console.log(`Invalid card: ${pair}`);
            return;
        }
        cards.push(card.trim());
    }

    console.log(cards.join(" "));

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
}


printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);