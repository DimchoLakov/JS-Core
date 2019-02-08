function solve() {
    let images = document.getElementsByTagName('img');
    let imagesArr = Array.from(images);
    let cards = imagesArr.slice(1, imagesArr.length);

    for (let card of cards) {

        card.addEventListener('click', () => {

            card.src ='images/whiteCard.jpg';

            let parentNodeId = card.parentNode.id;
            console.log(parentNodeId);

            let leftSpan = document.querySelector('#result').children[0];
            let rightSpan = document.querySelector('#result').children[2];
            
            if (parentNodeId === 'player1Div') {
                leftSpan.textContent = card.name;
            }
            else if (parentNodeId === 'player2Div'){
                rightSpan.textContent = card.name;
            }

            // if only one card is selected, return
            if (leftSpan.textContent === '' || rightSpan.textContent === ''){
                return;
            }

            let leftValue = Number(leftSpan.textContent);
            let rightValue = Number(rightSpan.textContent);

            let winner;
            let loser;

            if (leftValue > rightValue){
                winner = document.querySelector(`#player1Div img[name="${leftValue}"]`);
                loser = document.querySelector(`#player2Div img[name="${rightValue}"]`);
            }
            else {
                winner = document.querySelector(`#player2Div img[name="${rightValue}"]`);
                loser = document.querySelector(`#player1Div img[name="${leftValue}"]`);
            }

            winner.style.border = '2px solid green';
            loser.style.border = '2px solid darkred';

            let history = document.querySelector('#history');

            history.textContent += `[${leftValue} vs ${rightValue}] `;

            leftSpan.textContent = '';
            rightSpan.textContent = '';
        })
    }
}