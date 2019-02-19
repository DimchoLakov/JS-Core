function solve() {

    let cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let button = document.querySelector('#exercise button');
    button.addEventListener('click', () => {

        let from = document.querySelector('#exercise #from').value;
        let to = document.querySelector('#exercise #to').value;

        let start = cardValues.indexOf(from);
        let end = cardValues.indexOf(to);

        generateCards(start, end);
    });

    function generateCards(start, end) {
        let cards = document.querySelector('#cards');

        for (let i = start; i <= end; i++) {

            let suit = document.querySelector('#exercise select').value;
            suit = suit[suit.length - 1];

            let cardDiv = document.createElement('div');
            cardDiv.classList.add('card');

            let firstP = document.createElement('p');
            firstP.textContent = suit;

            let middleP = document.createElement('p');
            middleP.textContent = cardValues[i];

            let lastP = document.createElement('p');
            lastP.textContent = suit;

            cardDiv.appendChild(firstP);
            cardDiv.appendChild(middleP);
            cardDiv.appendChild(lastP);

            cards.appendChild(cardDiv);
        }
    }
}