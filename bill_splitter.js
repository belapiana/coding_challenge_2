let bill = 30.00;
let tip = bill <= 300 && bill >= 50 ? bill*0.15 : bill*0.2;
let total = bill+tip;

console.log(`Your bill was: $${bill}`);
console.log(`Your tip amount is: $${tip}`);  
console.log(`This brings your total to: $${total}`); 

function calculateTip (a) {
return a <= 300 && a >= 50 ? a*0.15 : a*0.20 };

console.log (calculateTip (100));

let bills = [
    275, 40, 430, 125, 555, 44
];

const tips = bills.map(bills => calculateTip(bills));
console.log (tips);

const totals = bills.map (bills, index => bills+tips[index]);
console.log (totals);
