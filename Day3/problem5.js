let units = 10;

let costPerUnit = 150;

let totalChargePerMonth = (units * costPerUnit);
let month = 12;
let annaulPayment = totalChargePerMonth * month;
let discount = annaulPayment * 0.2;
let afterDiscount = annaulPayment - discount;

console.log(afterDiscount);
