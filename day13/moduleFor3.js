// moduleFor3.js

// Define constants
const PI = 3.14159;
const E = 2.71828;

// Define functions
function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

// Export everything as an object
module.exports = {
    PI,
    E,
    divide,
    multiply
};
