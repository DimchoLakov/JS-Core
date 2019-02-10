function solve() {
    let buttons = document.getElementsByTagName('button');
    let nextButton = buttons[0];
    let cancelButton = buttons[1];
    let step = 1;

    let firstStep = document.getElementById('firstStep');
    let secondStep = document.getElementById('secondStep');
    let thirdStep = document.getElementById('thirdStep');

    cancelButton.addEventListener('click', function () {
        let section = document.getElementsByTagName('section')[0];
        section.style.display = 'none';
    })

    nextButton.addEventListener('click', function () {
        if (step === 1) {
            document.getElementById('content').style.background = 'none';
            firstStep.style.display = 'inline-block';

            step++;
        } else if (step === 2) {
            let agreeRadioButton = document.getElementById('firstStep').children[2];
            if (agreeRadioButton.checked) {
                firstStep.style.display = 'none';
                secondStep.style.display = 'inline-block';
                nextButton.style.display = 'none';
            } else {
                return;
            }

            setTimeout(function () {
                nextButton.style.display = 'inline';
            }, 3000);

            step++;
        } else if (step === 3) {
            secondStep.style.display = 'none';
            thirdStep.style.display = 'inline-block';
            cancelButton.style.display = 'none';
            nextButton.textContent = 'Finish';

            step++;
        } else if (step === 4) {
            let section = document.getElementsByTagName('section')[0];
            section.style.display = 'none';
        }
    })
}