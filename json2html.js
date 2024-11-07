export default function json2html(data) {
    // Start the table with the data-user attribute
    let html = '<table data-user="diddishivani94@gmail.com">';

    // Define the fixed headers
    const headers = ["Name", "Age", "Gender"];

    // Generate the header row
    html += '<thead><tr>';
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += '</tr></thead>';

    // Generate the body rows
    html += '<tbody>';
    data.forEach(row => {
        html += '<tr>';
        headers.forEach(header => {
            html += `<td>${row[header] || ''}</td>`; // Leave cell empty if data is missing
        });
        html += '</tr>';
    });
    html += '</tbody>';

    // Close the table
    html += '</table>';

    return html;
}
