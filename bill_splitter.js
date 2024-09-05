let bill = 250.00;
let tip = bill <= 300 ? bill*0.15 : bill*0.2;
let total = bill+tip;

console.log(`Your bill was: $${bill}`);
console.log(`Your tip amount is: $${tip}`);  
console.log(`This brings your total to: $${total}`); 

