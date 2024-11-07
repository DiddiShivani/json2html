export default function json2html(data) {
    let html = `<table data-user="diddishivani94@gmail.com">
    <thead>
        <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
    </thead>
    <tbody>`;

    data.forEach(item => {
        html += `<tr>`;
        html += `<td>${item.Name}</td><td>${item.Age}</td><td>${item.Gender || ''}</td>`;
        html += `</tr>`;
    });

    html += `</tbody></table>`;

    return html;
}
