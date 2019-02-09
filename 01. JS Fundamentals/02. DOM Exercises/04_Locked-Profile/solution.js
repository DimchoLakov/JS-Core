function solve() {

    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function (e) {
            let currentButton = e.target;
            let parentNode = currentButton.parentNode;
            let unlockedInput = parentNode.children[4];

            if (unlockedInput.checked) {
                let hiddenDiv = parentNode.children[9];
                let hiddenDivDisplay = hiddenDiv.style.display;

                if (hiddenDivDisplay === 'inline') {
                    hiddenDiv.style.display = 'none';
                    currentButton.textContent = 'Show more';

                } else if (hiddenDivDisplay === '' || hiddenDivDisplay === 'none') {
                    hiddenDiv.style.display = 'inline';
                    currentButton.textContent = 'Hide it';
                }
            }
        })
    }
}