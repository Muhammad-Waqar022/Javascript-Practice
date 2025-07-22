// Shopping Cart with Discount Calculator//

const products = [
    { name: "Shampoo", price: 200, quantity: 0 },
    { name: "Soap", price: 100, quantity: 0 },
    { name: "Toothpaste", price: 150, quantity: 0 }
];

products[0].quantity = Number(prompt("Enter quantity for Shampoo:"));
products[1].quantity = Number(prompt("Enter quantity for Soap:"));
products[2].quantity = Number(prompt("Enter quantity for Toothpaste:"));

let totalProduct1 = products[0].price * products[0].quantity;
let totalProduct2 = products[1].price * products[1].quantity;
let totalProduct3 = products[2].price * products[2].quantity;

let totalBill = totalProduct1 + totalProduct2 + totalProduct3;

let finalBill = totalBill;
let discount = 0;

if(totalBill > 1000){
    discount = totalBill * 0.20;
    finalBill = totalBill - discount;
}
else if(totalBill > 500){
    discount = totalBill * 0.10;
    finalBill = totalBill - discount;
}

console.log(`
Order Summary:
${products[0].name} x ${products[0].quantity}
${products[1].name} x ${products[1].quantity}
${products[2].name} x ${products[2].quantity}

Total Price: ${totalBill}
Discount: ${discount}
Final Price: ${finalBill}
`);

console.log((totalBill >= 500) ? "Thanks for shopping with us!" : "Buy more to get discounts!");
