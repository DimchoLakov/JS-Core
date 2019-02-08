function solve() {
    let encodeButton = document.getElementsByTagName('button')[0];
    let decodeButton = document.getElementsByTagName('button')[1];

    encodeButton.addEventListener(('click'), function () {

        let senderTextarea = document.getElementsByTagName('textarea')[0];
        let message = senderTextarea.value;
        let encodedMessage = '';
        let newAsciiCode;

        for (let i = 0; i < message.length; i++) {
            newAsciiCode = message.charCodeAt(i) + 1;
            encodedMessage += String.fromCharCode(newAsciiCode);
        }

        let receiverTextarea = document.getElementsByTagName('textarea')[1];
        receiverTextarea.value = encodedMessage;

        senderTextarea.value = '';
    })

    decodeButton.addEventListener('click', function () {
        let receiverTextarea = document.getElementsByTagName('textarea')[1];
        let encodedMessage = receiverTextarea.value;
        let newAsciiCode;
        let decodedMessage = '';

        for (let i = 0; i < encodedMessage.length; i++) {
            newAsciiCode = encodedMessage.charCodeAt(i) - 1;
            decodedMessage += String.fromCharCode(newAsciiCode);
        }

        receiverTextarea.value = decodedMessage;
    })
}