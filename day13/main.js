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

// Activity 4: Using Third-Party Modules
// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
const lodash = require('lodash');
//import lodash from 'lodash';


const myArr = [1,2,3,4,4,5,6,7,8];
const chunkSize = 3;

const chunks = lodash.chunk(myArr, chunkSize);

console.log(`Original Array: ${myArr}`);
console.log(`Chunks: ${JSON.stringify(chunks)}`);

let arr = [1, 2, 3, 4, 5];
console.log("using chunk method", lodash.chunk(arr, 2));

// Compact removes all the falsy values: 0, false, NaN, null, undefined
arr = [0, false, 2, 5, 7, 8, NaN];
console.log("using compact method", lodash.compact(arr));

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

const axios =  require('axios');

axios.get("https://api.thecatapi.com/v1/images/search")
.then((res) => {
    console.log(res.data);
}).catch((err) => {
    console.log("Error: ", err.message);
});

// Activity 5: Module Bundling (Optional)
// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
 /* 
This is in task 5 directory

 */