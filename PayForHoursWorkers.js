//Vladimir Yesipov
//Weekly pay for temporary workers.


//Variables
var HourlyRate = 7.80;
var OverTimePay = 12.50;
var WeekPay = 0;
var Hours = 0;

//Data input    
Hours = prompt("Amount of hours you work entire week?");

//Validation check
if (isNaN(Hours) || Hours <= 0) {
    alert("input error, please input a number greater than 0");
} else {

    //Calculation
    Hours = parseInt(Hours);
    if (Hours < 38) {
        WeekPay = Hours * HourlyRate;
    } else {
        WeekPay = 37 * HourlyRate + (Hours - 37) * OverTimePay;
    }
    alert("your weekly take home pay is £" + WeekPay.toFixed(2));
}