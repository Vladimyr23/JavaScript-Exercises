//Vladimir Yesipov
//Weight reduction program
//Date:12/10/15

//Variables
var current_weight=0;
var target_weight=0;
var weeks=0;
var weight_loose=1.36;

//Data input
current_weight=prompt("What is your current weight in killos?");
target_weight=prompt("What is your trget weight?");

do {
weeks = weeks + 1;
    current_weight= current_weight - weight_loose;
} while (current_weight <= target_weight);
alert ("You are going to achieve " + current_weight + "in a " + weeks + "weeks");