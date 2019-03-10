function solve(arr) {

    let result = "<table>\n";
    result += "\t<tr><th>name</th><th>score</th></tr>\n";

    let objArr = JSON.parse(arr);

    for (let obj of objArr) {
        result += `\t<tr><td>${escapeHtml(obj.name)}</td><td>${escapeHtml(obj.score)}</td></tr>\n`
    }

    result += "</table>";

    console.log(result);

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
    '[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]'
);