class Customer {
    constructor(id, firstName, lastName, phoneNumber, address, shippingAddress, email, emailSubscription) {
        this.customerID = id;
        this.customerFirstName = firstName;
        this.customerLastName = lastName;
        this.customerPhoneNumber = phoneNumber;
        this.customerAddress = address;
        this.customerShippingAddress = shippingAddress;
        this.customerEmail = email;
        this.customerEmailSubscription = emailSubscription;
    }

    fillOut() {
        // Fill out logic
        console.log("Form filled out.");
    }

    purchaseProduct() {
        // Purchase product logic
        console.log("Product purchased.");
    }

    createRequest() {
        // Create request logic
        console.log("Request created.");
    }

    returnsItem() {
        // Return item logic
        console.log("Item returned.");
    }
}