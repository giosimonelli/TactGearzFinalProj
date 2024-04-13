$(document).ready(function() {
    // Add click event listener to the Confirm Shipment button
    $("#confirm-shipment-btn").click(function() {
        // Change the status to Processing
        $("#return-status-select").val("Processing").change();
        $("#shipment-confirmed").text("Yes");
        $(this).text("Shipment has been confirmed").prop("disabled", true);
        var today = new Date();
        var dateString = today.toLocaleDateString();
        var newParagraph = $("<p>").text("Shipment confirmed on: " + dateString);
        
        $(".return-information").append(newParagraph);

        const confirmationPanel = document.createElement('div');
        confirmationPanel.classList.add('confirmation-panel');
        confirmationPanel.innerHTML = `
            <h3>Shipment Confirmed! Supplier has been alerted.</h3>
        `;
        document.body.appendChild(confirmationPanel);
        // Close the confirmation panel after 3 seconds
        setTimeout(() => {
            document.body.removeChild(confirmationPanel);
        }, 5000);
    });
});

