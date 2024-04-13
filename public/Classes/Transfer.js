class Transfer {
    constructor(id, amount, source, destination, dateInitiated, status, type, method) {
        this._transferID = id;
        this._transferAmount = amount;
        this._transferSource = source;
        this._transferDestination = destination;
        this._transferDateInitiated = dateInitiated;
        this._transferStatus = status;
        this._transferType = type;
        this._transferMethod = method;
    }

    sendToShippingDepartment() {
        // Send to shipping department logic
        console.log("Sent to shipping department.");
    }
}