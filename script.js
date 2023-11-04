// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  //this sets all my variables along the way that I will be refering to
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!@#$%^&*()";
  var all = "";
  

  //first pop up question:
  var passwordLength = prompt("How long would you like your password (must be between 8-128 characters)?");
  //if password is below 8 or over 128 user will get error message from line 19
  passwordLength = Number(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert ("Password must be from 8-128.")
  }


  //following pop up questions:
  var haveLowercase = confirm ("Would you like to have Lowercase characters?");
  var haveUppercase = confirm ("would you like to have Uppercase characters?");
  var haveNumbers = confirm ("Would you like to have numbers?");
  var haveSpecial = confirm ("would you like to have special characters?");

  //if no character type is selected then message on line 31 will appear
  if (!haveLowercase && !haveUppercase && !haveNumbers && !haveSpecial) {
    alert ("Please select one character type.");
    return "";
  }

  if(haveLowercase) all += lowercase;
  if(haveUppercase) all += uppercase;
  if(haveNumbers) all += numbers;
  if(haveSpecial) all += special;

  var password= "";

  //Randomizer equation:
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor (Math.random() * all.length);
    password += all [randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);