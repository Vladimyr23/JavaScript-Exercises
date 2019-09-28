//Vladimir Yesipov
//Program which calls a function to check a password entry.
//Date: 9/11/2015

//variables
var Password = "";
var count = 0;
var valid = false;

//Password check function
function Checkpassword(valid) {
    for (count = 1; count < 4; count++) {
        Password = prompt("Please enter your password");
        if (Password !== "123XY") {
            alert("Attempt " + count + " Password invalid");
        } else {
            count = count + 3;
            valid = true;
            return valid;
        }
    }
    valid = false;
    return valid;
}

//Main program
valid = Checkpassword(valid);
if (valid === true) {
    alert("Password correct");
} else {
    alert("Password incorrect");
}
