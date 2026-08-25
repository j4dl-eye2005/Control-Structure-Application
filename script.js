function formatMoney(value) {
    return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const customerName = prompt("Enter the customer's name:");

let numProducts = Number(prompt("How many products will you purchase?"));

while (isNaN(numProducts) || numProducts <= 0 || !Number.isInteger(numProducts)) {
    numProducts = Number(prompt("Invalid input. Enter a valid number of products:"));
}

let subtotal = 0;
let productList = "";

for (let i = 1; i <= numProducts; i++) {
    let productName = prompt(`Enter product name for item #${i}:`);

    let price = parseFloat(prompt(`Enter price for ${productName}:`));

    while (isNaN(price) || price <= 0) {
        price = parseFloat(prompt(`Invalid price. Enter a valid positive price for ${productName}:`));
    }

    let quantity = Number(prompt(`Enter quantity for ${productName}:`));

    while (isNaN(quantity) || quantity <= 0 || !Number.isInteger(quantity)) {
        quantity = Number(prompt(`Invalid quantity. Enter a valid positive quantity for ${productName}:`));
    }

    const itemAmount = price * quantity;
    subtotal += itemAmount;

    productList += `${i}. ${productName}\n`;
    productList += `   Price: ₱${formatMoney(price)}\n`;
    productList += `   Quantity: ${quantity}\n`;
    productList += `   Amount: ₱${formatMoney(itemAmount)}\n\n`;
}

let discountRate = 0;

if (subtotal >= 5000) {
    discountRate = 10;
} else if (subtotal >= 3000) {
    discountRate = 7;
} else if (subtotal >= 1000) {
    discountRate = 5;
} else {
    discountRate = 0;
}

const discountAmount = subtotal * (discountRate / 100);

let deliveryOption = prompt("Select a delivery option:\n1 - Store Pickup\n2 - Standard Delivery\n3 - Express Delivery");

while (deliveryOption !== "1" && deliveryOption !== "2" && deliveryOption !== "3") {
    deliveryOption = prompt("Invalid option. Enter 1, 2, or 3:");
}

let deliveryType = "";
let deliveryFee = 0;

switch (deliveryOption) {
    case "1":
        deliveryType = "Store Pickup";
        deliveryFee = 0;
        break;
    case "2":
        deliveryType = "Standard Delivery";
        deliveryFee = 80;
        break;
    case "3":
        deliveryType = "Express Delivery";
        deliveryFee = 150;
        break;
}

const finalAmount = subtotal - discountAmount + deliveryFee;

const output = `MINI STORE CHECKOUT SYSTEM\n\nCustomer: ${customerName}\n\n${productList}ORDER SUMMARY\nSubtotal: ₱${formatMoney(subtotal)}\nDiscount Rate: ${discountRate}%\nDiscount Amount: ₱${formatMoney(discountAmount)}\nDelivery Type: ${deliveryType}\nDelivery Fee: ₱${formatMoney(deliveryFee)}\nFinal Amount: ₱${formatMoney(finalAmount)}`;

console.log(output);
document.getElementById("output").textContent = output;
