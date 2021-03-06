// Assignment code here
var chooseChar = function() 

{

  // uppercase characters
  var upperChar = confirm("Would you like to include uppercase characters?");

    if (!upperChar) 
    {
      upperChar = "";
    } else 
    {
      upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    console.log(upperChar);


  // lowercase characters 
  var lowerChar = confirm("Would you like to include lowercase character?");
    
    if (!lowerChar) 
    {
      lowerChar = "";
    } else 
    {
      lowerChar = "abcdefghijklmnopqrstuvwxyz";
    }
    console.log(lowerChar);


    
  // numeric characters
  var numChar = confirm ("Would you like to include numbers?");
    if (!numChar) 
    {
      numChar = "";
    } else 
    {
      numChar = "0123456789";
    }
  console.log (numChar);

  // special characters
  var specChar = confirm ("Would you like to include special characters?");

    if (!specChar) 
    {
      specChar = "";
    } else 
    {
      specChar = "!@#$%*&+=";
    }
    console.log(specChar);

  var passwordString = upperChar + lowerChar + numChar + specChar

    if (passwordString.length > 0) 
    {
      return passwordString;
    } else
    {
      return chooseChar();
    }
    console.log(passwordString);
}
// generate password function()
var generatePassword = function() 
{
  var lengthPass = prompt("How many characters would you like your password to contain? Please enter a number between 8 and 128.");
  console.log("Password length is " + lengthPass);

  if (lengthPass < 8 || lengthPass > 128) 
  {
    generatePassword();
  }

  // creates password on chosen input
  var selectPassword = chooseChar();
  var returnPassword = "";

  for (var i = 0; i < lengthPass; i++) 
  {
    returnPassword += selectPassword[Math.floor(Math.random() * selectPassword.length)];
  }
  console.log("Password is " + returnPassword);

  return returnPassword;
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
