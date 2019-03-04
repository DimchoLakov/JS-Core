function solve() {
    let arr = JSON.parse(document.querySelector('#arr').value);
    let specialKey = arr[0];
    let keyToUpper = specialKey.toUpperCase();
    let keyToLower = specialKey.toLowerCase();

    let pattern = `(?<=^|\\s)[${keyToLower}${keyToUpper}]+\\s+([A-Z!%$#]{8,})(?=[\\.\\,\\s]|$)`;
    let regex = new RegExp(pattern, 'g');

    let resultSpan = document.querySelector('#result');

    for (let str of arr) {

        if (regex.test(str)) {

            let matches = str.match(regex);
            for (let match of matches) {

                let message = match.split(' ').filter(x => x !== '')[1];
                let newMessage = processMessage(message);
                str = str.replace(message, newMessage);

            }
        }

        if (str !== specialKey) {
            let p = document.createElement('p');
            p.textContent = str;

            resultSpan.appendChild(p);
        }
    }


    function processMessage(msg) {

        let result = '';

        for (let i = 0; i < msg.length; i++) {

            let currentElement = msg[i];

            switch (currentElement) {
                case '!':
                    result += '1';
                    break;
                case '%':
                    result += '2';
                    break;
                case '#':
                    result += '3';
                    break;
                case '$':
                    result += '4';
                    break;
                default:
                    result += currentElement.toLowerCase();
                    break;
            }

        }

        return result;
    }

}