document.addEventListener('DOMContentLoaded', () => {
  const refundButton = document.getElementById('refundButton');
  const returnFormButton = document.getElementById('viewReturnFormButton');
  const processPaymentButtom = document.getElementById('processPaymentButton');
  
  refundButton.addEventListener('click', () => {
      const refundPanel = document.createElement('div');
      refundPanel.classList.add('confirmation-panel');
      refundPanel.innerHTML = `<h3>Refunded!</h3>`;
      document.body.appendChild(refundPanel);
      // Hide the notification after a delay
      setTimeout(() => {
          document.body.removeChild(refundPanel);
      }, 5000); // Hide after 5 seconds
      
      // When the refund button is clicked, show the return form button
      returnFormButton.style.display = 'block';

  returnFormButton.addEventListener('click', () => {
    window.location.href = "ReturnDocumentationPage.html";
  })
  });

  processPaymentButton.addEventListener('click', () => {
    const processPaymentPanel = document.createElement('div');
    processPaymentPanel.classList.add('confirmation-panel');
    processPaymentPanel.innerHTML = `<h3>Payment Processed!</h3>`;
    document.body.appendChild(processPaymentPanel);
    // Hide the notification after a delay
    setTimeout(() => {
        document.body.removeChild(processPaymentPanel);
    }, 5000); // Hide after 5 seconds
  });

  // Add event listener to the "Contact Customer" button
  const contactCustomerButton = document.getElementById('customerContactButton');
  contactCustomerButton.addEventListener('click', () => {
      // Create a panel with email address, body text box, and send button
      const panel = document.createElement('div');
      panel.classList.add('contact-panel');
      panel.innerHTML = `
          <h3>Contact Customer</h3>
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
          // Close the confirmation panel after 3 seconds
          setTimeout(() => {
              document.body.removeChild(confirmationPanel);
          }, 5000);
      });
})
})