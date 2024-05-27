function showInterest(button) {
    alert("Button clicked!"); // Check if this alert appears
    const row = button.parentNode.parentNode;
    alert("Interested in property at " + row.cells[1].textContent);
}


function displayProperties() {
    const properties = JSON.parse(localStorage.getItem('properties'));
    const table = document.getElementById('propertyTable');
    clearTable(table); // Clear existing table content

    if (properties && properties.length > 0) {
        properties.forEach((property, index) => {
            const row = table.insertRow();
            row.insertCell(0).textContent = index + 1;
            row.insertCell(1).textContent = property.address;
            row.insertCell(2).textContent = property.area;
            row.insertCell(3).textContent = property.place;
            row.insertCell(4).textContent = property.squareFeet;
            row.insertCell(5).textContent = property.hospitalNearby;
            row.insertCell(6).textContent = property.collegeNearby;
            row.insertCell(7).textContent = property.bedrooms;
            row.insertCell(8).textContent = property.bathrooms;
            const actionCell = row.insertCell(9);
            const button = document.createElement('button');
            button.textContent = 'I am interested';
            button.onclick = function() {
                showInterest(this);
            };
            actionCell.appendChild(button);
        });
    } else {
        const row = table.insertRow();
        const cell = row.insertCell();
        cell.colSpan = 10;
        cell.textContent = 'No property data found.';
    }
}
function clearTable(table) {
    // Remove all rows except header
    for (let i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}

// Call the function to display property details on page load
displayProperties();
