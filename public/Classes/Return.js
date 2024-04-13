class Return {
    constructor(id, returnFormID, orderID, returnDate, returnReason) {
        this._returnID = id;
        this._returnFormID = returnFormID;
        this._orderID = orderID;
        this._returnDate = returnDate;
        this._returnReason = returnReason;
    }
}

function sendReturnInformation(){
    console.log("Sending the return information")
    alert(`Sending the ${retunrInformation} to the client`)
}

function updateOrderStatus(){
    console.log("Updating the order status")
}
