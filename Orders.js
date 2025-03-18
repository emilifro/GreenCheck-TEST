// bakery_shop/orders.js - Handles orders and order fulfillment

let orders = [];

function takeOrder(type, quantity) {
    orders.push({ type, quantity });
    console.log(`Order taken: ${quantity} ${type}(s)`);
}

function listOrders() {
    if (orders.length === 0) {
        console.log("No pending orders");
        return;
    }
    console.log("Pending Orders:");
    orders.forEach((order, index) => {
        console.log(`${index + 1}. ${order.quantity} ${order.type}(s)`);
    });
}

function fulfillOrders() {
    if (orders.length === 0) {
        console.log("No orders to fulfill");
        return;
    }
    console.log("Fulfilling all orders...");
    orders.forEach(order => {
        console.log(`Fulfilled: ${order.quantity} ${order.type}(s)`);
    });
    orders = [];
    console.log("All orders fulfilled!");
}

module.exports = {
    takeOrder,
    listOrders,
    fulfillOrders
};
