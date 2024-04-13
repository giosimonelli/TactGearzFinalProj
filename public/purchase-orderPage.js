const refreshPurchaseOrder = async () => {
    try {
        const response = await fetch('purchaseOrderDB.json');
        const productsData = await response.json();
        const productsHTML = productsData.map(purchaseOrder => `
            <tr>
                <td>${purchaseOrder.id}</td>
                <td>${purchaseOrder.supplier_name}</td>
                <td>${purchaseOrder.date}</td>
                <td>${purchaseOrder.total}</td>
                <td>${purchaseOrder.items}</td>
                <td>${purchaseOrder.purchaseOrderStatus}</td>
            </tr>
        `).join('');
        document.getElementById('purchaseorderTableBody').innerHTML = productsHTML;

        // Add event listener to the first cell of the table header (if needed)
        const firstCell = document.querySelector('#purchaseorderTableBody td:first-child');
        const secondCellFirstRow = document.querySelector('#purchaseorderTableBody tr:first-child td:nth-child(2)');
        secondCellFirstRow.addEventListener('click', redirectToSupplierPage);
        

        firstCell.addEventListener('click', redirectToAnotherPage);

    } catch (error) {
        console.error('Error fetching products:', error);
        document.getElementById('contentDiv').innerHTML = '<h2>Error fetching products</h2>';
    }
};

const addPurchaseOrder = async () => {
    try {
        const panel = document.createElement('div');
        panel.classList.add('purchase-order-panel');
        panel.innerHTML = `
            <h3>Add Purchase Order</h3>
            <label for="id">ID:</label>
            <input type="text" id="id"><br>
            <label for="supplierName">Supplier Name:</label>
            
            <!-- Select Supplier function-->
            <select id="supplierName">
                <option value="Team 365">Team 365</option>
                <option value="BodyGuard Apparel">BodyGuard Apparel</option>
                <option value="Norfolk">Norfolk</option>
                <!-- Add more options as needed -->
            </select><br>

            <label for="date">Date:</label>
            <input type="date" id="date"><br>
            <label for="total">Total:</label>
            <input type="number" id="total"><br>
            <label for="itemName">Item:</label>
            <select id="itemName">
                <option value="SCAR-H CQB LICENSED MK-17">SCAR-H CQB LICENSED MK-17</option>
                <option value="AR OVERMOLDED ENHANCED PISTOL GRIP">AR OVERMOLDED ENHANCED PISTOL GRIP</option>
                <option value="V2 TACTICAL LONG SLEEVE SHIRT">V2 TACTICAL LONG SLEEVE SHIRT</option>
            </select><br>
            <label for="purchaseOrderStatus">Status:</label>
            <select id="purchaseOrderStatus">
                <option value="New">New</option>
                <option value="In Progress">Delivery in Progress</option>
                <option value="Received">Received</option>
            </select><br>

            <button id="savePurchaseOrderBtn">Save</button>
        `;
        document.body.appendChild(panel);

        // Add event listener to the save button
        const saveButton = panel.querySelector('#savePurchaseOrderBtn');
        saveButton.addEventListener('click', async () => {
            const newPurchaseOrder = {};
            newPurchaseOrder.id = panel.querySelector('#id').value;
            newPurchaseOrder.supplier_name = panel.querySelector('#supplierName').value;
            newPurchaseOrder.date = panel.querySelector('#date').value;
            newPurchaseOrder.total = panel.querySelector('#total').value;
            newPurchaseOrder.items = panel.querySelector('#itemName').value;
            newPurchaseOrder.purchaseOrderStatus = panel.querySelector('#purchaseOrderStatus').value;

            // Save new purchase order to JSON file
            const response = await fetch('http://localhost:3000/updatePurchaseOrder', {
                method: 'POST',
                body: JSON.stringify(newPurchaseOrder),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                alert('Purchase order added successfully.');
                document.body.removeChild(panel);
                refreshPurchaseOrder();
            } else {
                alert('Error adding purchase order. Please try again.');
            }
        });

    } catch (error) {
        console.error('Error adding purchase order:', error);
        alert('Error adding purchase order. Please try again.');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    refreshPurchaseOrder(); // Call this function first
    document.getElementById('addPurchaseOrderBtn').addEventListener('click', addPurchaseOrder);
});

const redirectToAnotherPage = () => {
    window.location.href = 'ProductPage1.html';
};

const redirectToSupplierPage = () => {
    window.location.href = 'Supplier.html';
}
