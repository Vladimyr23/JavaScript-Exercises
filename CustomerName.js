//Vladimir Yesipov
//Customer name

var Surname = "";
var FirstName = "";
var MiddleName = "";
/*var Customer = {
    FirstName: FirstName,
    MiddleName: MiddleName,
    LastName: Surname
};*/
while (Surname == "QUIT" || Surname == "quit" || Surname == "Quit") {
    Surname = prompt("Please enter your surename (quit for quit)");
    FirstName = prompt("Please enter your forename");
    MiddleName = prompt("Please enter your middle name innitial");
    alert("Customer Name: " + FirstName + " " + MiddleName + " " + Surname);
}