// Day 19: Regular Expressions

// Activity 1: Basic Regular Expressions
// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
const text = "JavaScript is a versatile language. JavaScripttt offers frameworks for both frontend and backend development. JavaScript is fun to learn";

const pattern = /JavaScript/g;  // If you dont add global (g), it will return only the first occurence
const matches = text.match(pattern);

console.log(matches);

// Task 2: Write a regular expression to match all digits in a string. Log the matches.

const text2 = "Hello 3 times and good morning 5 times and how are you 7 to 8 times";
const pattern2 = /\d/g;
const matches2 = text2.match(pattern2);
console.log(matches2);

// Activity 2: Character Classes and Quantifiers
// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

const text3 = "JavaScript is a versatile language. It offers many frameworks like React, Angular, and Vue.";

const pattern3 = /\b[A-Z][a-z]*/g;   // \b to add a boundary that ensures matches the start of word
const matches3 = text3.match(pattern3);

console.log(matches3);

/*

const text3 = "JavaScripT is an amazing languagE. It has many features like ES6 classes and ReacT.";

const pattern3 = /\b\w*[A-Z]\b/g; // Regular expression to match words ending with a capital letter
const matches3 = text3.match(pattern6);

console.log(matches6);
*/

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const text4 = "JavaScript 1234, 5678, 1234 language";

// const pattern4 = /[1-9]/g;   // matches single digits only
const pattern4 = /\d+/g;
const matches4 = text4.match(pattern4);

console.log(matches4);

// Activity 3: Grouping and Capturing
// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456- 7890). Log the captures.
const phoneNumber = "(123) 456-7890";

const pattern5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const matches5 = phoneNumber.match(pattern5);

if (matches5) {
  const [fullMatch, areaCode, centralOfficeCode, lineNumber] = matches5;
  console.log(`Full Match: ${fullMatch}`);   // matches[0]
  console.log(`Area Code: ${areaCode}`);     // matches[1]...
  console.log(`Central Office Code: ${centralOfficeCode}`);
  console.log(`Line Number: ${lineNumber}`);
} else {
  console.log("No match found.");
}

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
const email = "afran._vk18@gmail.com";
//const pattern6 = /^([^\s@]+)@([^\s@]+)$/; // Regular expression with capturing groups for username and domain
const pattern6 = /^([^\s@]+)@([^\s@.]+)\./;  // Removes .com as well
const matches6 = email.match(pattern6);

if (matches6) {
  const [fullMatch, username, domain] = matches6;
  console.log(`Full Match: ${fullMatch}`);
  console.log(`Username: ${username}`);
  console.log(`Domain: ${domain}`);
} else {
  console.log("No match found.");
}
// Activity 4: Assertions and Boundaries
// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
/*
const text7 = "Hello world, this is a test.";
const pattern7 = /^\w+/; // Regular expression to match a word at the beginning of the string
const matches7 = text7.match(pattern7);

console.log(matches7);
*/

const wordToCheck = "Hello"; // The word to check at the start of the string
const text7 = "Hello world, this is a test.";

const pattern7 = new RegExp(`^${wordToCheck}\\b`, 'i'); // Regular expression to check if the word is at the beginning of the string
const matches7 = text.match(pattern7);

if (matches7) {
  console.log(`The word '${wordToCheck}' is at the start of the string.`);
} else {
  console.log(`The word '${wordToCheck}' is not at the start of the string.`);
}

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
const wordToCheckAtEnd = "test"; // The word to check at the end of the string
const text8 = "Hello world, this is a test.";

//const pattern8 = new RegExp(`\\b${wordToCheckAtEnd}\\b$`, 'i'); // Regular expression to check if the word is at the end of the string
const pattern8 = new RegExp(`\\b${wordToCheckAtEnd}\\b(?=[\\s.,;!?]*$)`, 'i');  // Works even if there is a full stop or something at the end

const matches8 = text8.match(pattern8);


if (matches8) {
  console.log(`The word '${wordToCheckAtEnd}' is at the end of the string.`);
} else {
  console.log(`The word '${wordToCheckAtEnd}' is not at the end of the string.`);
}

// Activity 5: Practical Applications
// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
const password = "Afran@123"; // Example password to validate

// Regular expression to validate password
const pattern9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;

// Test if the password matches the pattern
const isValidPassword = pattern9.test(password);

if (isValidPassword) {
  console.log("The password is valid.");
} else {
  console.log("The password is invalid.");
}

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

const url = "https://www.example.com:8080/path/to/resource?query=param#fragment";

const pattern10 = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(:\d+)?(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/;

const isValidURL = pattern10.test(url);

if (isValidURL) {
  console.log("The URL is valid.");
} else {
  console.log("The URL is invalid.");
}

