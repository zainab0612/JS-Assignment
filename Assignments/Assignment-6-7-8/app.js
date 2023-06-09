// Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var a = 10;
document.write ( "Result: <br> The value of a is: " +a+ "<br> ......................................<br> The Value of ++a is: " +(++a)+ "<br> Now the value of a is: " +a+ "<br><br> The value of a++ is: " +a+ "<br> Now the value of a is:  " +(++a)+ 
"<br><br> The value of --a is: " +(--a)+ "<br> Now the value of a is: " +a+ " <br><br> The value of a-- is: " +a+ "<br> Now the value of a is: " +(--a));

// What will be the output in variables a, b & result after execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//  --a = 1, --b = 0, ++b = 1, b-- = 1  
document.write( "<br> a is " +a+ "<br> b is " +b+ "<br> Result is " +result );

// Write a program that takes input a name from user & greet the user.
var userName = prompt("Enter your name");
alert ( " Assalam Alaikum " +userName );

// Write a program to take input a number from user & display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5 should be displayed by default.
 var userNum = +prompt("Enter any number",5);
  for (var i = 1; i <=10; i++ )
  {
    document.write ( "<br>" +userNum+ " x " +i+ " = " +i*userNum);
  }

//   Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.
var sub1 = prompt("Enter First Subject");
var sub2 = prompt("Enter Second Subject");
var sub3 = prompt("Enter Third Subject");
var totalMarks = 100;
var obtainedMarks1 = +prompt("Obtained Marks of " +sub1);
var obtainedMarks2 = +prompt("Obtained Marks of " +sub2);
var obtainedMarks3 = +prompt("Obtained Marks of " +sub3);
var percentage1 = (obtainedMarks1/totalMarks)*100;
var percentage2 = (obtainedMarks1/totalMarks)*100;
var percentage3 = (obtainedMarks1/totalMarks)*100;
var total = totalMarks*3;
var totalObtained = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var totalPercentage = (totalObtained/total)*100;
document.write( "<table>  <thead> <tr> <th>Subject</th><th> Total Marks </th><th> Obtained Marks </th><th> Percentage </th><tr></thead> <tbody><tr><td> " +sub1+ "</td><td> " +totalMarks+ "</td><td> " +obtainedMarks1+ "</td><td>" +percentage1+ "%</td></tr><tr><td> " +sub2+ "</td><td> " +totalMarks+ "</td><td> " +obtainedMarks2+ "</td><td>" +percentage2+ "%</td></tr><tr><td> " +sub3+ "</td><td> " +totalMarks+ "</td><td> " +obtainedMarks3+ "</td><td>" +percentage3+ "%</td></tr></tbody><tfoot><tr><td></td><td><b> " +total+ "</b></td><td><b>" +totalObtained+ "</b></td><td><b>" +totalPercentage+ "%</b></td></tr></tfoot></table>");