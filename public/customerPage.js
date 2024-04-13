const refreshCustomers = async () => {
    try {
      const response = await fetch('customerDB.json');
      const customersData = await response.json();
      const customersHTML = customersData.map(customer => `
        <tr>
          <td>${customer.id}</td>
          <td>${customer.firstname}</td>
          <td>${customer.lastname}</td>
          <td>${customer.phonenumber}</td>
          <td>${customer.address}</td>
          <td>${customer.shippingaddress}</td>
          <td>${customer.email}</td>
          <td>${customer.subscription}</td>
        </tr>
      `).join('');
  
      document.getElementById('customerTableBody').innerHTML = customersHTML;
  
      // Add event listener to rows for redirection
      addRedirectionEventListeners();
  
    } catch (error) {
      console.error('Error fetching customers:', error);
      // Display an error message in the UI
      document.getElementById('customerTableBody').innerHTML = '<tr><td colspan="8">Error fetching customers</td></tr>';
    }
  };
  
  // Call the refresh function on page load
  refreshCustomers();
  
  // Function to add redirect event listeners
  function addRedirectionEventListeners() {
    const tableRows = document.querySelectorAll('#customerTableBody tr');
    tableRows.forEach(row => {
      row.addEventListener('click', redirectToAnotherPage);
    });
  }
  
  // Redirect function (implementation needed) 
  function redirectToAnotherPage() {
    // Implement your logic to redirect to another page 
    // Example:
    const row = this; 
    const customerIdId = row.querySelector('td:first-child').textContent;
    window.location.href = `customer-details.html?id=${customerId}`; 
  }