let splitBill=(amount,spiltIn=2)=>{
    let perHead=Math.ceil(amount/spiltIn);
    return `Amount is ${amount}.\nEach person should pay Rs.${perHead}.`;
}
console.log(splitBill(500,3));