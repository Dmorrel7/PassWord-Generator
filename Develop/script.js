// Assignment code here


var chooseChar = function() 

{

  // uppercase characters
  var upperChar = confirm('Would you like to include uppercase characters?');

    if (!upperChar) 
    {
      upperChar = "";
    } else 
    {
      upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      console.log(upperChar)
    }

  // lowercase characters 
  var lowerChar = confirm('Would you like to include lowercase character?');

  // numeric characters
  var numChar = confirm ('Would you like to include numbers?');

  // special characters
  var specChar = confirm ('Would you like to include special characters?');


};
// generate password function()
var generatePassword = function() 
{
  var lengthPass = prompt('How many characters would you like your password to contain? Please enter a number between "8" and "128".');
  lengthPass = parseInt(lengthPass);
  console.log('Password length is ' + lengthPass);

  if (lengthPass < 8 || lengthPass > 128) 
  {
    return generatePassword();
  }

  // creates password on chosen input
  var selectPassword = chooseChar();
  var returnPassword = "";

  for (var i = 0; i < lengthPass; i++) 
  {
    returnPassword = selectPassword[Math.floor(Math.random() * selectPassword.length)];
  }
  console.log("Password is " + returnPassword);

  return returnPassword;
};

// generate password function


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
