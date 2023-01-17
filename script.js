// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  //variable to store length of password
  let length = parseInt(
    prompt("How many characters would you like to your password to contain?")
  )

  if(isNaN(length)=== true)
    {
      alert("password length must be provided as number");
      return;
    }
  if(length<10){
    alert("password length must be atleast 10 character");
    return;

  }
  if(length>64){
    alert("password length must be less than 65 character");
    return;

  }

  let hasSpecialCharacters = confirm("click ok to confirm including special character")
  let hasNumericCharacters = confirm("click ok to confirm including numeric character")
  let hasLowerCasedCharacters= confirm("click ok to confirm including lowercase character")
  
  let hasUpperCasedCharacters= confirm("click ok to confirm including uppercase character")
 
  if(hasLowerCasedCharacters===false &&
    hasUpperCasedCharacters===false &&
    hasSpecialCharacters===false &&
    hasNumericCharacters===false){
      alert("Must select atleast one character type");
      return;
    }
  
  let passwordOptions = {
    length:length,
    hasLowerCasedCharacters:hasLowerCasedCharacters,
    hasUpperCasedCharacters:hasUpperCasedCharacters,
    hasSpecialCharacters:hasSpecialCharacters,
    hasNumericCharacters:hasNumericCharacters
    }

    return passwordOptions;



}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random()*arr.length);
  let randomElement=arr[randomIndex];
return randomElement;


}

// Function to generate password with user input
function generatePassword() {

  let options =getPasswordOptions();
   console.log(options);

   let results =[]
   let possibleCharacter=[]
   let guaranteedCharacter=[]
if(options.hasSpecialCharacters){
   possibleCharacter=possibleCharacter.concat(specialCharacters);
   guaranteedCharacter.push(getRandom(specialCharacters))

}
if(options.hasLowerCasedCharacters){
   possibleCharacter=possibleCharacter.concat(lowerCasedCharacters);
   guaranteedCharacter.push(getRandom(lowerCasedCharacters))
   
}
if(options.hasUpperCasedCharacter){
  possibleCharacter=possibleCharacter.concat(upperCasedCharacters);
  guaranteedCharacter.push(getRandom(upperCasedCharacters))
  
}
if(options.hasNumericCharacter){
  possibleCharacter=possibleCharacter.concat(numericCharacters);
  guaranteedCharacter.push(getRandom(numericCharacters))
  
}

console.log(possibleCharacter);
for(let index =0;index <options.length;index++)
  {
    var generated =getRandom(possibleCharacter);
    console.log(generated);
    result.push(generated);

  }
  console.log(result);
  return result.join("");

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);