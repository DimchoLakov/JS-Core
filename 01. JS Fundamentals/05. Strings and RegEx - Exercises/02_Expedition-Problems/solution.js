function solve() {
    let keyWord = document.querySelector('#str').value;
    let input = document.querySelector('#text').value;

    let pattern = /(north|east).*?(\d{2})[^,]*?(\,)[^,]*?(\d{6}).*?/gmi;

    let regex = new RegExp(pattern);
    let matches;

    let east = '';
    let north = '';

    while ((matches = regex.exec(input)) !== null) {
        if (matches[1].toLowerCase() === 'east') {
            east = `${matches[2]}.${matches[4]} E`;
        } else if (matches[1].toLowerCase() === 'north') {
            north = `${matches[2]}.${matches[4]} N`;
        }
    }

    let messagePattern = `(${keyWord}){1}(.+)(${keyWord}){1}`;
    let regexMessage = new RegExp(messagePattern, 'gmi');
    let messageMatch = regexMessage.exec(input);
    let message = `Message: ${messageMatch[2]}`;

    let northP = document.createElement('p');
    northP.textContent = north;
    let eastP = document.createElement('p');
    eastP.textContent = east;
    let messageP = document.createElement('p');
    messageP.textContent = message;

    let spanResult = document.querySelector('#result');
    spanResult.appendChild(northP);
    spanResult.appendChild(eastP);
    spanResult.appendChild(messageP);
}