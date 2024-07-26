// addNums.js
// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

const addNums = (a,b,) =>{
    console.log(`Sum of numbers is: ${a + b}`);
}

const subNums = (a,b,) =>{
    console.log(`Difference of numbers is: ${a - b}`);
}


module.exports = { addNums, subNums };