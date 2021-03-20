// import data from dat.js
const tableData = data;
// reference the HTML table using D3
var tbody = d3.select("tbody");
// build a function
function buildTable(data) {
    // Clear out existing data
    tbody.html("");
    
    // Next loop through each object in the data and append a row and ell for each value
    data.forEach ((dataRow) => {
        //  Append a row to the table body
        let row = tbody.append("tr"):

    // Loop through each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    );
    });
}