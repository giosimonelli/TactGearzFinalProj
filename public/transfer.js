document.addEventListener("DOMContentLoaded", function() {
    // Function to handle adding product to table
    function addProductToTable() {
        // Get selected product and quantity values
        var product = document.getElementById("product").value;
        var quantity = document.getElementById("quantity").value;

        // Create new table row
        var newRow = document.createElement("tr");

        // Create table data cells for product and quantity
        var productCell = document.createElement("td");
        productCell.textContent = product;
        var quantityCell = document.createElement("td");
        quantityCell.textContent = quantity;

        // Append cells to the new row
        newRow.appendChild(productCell);
        newRow.appendChild(quantityCell);

        // Append the new row to the table body
        document.getElementById("transferTableBody").appendChild(newRow);
    }

    // Add event listener to the "Add Product" button
    document.getElementById("addTransferButton").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        addProductToTable(); // Call function to add product to table

    transferTable.style.display = 'block';
    });

    const transferButton = document.getElementById('transferButton');
        
        transferButton.addEventListener('click', (e) => {
            e.preventDefault();
            const transferPanel = document.createElement('div');
            const shippingDepartment = document.getElementById('shippingDepartment').value;
            
            transferPanel.classList.add('confirmation-panel');
            transferPanel.innerHTML = `<h3>Transfer sent to ${shippingDepartment}!</h3>`;
            
            document.body.appendChild(transferPanel);
            // Hide the notification after a delay
           
            setTimeout(() => {
                document.body.removeChild(transferPanel);
            }, 5000); // Hide after 5 seconds
        });
     // Add event listener to the "Contact Shipping Department" button
     const contactShippingDepartmentButton = document.getElementById('contactButton');
     contactShippingDepartmentButton.addEventListener('click', (e) => {
        e.preventDefault();
         // Create a panel with email address, body text box, and send button
         const panel = document.createElement('div');
         panel.classList.add('contact-panel');
         panel.innerHTML = `
             <h3>Contact Shipping Department</h3>
             <button class="close-button">X</button>
             <label for="email">To:</label>
             <textarea id="email" rows="1" cols="50"></textarea><br><br>
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
             // Close the confirmation panel after 5 seconds
             setTimeout(() => {
                 document.body.removeChild(confirmationPanel);
             }, 5000);
         });
     });
});