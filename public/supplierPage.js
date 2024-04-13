const refreshSuppliers = async () => {
    try {
        const response = await fetch('supplierDB.json');
        const supplierData = await response.json();
        const supplier = supplierData[0]; // Assuming there is only one supplier in the array

        const supplierDetailsContainer = document.querySelector('.supplier-details');

        const supplierHTML = `
            <h2>Supplier Details</h2>
            <p><strong>ID:</strong> ${supplier.supplierId}</p>
            <p><strong>Name:</strong> ${supplier.supplierName}</p>
            <p><strong>Contact Person:</strong> ${supplier.contactPerson}</p>
            <p><strong>Email:</strong> ${supplier.email}</p>
            <p><strong>Phone:</strong> ${supplier.phone}</p>
            <p><strong>Address:</strong> ${supplier.street}, ${supplier.city}, ${supplier.state} ${supplier.postalCode}, ${supplier.country}</p>
        `;

        supplierDetailsContainer.innerHTML = supplierHTML;

        // Add event listener to the "Contact Supplier" button
        const contactSupplierButton = document.getElementById('ContactSupplierBtn');
        contactSupplierButton.addEventListener('click', () => {
            // Create a panel with email address, body text box, and send button
            const panel = document.createElement('div');
            panel.classList.add('contact-panel');
            panel.innerHTML = `
                <h3>Contact Supplier</h3>
                <button class="close-button">X</button>
                <label for="email">To:</label>
                <input type="text" id="email" value="${supplier.email}" readonly><br><br>
                <label for="message">Message:</label><br>
                <textarea id="message" rows="4" cols="50"></textarea><br><br>
                <button id="send">Send</button>
            `;
            document.body.appendChild(panel);

            // Add event listener to the close button
            const closeButton = panel.querySelector('.close-button');
            closeButton.addEventListener('click', () => {
                document.body.removeChild(panel);
            });

            // Add event listener to the send button
            const sendButton = panel.querySelector('#send');
            sendButton.addEventListener('click', () => {
                // Remove the current panel
                document.body.removeChild(panel);
                // Open a new panel indicating that the email has been sent
                const confirmationPanel = document.createElement('div');
                confirmationPanel.classList.add('confirmation-panel');
                confirmationPanel.innerHTML = `
                    <h3>Email Sent!</h3>
                `;
                document.body.appendChild(confirmationPanel);
                // Close the confirmation panel after 3 seconds
                setTimeout(() => {
                    document.body.removeChild(confirmationPanel);
                }, 5000);
            });
        });
    } catch (error) {
        console.error('Error fetching suppliers:', error);
        document.getElementById('contentDiv').innerHTML = '<h2>Error fetching suppliers</h2>';
    }
};

const redirectToPurchaseOrderPage = () => {
    window.location.href = 'Purchase-OrderPage.html'; // Change 'another_page.html' to the desired HTML page
}

// Call the function to refresh suppliers when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    refreshSuppliers();
    document.getElementById('ReturnButton').addEventListener('click', redirectToPurchaseOrderPage);
});



