function solve() {
    let rightAnswers = ['2013', 'Pesho', 'Nakov'];
    let correctAnswersCount = 0;

    let buttons = Array.from(document.getElementsByTagName('button'));

    for (let button of buttons) {
        button.addEventListener(('click'), function (e) {

            let target = e.target;
            let parentNode = target.parentNode;
            let arr = Array.from(parentNode.children);

            let radioButtons = arr.filter(function (x) {
                return x.tagName.toLocaleLowerCase() === 'input' && x.checked;
            });

            let selectedValue = '';

            if (radioButtons.length === 0) {
                return;
            }

            selectedValue = radioButtons[0].value;

            for (let i = 0; i < rightAnswers.length; i++) {
                if (rightAnswers[i] === selectedValue) {
                    correctAnswersCount++;
                }
            }

            let buttonIndex = buttons.indexOf(button);
            if (buttonIndex < 2) {
                let nextSection = Array.from(document.getElementsByTagName('section'))[buttonIndex + 1];
                nextSection.classList.remove('hidden');
            } else {

                let resultDiv = document.getElementById('result');

                if (correctAnswersCount === 3) {
                    resultDiv.textContent = 'You are recognized as top SoftUni fan!';
                } else {
                    resultDiv.textContent = `You have ${correctAnswersCount} right answers`;
                }
            }
        })
    }
}