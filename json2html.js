export default function json2html(data) {
    let html = '<table data-user="diddishivani94@gmail.com">';
    html += '<thead><tr>';
    const headers = Object.keys(data[0]);
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += '</tr></thead>';
    html += '<tbody>';
    data.forEach(row => {
        html += '<tr>';
        headers.forEach(header => {
            html += `<td>${row[header] || ''}</td>`; 
        });
        html += '</tr>';
    });
    html += '</tbody>';
    html += '</table>';
    return html;
}
