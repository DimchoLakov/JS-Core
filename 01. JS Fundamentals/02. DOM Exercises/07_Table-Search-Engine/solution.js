function solve() {
    let searchButton = document.getElementById('searchBtn');

    searchButton.addEventListener('click', function () {
        let searchField = document.getElementById('searchField');
        let searchStr = searchField.value;
        if (searchStr === '') {
            return;
        }

        let regex = new RegExp(searchStr, 'i');

        let cells = Array.from(document.querySelectorAll('tbody tr td'));

        for (let cell of cells) {
            cell.parentNode.classList.remove('select');
        }

        for (let cell of cells) {
            let match = regex.exec(cell.textContent);
            if (match !== null) {
                cell.parentNode.classList.add('select');
            }
        }

        searchField.value = '';
    })
}