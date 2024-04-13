class Employee {
    constructor(id, firstName, lastName, dateOfBirth, hireDate, address, type, department, email, phoneNumber, hourlyRate) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.hireDate = hireDate;
        this.address = address;
        this.type = type;
        this.department = department;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.hourlyRate = hourlyRate;
    }
}

class CustomerService extends Employee {
    constructor(id, firstName, lastName, dateOfBirth, hireDate, address, type, department, email, phoneNumber, hourlyRate, customerServiceNumber) {
        super(id, firstName, lastName, dateOfBirth, hireDate, address, type, department, email, phoneNumber, hourlyRate);
        this._customerServiceNumber = customerServiceNumber;
    }

    contactsCustomer() {
        console.log("Customer contacted.");
    }

    receivesNotification() {
        console.log("Notification received.");
    }

    updateInventorySystem() {
        console.log("Inventory system updated.");
    }
}