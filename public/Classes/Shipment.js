class Shipment {
    constructor(id, type, cost, datePrepared, dateDelivered, dateReceived, address, invoiceNumber) {
        this.shipmentID = id;
        this.shippingType = type;
        this.shipmentCost = cost;
        this.shipmentDatePrepared = datePrepared;
        this.shipmentDateDelivered = dateDelivered;
        this.shipmentDateReceived = dateReceived;
        this.shipmentAddress = address;
        this.shipmentInvoiceNumber = invoiceNumber;
    }
}
