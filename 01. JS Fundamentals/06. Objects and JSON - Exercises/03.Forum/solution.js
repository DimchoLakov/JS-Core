function solve() {

    let buttons = document.querySelectorAll("button");

    let submitButton = buttons[0];
    submitButton.addEventListener("click", function (event) {
        // prevent submit button from sending the form(default action)
        event.preventDefault();

        let userInputs = document.querySelectorAll(".user-info input");
        let username = userInputs[0].value;
        let email = userInputs[2].value;

        let topicsArr = Array.from(document.querySelectorAll(".topics input"));
        let topics = topicsArr
            .filter(x => x.checked)
            .map(x => x.value)
            .join(" ");

        let tdUsername = document.createElement('td');
        tdUsername.textContent = username;
        let tdEmail = document.createElement('td');
        tdEmail.textContent = email;
        let tdTopics = document.createElement('td');
        tdTopics.textContent = topics;

        let tr = document.createElement('tr');
        tr.appendChild(tdUsername);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTopics);

        let tbody = document.querySelector("table tbody");
        tbody.appendChild(tr);

        // set input field values to ""
        userInputs.forEach(i => i.value = "");
        topicsArr.forEach(x => x.checked = false);
    });

    let searchButton = buttons[1];
    searchButton.addEventListener("click", function (event) {

        let searchStr = document.querySelectorAll("input")[7].value;
        let rows = Array.from(document.querySelector("table tbody").children);

        rows.forEach(el => el.style.visibility = "hidden");

        rows.filter(el => Array.from(el.children).some(x => x.textContent.includes(searchStr)))
            .forEach(el => el.style.visibility = "visible");

        /*for (let row of rows) {

            let rowChildren = Array.from(row.children);
            if (rowChildren.every(x => !x.textContent.includes(searchStr))) {
                row.style.visibility = "hidden";
            }

        }*/
    });
}