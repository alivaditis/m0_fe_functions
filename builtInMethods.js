// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.



// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"

//console.log("Hello World".toLowerCase());

// The includes() method is called on the string "Hello World", it will check if a string includes another string exactly.
// The argument passed is the string "Hello".
// The retrun value is the boolean true because "Hello World" doess include "Hello".

console.log("Hello World".includes("Hello"));



// The endsWith() method is called on the string "Hello World".
// It will check if a string ends with another specified set of characters or string.
// The argument being passed is the string "Hello".
// The string does not end with the specified characters.
// The return value is the boolean false.

console.log("Hello World".endsWith("Hello"));


// The endsWith() method is called on the string "Hello World".
// It will check if a string ends with another specified set of characters or string.
// The argument being passed is the string "rld".
// The string ends with the specified characters.
// The return value is the boolean true.

console.log("Hello World".endsWith("rld"));

// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// The toUpperCase method is called on the city variable, which stores the string object "Philadelphia".
// The toUpperCase method modifies the stored string object, now all capitalized characters, and returns it.
// In this example the string object "Philadelphia" is printed as "PHILADELPHIA"
//
// The slice method is called on the state variable, which will return a new string.
// The slice method extracts a section of a string, started and ended at specific indexed characters as the parameters, and returns this as the new string.
// The argument 7 starts the extraction of the string after l, here the seventh indexed character.
// There is no ending argument because I want it to extract the rest of the string after 'l'.
// The new returned string is "vania".

var city = "Philadelphia";
var state = "Pennsylvania";

console.log(city.toUpperCase());
console.log(state.slice(7));

// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var pets = ['Spot', 'Chai', 'Bear'];
var fruits = ['apple', 'orange', 'banana'];

var thirdArray = pets.concat(fruits);
console.log(thirdArray);

console.log(fruits.unshift('watermlon', 'grape'));
console.log(fruits);

// The concat() methos is being called on pets with an argument fruits.
// The returned value is the combined arrays as a new array, here it is stored in a new value, thirdArray.
// The console.log prints the value thirdArray, so we can see the new array.
//
// This first console.log only prints the length of the new array.
// The unshift() method adds the specificied arguments, the strings 'watermelon' and grapes', to the beginning of the array stored in the value fruits.
// To see the new array in the console we have to print the value, fruits, which reflects the unshifted strings in the array.
