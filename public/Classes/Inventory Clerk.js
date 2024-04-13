class Employee {
    constructor(id, firstName, lastName, dateOfBirth, hireDate, address, type, department, email, phoneNumber, hourlyRate) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._dateOfBirth = dateOfBirth;
        this._hireDate = hireDate;
        this._address = address;
        this._type = type;
        this._department = department;
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._hourlyRate = hourlyRate;
    }
}

class InventoryClerk extends Employee {
    constructor(id, firstName, lastName, dateOfBirth, hireDate, address, type, department, email, phoneNumber, hourlyRate, systemAdmin, inventoryAssigned, systemUsername, systemPassword) {
        super(id, firstName, lastName, dateOfBirth, hireDate, address, type, department, email, phoneNumber, hourlyRate);
        this.employeeID = id;
        this._systemAdmin = systemAdmin;
        this._inventoryAssigned = inventoryAssigned;
        this._systemUsername = systemUsername;
        this._systemPassword = systemPassword;
    }

    updateInventory() {
        // Update inventory logic
        console.log("Inventory updated.");
    }

    evaluateInventorySpace() {
        // Evaluate inventory space logic
        console.log("Inventory space evaluated.");
    }

    createTransfer() {
        // Create transfer logic
        console.log("Transfer created.");
    }

    contactsShippingDepartment() {
        // Contact shipping department logic
        console.log("Shipping department contacted.");
    }

    notifySupplier() {
        // Notify supplier logic
        console.log("Supplier notified.");
    }

    chooseShippingDepartment() {
        // Choose shipping department logic
        console.log("Shipping department chosen.");
    }

    createRefusalEmail() {
        // Create refusal email logic
        console.log("Refusal email created.");
    }

    sendRefusalEmail() {
        // Send refusal email logic
        console.log("Refusal email sent.");
    }

    updateOrderStatus() {
        // Update order status logic
        console.log("Order status updated.");
    }

    scanProduct() {
        // Scan product logic
        console.log("Product scanned.");
    }

    issueRefund() {
        // Issue refund logic
        console.log("Refund issued.");
    }

    returnItems() {
        // Return items logic
        console.log("Items returned.");
    }

    findOrder() {
        // Find order logic
        console.log("Order found.");
    }

    searchProduct() {
        // Search product logic
        console.log("Product searched.");
    }

    receiveOrder() {
        // Receive order logic
        console.log("Order received.");
    }

    verifiesOrder() {
        // Verify order logic
        console.log("Order verified.");
    }

    selectProduct() {
        // Select product logic
        console.log("Product selected.");
    }
}