// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt("How long would you like your password (must be between 8-128 characters)?");

  passwordLength = Number(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert ("Password must be from 8-128.")
  }

  var haveLowercase = confirm ("Would you like to have Lowercase characters?");
  var haveUppercase = confirm ("would you like to have Uppercase characters?");
  var haveNumbers = confirm ("Would you like to have numbers?");
  var haveSpecial = confirm ("would you like to have special characters?");
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);