// Function to refresh products from productDB.json
const refreshProducts = async () => {
    try {
        const response = await fetch('productDB.json');
        const productsData = await response.json();
        const productsHTML = productsData.map(product => `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.color}</td>
                <td>${product.size}</td>
                <td>${product.price}</td>
                <td>${product.barcode}</td>
                <td>${product.weight}</td>
                <td>${product.category}</td>
                <td>${product.quantityinstore}</td>
                <td>${product.quantityinwarehouse}</td>
                <td>${product.safetystocklevel}</td>
            </tr>
        `).join('');
        document.getElementById('productTableBody').innerHTML = productsHTML;

        // Add event listener to the first row of the table
        const firstRow = document.querySelector('#productTableBody tr:first-child');
        firstRow.addEventListener('click', redirectToAnotherPage);
    } catch (error) {
        console.error('Error fetching products:', error);
        document.getElementById('contentDiv').innerHTML = '<h2>Error fetching products</h2>';
    }
};

// Function to handle redirection to another page
const redirectToAnotherPage = () => {
    window.location.href = 'ProductPage1.html'; // Change 'another_page.html' to the desired HTML page
};

// Function to review stock level
const reviewStockLevel = () => {
    const productsTable = document.querySelector('#productTableBody');
    if (!productsTable) {
        alert("No products table found!");
        return;
    }
    const rows = productsTable.querySelectorAll('tr');
    let safetyStockMet = true;
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].querySelectorAll('td');
        const quantityInStore = parseInt(cells[8].textContent);
        const quantityInWarehouse = parseInt(cells[9].textContent);
        const safetyStockLevel = parseInt(cells[10].textContent);
        if (quantityInStore + quantityInWarehouse < safetyStockLevel) {
            safetyStockMet = false;
            break;
        }
    }
    safetyStockMet ? alert('Safety stock level is met for all products!') : alert('Safety stock level is not met for some products!');
};

// Function to add a product
const addProduct = async () => {
    try {
        const purchaseOrderDetails = ['ID', 'name', 'color', 'size', 'price', 'barcode', 'weight', 'category', 'quantity in-store', 'quantity in warehouse', 'safety stock level'];
        const newPurchaseOrder = {};
        
        purchaseOrderDetails.forEach(detail => {
            const value = prompt(`Enter ${detail}:`);
            newPurchaseOrder[detail.toLowerCase().replace(/\s+/g, '_')] = value;
        });

        // Save new purchase order to JSON file
        const response = await fetch('productDB.json');
        const purchaseOrdersData = await response.json();
        
        purchaseOrdersData.push(newPurchaseOrder);

        const updatedData = JSON.stringify(purchaseOrdersData, null, 2);
        await fetch('http://localhost:3000/update', {
            method: 'POST',
            body: updatedData,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        alert('Product added successfully.');

    } catch (error) {
        console.error('Error adding purchase order:', error);
        alert('Error adding purchase order. Please try again.');
    }
    refreshProducts();
};

// Function to show toast
const showToast = message => {
    const toastContainer = document.getElementById('toast-container');
    toastContainer.textContent = message;
    toastContainer.style.display = 'block';
    setTimeout(() => {
        toastContainer.style.display = 'none';
    }, 4000);
};


document.addEventListener('DOMContentLoaded', () => {
    refreshProducts();
    document.getElementById('reviewStockLevelBtn').addEventListener('click', reviewStockLevel);
    document.getElementById('addProductBtn').addEventListener('click', addProduct);
    document.getElementById('calcReorderPointBtn').addEventListener('click', () => {
        const reorderPoint = calculateReorderPoint(5, 1, 2, 1.645);
        alert(`The Reorder Point for the first product is: ${reorderPoint}`);
    });
});

