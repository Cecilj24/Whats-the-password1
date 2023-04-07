// Assignment code here
function generatePassword() {

  var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "|", ":", "\"", "<", ">", "?", "`", "-", "=", "[", "]", ";", "'", ",", ".", "/"];
  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var joined = [];
  var passwordLength = parseInt(prompt("How many characters do you want your password to be?"))
  console.log(passwordLength)
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8-128")
    return generatePassword();
  }
  var confirmSpecial = confirm("Do you want special characters?")
  console.log("confirmSpecial", confirmSpecial)
  var confirmNumeric = confirm("Do you want numeric characters?")
  console.log("confirmNumeric", confirmNumeric)
  var confirmCapitalLetters = confirm("Do you want capital letters?")
  console.log("confirmCapitalLetters", confirmCapitalLetters)
  var confirmLowercaseLetters = confirm("Do you want lowercase letters?")
  console.log("ConfirmLowercaseLetters", confirmLowercaseLetters)


  if (confirmSpecial === true) {
    console.log("Before ", joined)
    joined = joined.concat(special)
    console.log("After ", joined)
  }

  if (confirmNumeric === true) {
    console.log("Before ", joined)
    joined = joined.concat(numeric)
    console.log("After ", joined)
  }

  if (confirmCapitalLetters === true) {
    console.log("Before ", joined)
    joined = joined.concat(capital)
    console.log("After ", joined)
  }

  if (confirmLowercaseLetters === true) {
    console.log("Before ", joined)
    joined = joined.concat(lowercase)
    console.log("After ", joined)
  }
  var generatedPassword = ''
 for (var i = 0; i<passwordLength; i++) {
  var randomIndex = Math.floor(Math.random()*joined.length)
  var randomCharacter = joined[randomIndex]
  console.log(randomCharacter)
  generatedPassword = generatedPassword + randomCharacter
 }
return generatedPassword

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
