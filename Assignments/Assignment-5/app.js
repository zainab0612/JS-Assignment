// Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var num1 = 3;
var num2 = 5;
var add = num1 + num2;
document.write ("Sum of " +num1+ " and " +num2+ " is " +add);

// Repeat task1 for subtraction, multiplication, division & modulus.
var num1 = 5;
var num2 = 3;
var sub = num1 - num2;
document.write ("<br> Subtraction of " +num1+ " and " +num2+ " is " +sub);

var num1 = 3;
var num2 = 5;
var mul = num1 * num2;
document.write ("<br>Multiply of " +num1+ " and " +num2+ " is " +mul);

var num1 = 3;
var num2 = 5;
var div = num1 / num2;
document.write ("<br>Division of " +num1+ " and " +num2+ " is " +div);

var num1 = 5;
var num2 = 3;
var mod = num1 % num2;
document.write ("<br>Modulus of " +num1+ " and " +num2+ " is " +mod);

// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.
 var myVariable;
 document.write ("<br> Value after variable declaration is " +myVariable);
 var myVariable = 5;
 document.write ( "<br> Initial value: " +myVariable );
 var increase = ++myVariable;
 document.write ( "<br> Value after increment is: " +increase );
 var add = myVariable + 7;
 document.write ( "<br> Value after addition is: " +add );
 var decrease = --add;
 document.write ( "<br> Value after decrement is: " +decrease );
 var mod = decrease % 3;
 document.write ( "<br> The remainder is: " +mod );

//  Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable &
//  calculate the cost of buying 5 tickets to a movie.
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write ( "<br> Total Cost of 5 Tickets is: " +totalCost+ " PKR " );

// Write a script to display multiplication table of any number in your browser.
var myNum = 4;
document.write ( "<br> <h3> Table of 4 </h3>" );
document.write (  myNum+ " x 1 = " +myNum*1  );
document.write ( "<br> " +myNum+ " x 2 = " +myNum*2  );
document.write ( "<br> " +myNum+ " x 3 = " +myNum*3  );
document.write ( "<br> " +myNum+ " x 4 = " +myNum*4  );
document.write ( "<br> " +myNum+ " x 5 = " +myNum*5  );
document.write ( "<br> " +myNum+ " x 6 = " +myNum*6  );
document.write ( "<br> " +myNum+ " x 7 = " +myNum*7  );
document.write ( "<br> " +myNum+ " x 8 = " +myNum*8  );
document.write ( "<br> " +myNum+ " x 9 = " +myNum*9  );
document.write ( "<br> " +myNum+ " x 10 = " +myNum*10  );

// The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var Celsius = 25;
var convertInToF = Celsius * (9/5) + 32;
document.write ("<br><br> " +Celsius+ "C is " +convertInToF+ "F <br>" );
var Fahrenheit = 70;
var convertInToC = (Fahrenheit - 32) * 5/9;
document.write ( Fahrenheit+ "F is " +convertInToC+ "C" );

// Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
 
var price1 = 650;
var price2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shippingCharges = 100;
document.write ( "<h3>Shopping Cart</h3> Price of item 1 is " +price1+ "<br> Quantity of item 1 is " +quantity1+ " <br> Price of item 2 is " +price2+ "<br> Quantity of item 2 is " +quantity2+ "<br> Shipping Charges is " +shippingCharges);
document.write ( "<br><br> Total Cost of Your order is " +(price1*quantity1+price2*quantity2+shippingCharges));

// Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var totalMarks = 980;
var obtainedmarks = 804;
var percentage = (obtainedmarks / totalMarks) * 100;
document.write ( "<h3> Marks Sheet </h3> Total marks: " +totalMarks+ "<br> Obtained Marks: " +obtainedmarks+ "<br> Percentage: " +percentage+ "%");

// Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
 var dollars = 10;
 var saudiRiyals = 25;
 var dollarInPKR = 104.80;
 var riyalInPKR = 28;
 document.write (  "<h3> Currency in PKR </h3> Total Currency in PKR: " +(dollars*dollarInPKR+saudiRiyals*riyalInPKR)+" <br> " );

//  Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
var num = 6;
document.write (  (num+5*10)/2 );

// Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
var currentyear = 2016;
var birthYear = 1992;
var age = currentyear - birthYear;
document.write ( "<h3> Age Calculator</h3> Current year: " +currentyear+ "<br> Birth Year: " +birthYear+ "<br> Your Age: "+age);

// Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
var radius = 20;
var pie = 3.142;
var circumference = 2*pie*radius;
var area = pie*radius*radius;
document.write ( "<h3> The Geometrizer</h3> Radius os a circle: " +radius+ "<br> The circumference is: " +circumference+ "<br> The area is: " +area );

// Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
var fvrtSnack = "chocolate chip";
var currentAge = 15;
var maximumage = 65;
var estimatedAmount = 3;
document.write ( "<h3> The Lifetime Supply Calculator</h3> Favourite Snack: " +fvrtSnack+ "<br> Current Age: " +currentAge+ "<br> Estimated maximum age: " +maximumage+ "<br> Amount of snacks per day: " +estimatedAmount+ "<br> You will need " +((maximumage-currentAge)*estimatedAmount)+ " " +fvrtSnack+ " to last you until the ripe old age of " +maximumage ); 