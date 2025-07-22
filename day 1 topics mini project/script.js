'use strict';
// Price of 3 toys
const toy1 = 100;
const toy2 = 130;
const toy3 = 150;


// Quantity of toys;
let qty1=1;
let qty2=2;
let qty3=1;

// Price Calculation
let price1= toy1*qty1;
let price2= toy2*qty2;
let price3= toy3*qty3;

// total Price
let totalPrice= price1+price2+price3;

// discount if bill is over 500
let discountedPrice=0;
if(totalPrice > 500){
    discountedPrice=totalPrice * 0.10;
}

let finalBill= totalPrice-discountedPrice;

console.log(`Toy Store Bill Summary:

Total Bill: ${totalPrice}
Discount: ${discountedPrice}
Final Bill to Pay: ${finalBill}`)