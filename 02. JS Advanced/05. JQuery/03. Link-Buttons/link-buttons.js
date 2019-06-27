function attachEvents() {
        $('a.button').on('click', function () {
        $('a.button').removeClass('selected');
        $(this).addClass('selected');
    });
}