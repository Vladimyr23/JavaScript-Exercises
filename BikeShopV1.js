//Vladimir Yesipov
//Bike shop rent service programme

//Variables
var season = "";
var time = 0;
var DailyRent = 0;
var TotalRent = 0;

//Service

//Season selection
season = prompt("What season are you going to rent a bike in?");
if (season = = "winter") {
    DailyRent = 5;
} else {
    if (season == "spring") {
        DailyRent = 10;
    }
    if (season == "autumn") {
        DailyRent = 15;
    }
    if (season == "summer") {
        DailyRent = 25;
    }
} else {
    alert("season name is incorrect, type in lower case.");
}

//Rent calculation
time = prompt("For how many days are you going to rent a bike?");
if (time >= 7) {
    TotalRent = DailyRent * time;
    TotalRent = TotalRent - TotalRent * 0.25 + 10;
    alert("Rent cost including £10 deposit and 25% discount: " + TotalRent);
} else {
    if (confirm("Are you a Cycling club member?")) {
        TotalRent = DailyRent * time;
        TotalRent = TotalRent - TotalRent * 0.15 + 10;
        alert("Rent cost including £10 deposit and 15% discount: " + TotalRent);
    }}
else{
if (confirm("Are you an old age pensioner?")) {
        TotalRent = DailyRent * time;
        TotalRent = TotalRent - TotalRent * 0.15 + 10;
        alert("Rent cost including £10 deposit and 15% discount: " + TotalRent);    
} else {
    if (confirm("Are you a student?")) {
        TotalRent = DailyRent * time;
        TotalRent = TotalRent - TotalRent * 0.05 + 10;
        alert("Rent cost including £10 deposit and 5% discount: " + TotalRent);
    }
} else {
            TotalRent = DailyRent * time+ 10;
        alert("Rent cost including £10 deposit: " + TotalRent);
}