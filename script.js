// Assignment code here
var passwordLength
var confirmNumber
var confirmSpecial
var confirmLower
var confirmUpper
var choices

// Array of characters
var number = ["0","1","2","3","4","5","6","7","8","9"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function generatePassword() {

  var passwordLength = window.prompt("How long would you like your password to be? Must be between 8 to 128 characters.")
  console.log("Password length " + passwordLength)
    
  if(!passwordLength) {
    alert("This requires a value.")
  }

  else if (passwordLength < 8 || passwordLength > 128) {
  window.prompt("Your password must be between 8 to 128 characters.")
  console.log("Password length " + passwordLength)

  } else {
    confirmLower = confirm("Will it contain lower case letters?")
    console.log("Lower case " + confirmLower)
    confirmUpper = confirm("Will it contain upper case letters?")
    console.log("Upper case " + confirmUpper)
    confirmNumber = confirm("Will it contain numbers?")
    console.log("Number " + confirmNumber)
    confirmSpecial = confirm("Will it contain special characters?")
    console.log("Special Character " + confirmSpecial)
  }
  // User decides on 4 false options 
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    choices = ("Please choose at least 1 option to generate a password.")
  }

  // User decides on 4 true options
  else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    choices = number.concat(special, lowerCase, upperCase)
  }

  // User decides on 3 true options
  else if (confirmLower && confirmUpper && confirmNumber) {
    choices = number.concat(lowerCase, upperCase)
  }
  else if (confirmLower && confirmUpper && confirmSpecial) {
    choices = number.special(lowerCase, upperCase)
  }
  else if (confirmLower && confirmSpecial && confirmNumber) {
    choices = number.concat(lowerCase, special)
  }
  else if (confirmSpecial && confirmUpper && confirmNumber) {
    choices = number.concat(special, upperCase)
  }

  // User decides on 2 true options
  else if (confirmLower && confirmUpper) {
    choices = lower.concat(upperCase)
  }
  else if (confirmLower && confirmSpecial) {
    choices = lower.concat(special)
  }
  else if (confirmLower && confirmNumber) {
    choices = lower.concat(number)
  }
  else if (confirmNumber && confirmUpper) {
    choices = number.concat(upperCase)
  }
  else if (confirmNumber && confirmSpecial) {
    choices = number.concat(special)
  }
  else if (confirmSpecial && confirmUpper) {
    choices = special.concat(upperCase)
  }

  // User decides on 1 true option
  else if (confirmUpper) {
    choices = upperCase
  }
  else if (confirmLower) {
    choices = lowerCase
  }
  else if (confirmSpecial) {
    choices = special
  }
  else if (confirmNumber) {
    choices = number
  }

  // empty variable
  var passwordEmpty = []

  // Creates the random variable password
  for (var i = 0; i < passwordLength; i++) {
    var userPick = choices[Math.floor(Math.random() * choices.length)]
    passwordEmpty.push(userPick)
    console.log(userPick)
  }

  // This joins and returns the password
  var password = passwordEmpty.join("")
  console.log("Your password is " + password)
  return password
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
