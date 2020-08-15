/*
represented as whole numbers in cents
$10 will be represented as 1000
Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)

Create a function named calculateChange that takes in a total amount of a bill and the total 
cash given to pay that bill. Return a new object that describes the total amount of change 
for the cashier to give back. Omit any types of change that you shouldn't give back, i.e. if 
you don't give back a twenty dollar bill, don't include it in the results.
*/

const calculateChange = function(total, cash) {
  let changeInCents = cash - total;
  let changeDenominations = new Object();
    changeDenominations.twentyDollar = 0;
    changeDenominations.tenDollar = 0;
    changeDenominations.fiveDollar = 0;
    changeDenominations.twoDollar = 0;
    changeDenominations.oneDollar = 0;
    changeDenominations.quarter = 0;
    changeDenominations.dime = 0;
    changeDenominations.nickel = 0;
    changeDenominations.penny = 0;

  for (i = 0; changeInCents > 0; i++) {
    if (changeInCents >= 2000) {
      changeDenominations.twentyDollar += 1;
      changeInCents -= 2000;
    } else if (changeInCents >= 1000) {
      changeDenominations.tenDollar += 1;
      changeInCents -= 1000;
    } else if (changeInCents >= 500) {
      changeDenominations.fiveDollar += 1;
      changeInCents -= 500;
    } else if (changeInCents >= 200) {
      changeDenominations.twoDollar += 1;
      changeInCents -= 200;
    } else if (changeInCents >= 100) {
      changeDenominations.oneDollar += 1;
      changeInCents -= 100;
    } else if (changeInCents >= 25) {
      changeDenominations.quarter += 1;
      changeInCents -= 25;
    } else if (changeInCents >= 10) {
      changeDenominations.dime += 1;
      changeInCents -= 10;
    } else if (changeInCents >= 5) {
      changeDenominations.nickel += 1;
      changeInCents -= 5;
    } else if (changeInCents < 5) {
      changeDenominations.penny += 1;
      changeInCents -= 1;
    }
  }
  for (let d in changeDenominations) {
    if (changeDenominations[d] === 0) {
      delete(changeDenominations[d]);
    }
  }
  return changeDenominations
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));