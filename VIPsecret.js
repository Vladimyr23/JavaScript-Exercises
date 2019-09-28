//Vladimir Yesipov
//VeryImportantPerson Identification

//variables
var UserName = "";
var Password = "";

//Identification
for (i = 0; i < 4; i++) {
    UserName = prompt("Please enter your user name");
    Password = prompt("Please enter your password");
    if (UserName == "VeryImportantPerson" && Password == "secret"){
        i=i+4;
        alert ("Welcome to the VIP");
    } else {
        alert ("Sorry - no entry");
    }
}