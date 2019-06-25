function search() {
    let searchStr = $('#searchText').val();
    if (searchStr === '') {
        return;
    }

    $('#towns li').css('font-weight', 'normal');

    let matchedTowns = $(`#towns li:contains(${searchStr})`);
    matchedTowns.css('font-weight', 'bold');
    $('#result').text(`${matchedTowns.length} matches found`);
}