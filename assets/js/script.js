// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var lowerArray = lowerCase.split("")
var upperArray = lowerCase.toUpperCase().split("")
var numArray = [1,2,3,4,5,6,7,8,9,0]
var specialArray = ["&","#","@"]

function askUser(){
    var passLength=parseInt(prompt("How long?"))
    var isLower=confirm("yesLower")
    console.log(isLower)
    var totalArray=[]
    if(isLower===true){
totalArray=totalArray.concat(lowerArray)
    }
    if(confirm("yesUpper")){
        totalArray=totalArray.concat(upperArray)
    }
}
function generatePassword(){
    askUser()
    return "fake password"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

