class CEO {
    constructor(id, firstName, lastName, email, address, phoneNumber, username, password) {
        this.ceoID = id;
        this.ceoFirstName = firstName;
        this.ceoLastName = lastName;
        this.ceoEmail = email;
        this.ceoAddress = address;
        this.ceoPhoneNumber = phoneNumber;
        this.ceoUsername = username;
        this.ceoPassword = password;
    }
}

function Login() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
    
        // Get username and password input values
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
    
        // Read the JSON file
        fetch('/userData.json')
        .then(response => response.json())
        .then(users => {
            
            var user = users.find(user => user.username === username && user.password === password);
            if (user) {
                alert("Login successful!");
                window.location.href = "HomePage.html"
            } else {
                alert("Invalid username or password. Please try again.");
            }
        })
        .catch(error => {
            console.error('Error reading userData.json:', error);
            alert("An error occurred. Please try again later.");
        });
    });
}


function analyzeSalesTrends() {
    console.log("Currently reviewing the sales trends")
}

function calculatingReorderPoint(){
    console.log("Calculating the reorderpoint level for that product")
    //Reorder Point Calculation
}

function settingSafetyStockLevel(){
    console.log("Setting the safety stock level for the product")
}

function compareInventoryLevels(){
    console.log(`Comnparing the inventory level for product: ${productID}`)
}

function updateOnlineInventorySystem(){
    console.log("Updating the online inventory system")
}

function selectSupplier() {
    console.log("Selecting the supplier needed")
}

function contactSupplier() {
    console.log(`Contacting the supplier about ${reason}`)
}

function selectDefectiveProducts() {
    console.log(`Selecting the defective product: ${productID}`)
}

function prepareReturnDocumentation() {
    console.log(`Currently preparing the return documentation for order ${orderID}`)
}

function confirmsShipment(){
    console.log("Confirming shipment of goods")
}
