//Vladimir Yesipov
//Students percentage grade

//Variables
var StudentFirstName = "";
//var StudentLastName = "";
var Mark = 0;
var TotalMark = 0;
var MarksCounter = 0;
var AverageMark = 0;

//Calculation
StudentFirstName = prompt("Please enter your first name");
do {
    Mark = prompt("Please enter your mark value");
    MarksCounter = MarksCounter + 1;
    TotalMark = TotalMark + Mark;
    AverageMark = TotalMark / MarksCounter;
    alert("Your total mark is " + TotalMark + "\n Average mark is " +AverageMark);
} while (confirm("Do you want to enter next mark"));