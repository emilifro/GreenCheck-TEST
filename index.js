// bakery_shop/index.js - Main entry point for the bakery shop system
const {bakeCake, listInventory} = require("./Kitchen");
const {takeOrder, listOrders, fulfillOrders} = require("./Orders");

console.log("Welcome to the Bakery Shop!");

takeOrder("Chocolate Cake", 2);
takeOrder("Vanilla Cupcake", 5);
takeOrder("Strawberry Muffin", 3);

bakeCake("Chocolate Cake", 2);
bakeCake("Vanilla Cupcake", 5);
bakeCake("Strawberry Muffin", 3);

console.log("Current Inventory:");
listInventory();

console.log("Current Orders:");
listOrders();

console.log("Fulfilling orders...");
fulfillOrders();

