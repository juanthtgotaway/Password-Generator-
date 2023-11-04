// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt("How long would you like your password (must be between 8-128 characters)?");

  passwordLength = Number(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert ("Password must be from 8-128.")
  }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);