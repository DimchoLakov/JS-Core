function initializeTable() {

    function createCountryWithCapital(country, capital) {

        if (country !== '' && capital !== '') {
            let table = $('#countriesTable').append();

            let row = $('<tr>');

            let countryAndCapital = $(`<td>${country}</td><td>${capital}</td>`);

            let actions = $('<td>')
                .append($('<a href="#">[Up]</a>').click(moveUp))
                .append($('<a href="#">[Down]</a>').click(moveDown))
                .append($('<a href="#">[Delete]</a>').click(del));

            row.append(countryAndCapital, actions);

            table.append(row);

            fixLinks();
        }
    }

    function moveUp() {
        let currentRow = $(this).parent().parent();
        let previousRow = currentRow.prev();
        currentRow.insertBefore(previousRow);

        fixLinks();
    }

    function moveDown() {
        let currentRow = $(this).parent().parent();
        let nextRow = currentRow.next();
        currentRow.insertAfter(nextRow);

        fixLinks();
    }

    function del() {
        $(this).closest('tr').remove();

        fixLinks();
    }


    $('#createLink').click(function () {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();

        createCountryWithCapital(country, capital);
    });

    function fixLinks() {
        $('a').show();

        $('#countriesTable tbody tr:nth-child(3) a:first-child').hide();
        $('#countriesTable tbody tr:last-child a:nth-child(2)').hide();
    }

    createCountryWithCapital('Bulgaria', 'Sofia');
    createCountryWithCapital('Germany', 'Berlin');
    createCountryWithCapital('Russia', 'Moscow');
}