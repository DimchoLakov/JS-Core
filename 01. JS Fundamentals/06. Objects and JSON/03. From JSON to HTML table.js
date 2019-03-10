function solve(input) {

    let table = "<table>\n";

    let objArr = JSON.parse(input);
    let keys = Object.keys(objArr[0]);

    table += "   <tr>";
    for (let key of keys) {

        table += `<th>${escapeHtml(key)}</th>`;

    }
    table += "</tr>\n";

    for (let obj of objArr) {

        table += "   <tr>";
        for (let key of keys) {


            table += `<td>${escapeHtml(obj[key])}</td>`;

        }
        table += "</tr>\n";

    }

    table += "</table>"

    return table;

    function escapeHtml(str) {
        str = str + "";
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}


solve(
    '[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'
);