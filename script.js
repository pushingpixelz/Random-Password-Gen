

// Create a series of prompts for password criteria
  //a. Create arrays that include special characters, numbers, lower and upper case letters. 
  //b. Prompt user to determine the length of password atleast 8 characters, no more than 128

//After all prompts are answered, Generate password that matches the selected criteria 
//Password is displayed in an alert, or written to the page. 

// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = ['!', '"', '#', ',', '$', '%', '&',  '`', '(', ')', '*', '+', '=', '-', '_', '[', ']', '{', '}', '/', ';', '<', ',', '>', '.', '?'];

var lowercase  = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function lowercase() { 
return lowercase [Math.floor(math.random() * lowercase.length)];

}
 
function uppercase() {
  return uppercase[Math.floor(math.random() * uppercase.length)];

}

function numbers() {
  return numbers [Math.floor(math.random() * numbers.length)];


}

function characters() {
  return characters [Math.floor(math.random() * characters.length)];
}

var password = [
  characters + lowercase + uppercase + numbers
];
// Write password to the #password input
function generatePassword(){
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guarenteedCharacters = [];

  if(!options) return null;
  if(options.characters) {
possibleCharacters = possibleCharacters.concat(characters); 
guarenteedCharacters.push()
  }
}

function writePassword() {  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//  console.log('clicked button!');
  passwordText.value = password;
console.log('clicked button!');
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
