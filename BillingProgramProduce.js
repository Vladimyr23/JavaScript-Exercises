//Vladimir Yesipov
//Billing Program
//02/11/15

//Variables
var Choice = 0;
var APPLES = 2.5;
var PEARS = 3;
var PEACHES = 1.5;
var CLEMETINES = 2;
var Total=0;

//SubProgram of working with the bill
function AddingBill(APPLES, PEARS, PEACHES, CLEMENTINES, Total) {
Choice=0;
    while (Choice != "x") {
Choice = prompt("Please select an item. \n 1. Apples. \n 2. Pears. \n 3. Pears. \n 4. Clementines.\n 'x' to Exit to Main Menu.");
 if (Choice==1) {
     
     Total=parseInt(Total) + parseInt(APPLES);
    } else if (Choice==2) {
    } else if (Choice==3) {
    } else if (Choice==4) {
}
//Main Menu    
while (Choice != 4) {
    Choice=0;
    Choice = prompt("What would you like to do?\n 1. Add item to the bill. \n 2. Delete item from the bill. \n 3. Display running total.\n 4. Exit.");
    if (Choice==1) {
    } else if (Choice==2) {
    } else if (Choice==3) {
    }
        