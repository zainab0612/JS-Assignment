// Write a program that takes a character (number or string) in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
// var char = prompt ( "Enter any Character:" );
// if (!isNaN(char) ) {
//     alert ("Character is Number");
// }
// else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
//     alert ( "Character is UpperCase letter");
// }
// else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
//     alert ( "Character is lowercase letter");
// }
// else {
//     alert ( "Character isn't number neither string" );
// }

// Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
// var int1 = +prompt ( "Enter first integer:" );
// var int2 = +prompt ( "Enter second integer: " );
// if (int1 > int2 && int2 < int1) {
//     alert ( "Integer 1 is larger" );
// }
// else if (int2 > int1 && int1 < int2) {
//     alert ( "Integer 2 is larger" )
// }
// else if (int1 == int2) {
//     alert ( "Both integers are equal " );
// }
// else {
//     alert ( "Type Number" );
// }

// Write a program that takes input a number from user & state whether the number is positive, negative or zero.
// var userInput = +prompt ( "Enter a Number" );
// if (userInput < 0) {
//     alert ( "Number is Negative" );
// }
// else if (userInput > 0) {
//     alert ( "Number is Positive" );
// }
// else if (userInput === "0") {
//     alert ( "Number is Zero" );
// }

// Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var char = prompt ( "Enter Character" );
var vowels = ["a","e","i","o","u"];
if ( char.length === 1 && vowels.includes(char)) {
    alert ( "True, Its a vowel" );
}
else {
    alert ( "False, Its not vowel" );
}

// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you
// entered matches the original password”. Show “Incorrect password” otherwise.

