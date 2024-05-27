let propertyCount = 0;

        function addProperty() {
            propertyCount++;

            const property = {
               
                address: document.getElementById('address').value,
                area: document.getElementById('area').value,
                place: document.getElementById('place').value,
                squareFeet: document.getElementById('squareFeet').value,
                hospitalNearby: document.getElementById('hospitalNearby').value,
                collegeNearby: document.getElementById('collegeNearby').value,
                bedrooms: document.getElementById('bedrooms').value,
                bathrooms: document.getElementById('bathrooms').value
            };

            let properties = JSON.parse(localStorage.getItem('properties')) || [];
            properties.push(property);
            localStorage.setItem('properties', JSON.stringify(properties));

            addPropertyToTable(property);
            clearForm();
        }

        function addPropertyToTable(property) {
            const table = document.getElementById("propertyTable").getElementsByTagName('tbody')[0];
            const row = table.insertRow();

            row.insertCell(0).innerHTML = propertyCount;
            row.insertCell(1).innerHTML = property.address;
            row.insertCell(2).innerHTML = property.area;
            row.insertCell(3).innerHTML = property.place;
            row.insertCell(4).innerHTML = property.squareFeet;
            row.insertCell(5).innerHTML = property.hospitalNearby;
            row.insertCell(6).innerHTML = property.collegeNearby;
            row.insertCell(7).innerHTML = property.bedrooms;
            row.insertCell(8).innerHTML = property.bathrooms;
            const actionsCell = row.insertCell(9);

            const updateButton = document.createElement("button");
            updateButton.innerHTML = "Update";
            updateButton.onclick = function() { updateProperty(this); };
            actionsCell.appendChild(updateButton);

            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = "Delete";
            deleteButton.onclick = function() { deleteProperty(this); };
            actionsCell.appendChild(deleteButton);
        }

        function updateProperty(button) {
            const row = button.parentNode.parentNode;
            const cells = row.getElementsByTagName("td");

            document.getElementById("address").value = cells[1].innerHTML;
            document.getElementById("area").value = cells[2].innerHTML;
            document.getElementById("place").value = cells[3].innerHTML;
            document.getElementById("squareFeet").value = cells[4].innerHTML;
            document.getElementById("hospitalNearby").value = cells[5].innerHTML;
            document.getElementById("collegeNearby").value = cells[6].innerHTML;
            document.getElementById("bedrooms").value = cells[7].innerHTML;
            document.getElementById("bathrooms").value = cells[8].innerHTML;

            deleteProperty(button);
        }

        function deleteProperty(button) {
            const row = button.parentNode.parentNode;
            const index = row.rowIndex - 1;
            let properties = JSON.parse(localStorage.getItem('properties')) || [];
            properties.splice(index, 1);
            localStorage.setItem('properties', JSON.stringify(properties));
            row.parentNode.removeChild(row);
            propertyCount--;
        }

        function clearForm() {
            document.getElementById("address").value = "";
            document.getElementById("area").value = "";
            document.getElementById("place").value = "";
            document.getElementById("squareFeet").value = "";
            document.getElementById("hospitalNearby").value = "";
            document.getElementById("collegeNearby").value = "";
            document.getElementById("bedrooms").value = "";
            document.getElementById("bathrooms").value = "";
        }

        function loadProperties() {
            const properties = JSON.parse(localStorage.getItem('properties')) || [];
            properties.forEach(property => {
                propertyCount++;
                addPropertyToTable(property);
            });
        }
