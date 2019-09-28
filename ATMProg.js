//Vladimir Yesipov
//ATM Program
//Data: 26/10/15

//Variables
var Balance = 0;
var Deposit = 0;
var Credit = 0;
var Choice = 0;

//Functions
function Change(Balance, Deposit, Credit) {
    Balance = Balance + Deposit - Credit;
    if (Balance < 0) {
        alert("You can't take more money than you've got");
        Balance = Balance + Credit;
    }
    return Balance;
}

while (Choice != "x") {
    Choice = Prompt("What would you like to \n 1. Put money on your account. \n 2. Take money \n 3. Check the balance. \n Press x for exit.");
    if (Choice == 1) {
        Credit = 0;
        Deposit = prompt("How much money would you like to deposit? ");
        alert("Your present balance is " + Change(Balance));
    } else if (Choice == 2) {
        Deposit = 0;
        Credit = prompt("How much money would you like to take? ");
        alert("Your present balance is " + Change(Balance));
    } else if (Choice == 3) {
        Deposit = 0;
        Credit = 0;
        alert("Your present balance is " + Change(Balance));
    } else {
        alert("Enter the number from the choice list or press 'x' for exit");
    }
}