alert("MINI STORE CHECKOUT SYSTEM");

const customerName = prompt("Enter customer's name:");

let numProducts = Number(prompt("How many products will you purchase?"));
while (isNaN(numProducts) || numProducts <= 0 || !Number.isInteger(numProducts)) {
    let input = prompt("Invalid input. Please enter a valid number of products:");
    if (input === null) break;
    numProducts = Number(input);
}

let subtotal = 0;
let orderDetails = "";

for (let i = 1; i <= numProducts; i++) {
    const productName = prompt(`Enter product name for item #${i}:`);
    if (productName === null) break;

    let priceInput = prompt(`Enter price for "${productName}":`);
    if (priceInput === null) break;
    let price = parseFloat(priceInput);
    while (isNaN(price) || price <= 0) {
        priceInput = prompt(`Invalid price. Enter a valid positive price for "${productName}":`);
        if (priceInput === null) break;
        price = parseFloat(priceInput);
    }
    if (priceInput === null) break;

    let quantityInput = prompt(`Enter quantity for "${productName}":`);
    if (quantityInput === null) break;
    let quantity = Number(quantityInput);
    while (isNaN(quantity) || quantity <= 0 || !Number.isInteger(quantity)) {
        quantityInput = prompt(`Invalid quantity. Enter a valid positive quantity for "${productName}":`);
        if (quantityInput === null) break;
        quantity = Number(quantityInput);
    }
    if (quantityInput === null) break;

    const itemAmount = price * quantity;
    subtotal += itemAmount;

    orderDetails += `${i}. ${productName}\n`;
    orderDetails += `   Price: ₱${formatNumber(price)}\n`;
    orderDetails += `   Quantity: ${quantity}\n`;
    orderDetails += `   Amount: ₱${formatNumber(itemAmount)}\n\n`;
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

let deliveryOption = prompt(
    "Select a delivery option:\n1 - Store Pickup (₱0)\n2 - Standard Delivery (₱80)\n3 - Express Delivery (₱150)"
);

while (deliveryOption !== "1" && deliveryOption !== "2" && deliveryOption !== "3") {
    if (deliveryOption === null) break;
    deliveryOption = prompt(
        "Invalid option. Please select a valid delivery option:\n1 - Store Pickup (₱0)\n2 - Standard Delivery (₱80)\n3 - Express Delivery (₱150)"
    );
}

let deliveryFee = 0;
let deliveryType = "";

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

const orderSummary = `MINI STORE CHECKOUT SYSTEM

Customer: ${customerName}

${orderDetails}ORDER SUMMARY
Subtotal: ₱${formatNumber(subtotal)}
Discount Rate: ${discountRate}%
Discount Amount: ₱${formatNumber(discountAmount)}
Delivery Type: ${deliveryType}
Delivery Fee: ₱${formatNumber(deliveryFee)}
Final Amount: ₱${formatNumber(finalAmount)}`;

alert(orderSummary);
console.log(orderSummary);

function formatNumber(num) {
    return num.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
