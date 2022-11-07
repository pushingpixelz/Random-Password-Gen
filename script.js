
function generatePassword(){
  console.log('wow!');
  return 'this is the password'
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//  console.log('clicked button!');
  passwordText.value = password;
console.log('clicked button!');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
