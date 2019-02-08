function solve() {
    let buttons = Array.from(document.querySelectorAll('button'));
    let inputFields = Array.from(document.querySelectorAll('input'));

    buttons.forEach((btn) => {
        btn.addEventListener(('click'), function (e) {

            let button = e.target;

            let message = '';
            let sender = '';
            let textAlign = '';

            if (button.name === 'myBtn') {
                message = document.querySelector('#myChatBox').value;
                sender = 'Me';
                textAlign = 'left';
            } else if (button.name === 'peshoBtn') {
                message = document.querySelector('#peshoChatBox').value;
                sender = 'Pesho';
                textAlign = 'right';
            }

            if (message === ''){
                return;
            }

            let chronology = document.querySelector('#chatChronology');

            let divResult = document.createElement('div');
            let p = document.createElement('p');
            p.textContent = message;
            let span = document.createElement('span');
            span.textContent = sender;

            divResult.appendChild(span);
            divResult.appendChild(p);
            divResult.style.textAlign = textAlign;

            chronology.appendChild(divResult);

            document.querySelector('#myChatBox').value = '';
            document.querySelector('#peshoChatBox').value = '';
        })
    })
}