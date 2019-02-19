function validate() {
    let getEGNButton = document.querySelector('#exercise div button');

    getEGNButton.addEventListener('click', () => {
        let year = document.querySelector('#exercise td #year');
        if (Number(year.value) < 1900 || Number(year.value) > 2100) {
            return;
        }
        let month = document.querySelector('#exercise td #month');
        let date = document.querySelector('#exercise td #date');
        let maleRadioButton = document.querySelector('#exercise td #male');
        let femaleRadioButton = document.querySelector('#exercise td #female');
        let genderCode = maleRadioButton.checked ? 2 : 1;
        let regionCode = document.querySelector('#exercise td #region');
        if (Number(regionCode.value) < 43 || Number(regionCode.value) > 999) {
            return;
        }

        let yearAsStr = year.value.toString();
        let monthAsStr = month.selectedIndex.toString();
        let dateAsStr = date.value.toString();
        let regionCodeAsStr = regionCode.value.toString();;
        let genderCodeAsStr = genderCode.toString();

        let array = getArray(yearAsStr, monthAsStr, dateAsStr, regionCodeAsStr, genderCodeAsStr);
        let lastDigit = getLastDigit(array);
        array.push(lastDigit);

        let result = array.join("");
        let egnParagraph = document.querySelector('#exercise div p#egn');
        egnParagraph.textContent = `Your EGN is: ${result}`;

        year.value = '';
        month.selectedIndex = 0;
        date.value = '';
        regionCode.value = '';
        maleRadioButton.checked = false;
        femaleRadioButton.checked = false;
    });

    function getLastDigit(array) {
        let sum = 0;
        let weightPositions = [2, 4, 8, 5, 10, 9, 7, 3, 6];

        for (let i = 0; i < array.length; i++) {
            sum += array[i] * weightPositions[i];
        }

        sum = sum % 11;
        if (sum === 10 || sum === 0) {
            sum = 0;
        }

        return sum;
    }

    function getArray(year, month, date, regionalCode, genderCode) {
        let yearLastButOneDigit = Number(year[year.length - 2]);
        let yearLastDigit = Number(year[year.length - 1]);

        let monthLastButOneDigit = month.length > 1 ? 1 : 0;
        let monthLastDigit = Number(month[month.length - 1]);

        let dateLastButOneDigit = 0;
        if (date.length > 1) {
            dateLastButOneDigit = Number(date[date.length - 2]);
        }
        let dateLastDigit = Number(date[date.length - 1]);

        let regionalCodeFirstDigit = Number(regionalCode[0]);
        let regionalCodeSecondDigit = Number(regionalCode[1]);

        let genderCodeDigit = Number(genderCode);

        let array = [
            yearLastButOneDigit, yearLastDigit,
            monthLastButOneDigit, monthLastDigit,
            dateLastButOneDigit, dateLastDigit,
            regionalCodeFirstDigit, regionalCodeSecondDigit,
            genderCodeDigit
        ];

        return array;
    }
}