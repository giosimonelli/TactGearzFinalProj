class Supplier {
    constructor(id, companyName, description, contactName, address, phoneNumber, email, paymentTerms) {
        this._supplierID = id;
        this._supplierCompanyName = companyName;
        this._supplierDescription = description;
        this._supplierContactName = contactName;
        this._supplierAddress = address;
        this._supplierPhoneNumber = phoneNumber;
        this._supplierEmail = email;
        this._supplierPaymentTerms = paymentTerms;
    }

    replacesDefectiveProducts() {
        console.log("Replacing defective products with new products");
    }

    processReturnDocumentation() {
        console.log("Processing the return documentation");
    }

    receivePurchaseOrder() {
        console.log(`Purchase order received: ${purchaseOrderNumber}`);
    }

    confirmPurchaseOrder() {
        console.log("Confirming the purchase order");
        let purchaseOrderNumber = prompt("Please enter the purchase order number to confirm:");
        console.log(`Purchase order ${purchaseOrderNumber} confirmed successfully.`);
    }

    confirmPurchaseOrderError() {
        console.log("Confirming purchase order error");
    }

    fillOutPurchaseOrderInvoice() {
        console.log("Filling out purchase order invoice");
    }

    notifyInventoryClerk() {
        console.log("Notifying inventory clerk");
    }
}
