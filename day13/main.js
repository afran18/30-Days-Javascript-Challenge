// main.js

// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

const {addNums, subNums : sub} = require('./addNums');
const { person } = require('./person')
addNums(5,6);
sub(6,5);

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

person.greet("Afran");
person.birthday();

// Activity 2: Named and Default Exports
//Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
const {add, subtract} = require('./namedExports');

console.log(`Addition: ${add(5, 3)}`);
console.log(`Subtraction: ${subtract(5, 3)}`); 

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
const greet = require('./defaultExport');
const {farewell} = require('./defaultExport');

console.log(greet('Afran'));
console.log(farewell("Afran"));

// Activity 3: Importing Entire Modules
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

// Import the entire module as an object
const mathUtils = require('./moduleFor3');

// Use the constants and functions from the module
console.log(`Value of PI: ${mathUtils.PI}`);
console.log(`Value of E: ${mathUtils.E}`);

const divide = mathUtils.divide(5, 3);
console.log(`Division: ${divide}`);

const product = mathUtils.multiply(4, 7);
console.log(`Product: ${product}`);
