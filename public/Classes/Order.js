class Order {
    constructor(orderID, customerID, orderType, orderDate, orderStatus, orderTotalAmount, cardNo, paymentStatus) {
        this.orderID = orderID;
        this.customerID = customerID;
        this.orderType = orderType;
        this.orderDate = orderDate;
        this.orderStatus = orderStatus;
        this.orderTotalAmount = orderTotalAmount;
        this.cardNo = cardNo;
        this.paymentStatus = paymentStatus;
    }
}
