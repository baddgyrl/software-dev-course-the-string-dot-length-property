const readlineSync = require("readineSync");
let password;
let isValid = false;
while (!isValid) {
    password = readlineSync.question("Enter your password: ", {
    
        //Requirement checks
    let hasUppercase = false;
    let hasNumber = false;
    //Loop through each character in the password
    for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if(char >= "A" && char <= "Z") {
        hasUppercase = true;
    }
    if(char >= "0" && char <= "9")
        hasNumber = true;
    }
    }
//Validate all requirements
if(password.length >= 8 && hasUppercase && hasNumber) {
    isValid = true;
console.log("Success!" Your password mets all the requirements.");
} else {
    console.log("Invalid password. Please try again.");
}
}

