// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:

console.log("Hello, what is your name?");

function answerName(yourName) {
  return `My name is ${yourName}`;
  }

console.log(answerName("Alec"));

//The initial question is logged to the console. 
//I creacted a function, answerName, with the parameter yourName to return the answer within a sentence.
//The parameter is inserted into a string through interpolation, this string is returned.
//The answer to the question is achieved by passing in an argument, the string "Alec", to the parameter yourName.

// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third
return sum;
      }

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));

//I added console.log commands so I can see the output in the terminal or elsewhere.


// EX 3:


function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
  }

makeFreshPesto();

// The function was not declared properly, I comleted function from the truncated func


//  EX 4:
function average(num1, num2) {
  var avg = (num1 + num2) / 2;
  avg.toFixed(1);
  return avg;
  }

console.log(average(7,16));

// I moved some of the spacing and curly brackets to follow convention more closely.
// To reduce logic steps I combined the sum and dividing into one variable, avg.
// In case the value is not an interger I used the .toFixed method to add a decimal point in that case.
// Added a console.log command, passing in some numbers as arguments, in order to see the output in the terminal.