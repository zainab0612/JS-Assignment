// Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:“Welcome to city of lights” 
var cityName = prompt( "Enter city name" );
if (cityName === "Karachi" || cityName === "karachi") {
    alert ( "Welcome to city of lights " );
}

// Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
var gender = prompt ( "Enter your gender " );
if (gender === "male" || gender === "Male") {
    alert ( " Good Morning Sir " );
}
else if (gender === "female" || gender === "Female") {
    alert ( " Good Morning Ma'am " );
}

// Write a program to take input color of road traffic signal from the user & show the message according to this table:
var trafficLight = prompt ( "Enter any traffic lights color" );
if (trafficLight === "red" || trafficLight === "Red") {
    alert ( " Must Stop " );
}
else if (trafficLight === "green" || trafficLight === "Green") {
    alert ( " Move Now " );
}
else if (trafficLight === "yellow" || trafficLight === "Yellow") {
    alert ( " Ready to Move " );
}

// Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
var fuelRemaining = prompt ( "How much fuel Remaining in your car(in litres)" );
if (fuelRemaining < 0.25 ) {
    alert ( "Please refill the fuel in your car" );
}

// Run this script, & check whether alert message would be displayed or not. Record the outputs.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// Output is displayed
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// Output not displayed

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
//  Output displayed: Condition 2 and 4 is true

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// Output is displayed

if (true){
    alert("True");
}
if (false){
    alert("False");
}
// Output displayed: True

if("car" < "cat"){
    alert("car is smaller than cat");
}
// Output is displayed

// Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute
// grade as per following table:
var obtainedMarks = +prompt("Enter obtained marks of three Subjects ");
var totalMarks = 300;
var percentage = (obtainedMarks/totalMarks)*100;
if ( percentage >= 80 ) {
    document.write ("<h3>Mark Sheet</h3> Total marks : " +totalMarks+ "<br>Marks Obtained : " +obtainedMarks+ "<br>Percentage : " +percentage+ "%<br>Grade : A-one <br> Remarks : Excellent ");
}
else if ( percentage >= 70 ) {
    document.write ("<h3>Mark Sheet</h3> Total marks : " +totalMarks+ "<br>Marks Obtained : " +obtainedMarks+ "<br>Percentage : " +percentage+ "%<br>Grade : A <br> Remarks : Good ");
}
else if ( percentage >= 60 ) {
    document.write ("<h3>Mark Sheet</h3> Total marks : " +totalMarks+ "<br>Marks Obtained : " +obtainedMarks+ "<br>Percentage : " +percentage+ "%<br>Grade : B <br> Remarks : You need to improve ");
}
else if ( percentage < 60 ) {
    document.write ("<h3>Mark Sheet</h3> Total marks : " +totalMarks+ "<br>Marks Obtained : " +obtainedMarks+ "<br>Percentage : " +percentage+ "%<br>Grade : Fail <br> Remarks : Sorry ");
}

// Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
var SecretNumber = 6;
var GuessNumber = +prompt ( "Guess Any Number Between 1 to 10" );
if ( GuessNumber === SecretNumber) 
{
    alert ( "Bingo! Correct answer" );
}
else if ( GuessNumber === ++SecretNumber)
{
    alert ( "Close enough to the correct answer" );
    
}
// Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
var givenNumber = +prompt( "Enter a Number" );
if (givenNumber % 3 === 0) {
    alert ( "Number is Divisible by 3" );
} 

// Write a program that checks whether the given input is an even number or an odd number.
var givenInput = +prompt( "Enter a Number" );
if (givenInput % 2 === 0) {
    alert ( "Number is Even" );
}
else if (givenInput % 2 == 1) 
{
    alert ( "Number is Odd" );
}

// Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = +prompt( "Enter Temperature" );
if ( temp > 40 ) {
    alert ( "It is too hot outside." );
}
else if ( temp > 30 ) {
    alert ( "The Weather today is Normal." );
}
else if ( temp > 20 ) {
    alert ( "Today's Weather is cool." );
}
else if ( temp > 10 ) {
    alert ( "OMG! Today's weather is so Cool." );
}
// Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)

var num1 = +prompt ("Enter First Number");
var num2 = +prompt ( "Enter Second Number" );
var mathOperation = +prompt ( "Select Anyone of them:\n 1. Addition\n 2.Subtraction\n 3.Multiplication\n 4.Division\n 5. Modulus " );
if ( mathOperation === "1") {
    var add = num1 + num2;
    alert ("Addition is:" +add);
}
else if ( mathOperation === "2") {
    var sub = num1 - num2;
    alert ("Subtraction is:" +sub);
}
else if ( mathOperation === "3") {
    var mul = num1 * num2;
    alert ("Multiplication is:" +mul);
}
else if ( mathOperation === "4") {
    var div = num1 / num2;
    alert ("Division is:" +div);
}
else if ( mathOperation === "5") {
    var mod = num1 % num2;
    alert ("Modulus is:" +mod);
}