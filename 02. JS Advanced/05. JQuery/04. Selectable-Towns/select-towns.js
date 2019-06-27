function attachEvents() {
    $('#items li').on('click', function () {
        if ($(this).attr('data-selected') === 'true') {
            $(this).attr('data-selected', false).css('background-color', '#808080');
        } else {
            $(this).attr('data-selected', true).css('background-color', '#DDD');
        }
    });

    $('#showTownsButton').on('click', showTowns);

    function showTowns() {
        let selectedTowns = $('#items li[data-selected]').toArray().map(x => x.textContent).join(', ');
        let townsDiv = $('#selectedTowns');
        townsDiv.text(selectedTowns);
    }
}