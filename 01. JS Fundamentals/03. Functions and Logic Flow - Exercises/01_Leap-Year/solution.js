function leapYear() {

    let checkButton = document.querySelectorAll('button')[0];
    checkButton.addEventListener('click', () => {

        let input = document.querySelector('#exercise input[type=number]');
        let year = Number(input.value);
        let h2 = document.querySelector('#year h2');
        let divResult = document.querySelector('#year div');

        if (isLeapYear(year)) {
            h2.textContent = 'Leap Year';
        } else {
            h2.textContent = 'Not Leap Year';
        }

        divResult.textContent = year.toString();

        input.value = '';
    });


    function isLeapYear(year) {
        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    }
}