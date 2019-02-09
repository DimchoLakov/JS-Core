function solve() {
    let select = document.querySelector('#selectMenuTo');

    let binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';

    let hexadecimalOption = document.createElement('option');
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.textContent = 'Hexadecimal';

    select.appendChild(binaryOption);
    select.appendChild(hexadecimalOption);

    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', function() {
        let input = document.getElementById('input');

        if (input.value === ''){
            return;
        }

        let number = Number(input.value);

        let convertedValue = '';

        // decimal to binary
        function dec2bin(dec){
            return (dec >>> 0).toString(2);
        }

        let convertTo = select.options[select.selectedIndex].value;
        if (convertTo === 'binary'){
            convertedValue = dec2bin(number);
        }
        else if (convertTo === 'hexadecimal'){

            // decimal to hexadecimal
            convertedValue = number.toString(16);
            if (convertedValue.length % 2) {
                convertedValue = '0' + convertedValue;
            }
        }

        let result = document.getElementById('result');
        result.value = convertedValue.toUpperCase();
    })
}