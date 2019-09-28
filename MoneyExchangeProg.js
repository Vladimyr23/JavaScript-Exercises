//Vladimir Yesipov
//Money exchange program

//Variables
var exRate = 1.19;
var Pounds = 0;
var Euros = 0.00;
var Choice = 0;

//Data input    
while (Choice != 3) {
    Pounds = 0;
    Euros = 0;
     alert("Please enter 1,2 or 3 in the next window.");
    Choice = prompt("What would you like to exchange?\n 1. Pounds to Euros. \n 2. Euros to Pounds. \n 3. Exit.");
   
    //Pounds to Euros
    if (Choice == 1) {
        Pounds = prompt("Amount of Pounds you would like to exchange?");

        //Validation check
        if (isNaN(Pounds)) {
            alert("Please enter the number above 0");
        } else {

            //Calculation
            if (Pounds > 0) {
                if (Pounds > 500) {
                    Euros = Pounds * exRate;
                    alert(Pounds + " Pounds will be converted in " + Euros.toFixed(2) + " Euros ");
                } else {
                    Euros = Pounds * exRate;
                    Euros = Euros - Euros * 0.03;
                    alert(Pounds + " Pounds will be converted in " + Euros.toFixed(2) + " Euros -3% commissions included");
                }
            } else {
                alert("Please enter the number grater than 0");
            }
        }
    }
   
    //Euros to Pounds
    if (Choice == 2) {
        Euros = prompt("Amount of Euros you would like to exchange to Pounds?");

        //Validation check
        if (isNaN(Euros)) {
            alert("Please enter the number above 0");
        } else {

            //Calculation
            if (Euros > 0) {
                if (Euros > 595) {
                    Pounds = Euros / exRate;
                    alert(Euros + " Euros will be converted into " + Pounds.toFixed(2) + " Pounds ");
                } else {
                    Pounds = Euros / exRate;
                    Pounds = Pounds - Pounds * 0.03;
                    alert(Euros + " Euros will be converted in " + Pounds.toFixed(2) + " Pounds -3% commissions included");
                }
            } else {
                alert("Please enter the number above 0");
            }
        }
    }
}