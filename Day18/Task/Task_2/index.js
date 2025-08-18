const nameElm = document.getElementById("nameInput");
const ageElm = document.getElementById("ageInput");
const roleElm = document.getElementById("roleInput");

function addRow(){
    let tableElm = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    newRow = tableElm.insertRow();

    const nameCell = newRow.insertCell(0);
    const ageCell = newRow.insertCell(1);
    const roleCell = newRow.insertCell(2);
    const actionCell = newRow.insertCell(3);
    nameCell.textContent = nameElm.value;
    ageCell.textContent = ageElm.value;
    roleCell.textContent = roleElm.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        const row = deleteBtn.parentElement.parentElement;
        row.parentElement.removeChild(row);
    };
    actionCell.appendChild(deleteBtn);

   
    document.getElementById("nameInput").value = "";
    document.getElementById("ageInput").value = "";
    document.getElementById("roleInput").value = "";

}