class PurchaseOrder {
    constructor(id, type, date, status, totalAmount, productMissing) {
        this.purchaseOrderID = id;
        this.purchaseOrderType = type;
        this.purchaseOrderDate = date;
        this.purchaseOrderStatus = status;
        this.purchaseOrderTotalAmount = totalAmount;
        this.purchaseOrderProductMissing = productMissing;
    }
}
