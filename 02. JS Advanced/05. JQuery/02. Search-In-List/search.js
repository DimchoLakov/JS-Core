function search() {
    let searchStr = $('#searchText').val();
    let towns = $('#towns')
        .children();
    for (let town of towns) {
        console.log(town.textContent);
    }
    console.log(towns);
}