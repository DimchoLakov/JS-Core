function solve() {
    let allButtons = Array.from(document.querySelectorAll('#operations button'));
    for (let button of allButtons) {
        addEventListenerToButton(button);
    }

    let number;
    let isRunning = false;

    function addEventListenerToButton(button) {
        button.addEventListener('click', () => {

            if (!isRunning) {
                let inputField = document.querySelector('#exercise input[type=number]');
                number = Number(inputField.value);
                isRunning = true;
            }

            let buttonTextContent = button.textContent.toLowerCase();

            if (buttonTextContent === 'chop') {
                number /= 2;
            } else if (buttonTextContent === 'dice') {
                number = Math.sqrt(number);
            } else if (buttonTextContent === 'spice') {
                number += 1;
            } else if (buttonTextContent === 'bake') {
                number *= 3;
            } else if (buttonTextContent === 'fillet') {
                number *= 0.8;
            }

            let outputParagraph = document.querySelector('#output');
            outputParagraph.textContent = number.toString();
        });
    }

}
