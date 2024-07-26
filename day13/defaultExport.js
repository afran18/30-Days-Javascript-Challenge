// Define multiple functions
function greet(name) {
    return `Hello, ${name}!`;
}

function farewell(name) {
    return `Goodbye, ${name}!`;
}

// Export the default function
module.exports = greet;

// Export the named function
module.exports.farewell = farewell;
