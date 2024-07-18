// Functions
// Task 1: Even odd function

function evenOdd(num) {
    if(num/2 == 0) {
        console.log(`${num} is Even`);
    } else {
        console.log(`${num} is odd`);
    }
}

evenOdd(3)
// Task 2: Find square of a given number
function square(num) {
    console.log(`Square of ${num} is ${num * num}`);
}

square(8)

// Task 3: Find maximum of 2 numbers
function findMax(num1, num2) {
    num1 > num2 ? console.log(`${num1} is greater than ${num2}`
    ): console.log(
        `${num2} is greater than ${num1}`
    );
}

findMax(10, 25)

// Task 4: Concat 2 Strings and return the result

function concatStr(str1, str2) {
    return str1 + str2
}

console.log(concatStr("Afran", "Davalbhai"));

//ARROW FUNCS

// Task 5: Calc sum of 2 nos and return the sum
const sum = (num1, num2) => {
    return num1 + num2
}
let num1 = 10, num2 = 20
console.log(`Sum of ${num1} plus ${num2} is ${sum(num1, num2)}`);

// Task 6: Check if string contains a specific character return a boolean

const contains = (str, char) => {
    return str.includes(char)
}

console.log(contains("Afran", "a"));

// Task 7: return a product of 2 values and provide default for 2nd param
const product = (num1, num2 = 10) => {
    console.log(`${ num1 * num2}`);
}

product(10, 20)
product(15)

// Task 8: Take a person's name and age and display a greeting message, provide default value for age

const greet = (name, age = 20) => {
    console.log(`Hi ${name}, your age is ${age}, and we welcome you to our Javascript universe`);
}

greet("John Doe", 25)
greet("John Doe 2")

// HOF's

// Task 9: HOF that takes func as param and a number, and returns that function the given no of time
function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

repeatFunction(() => console.log("Hello!"), 3);

// Task 10: HOF that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function applyFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
}

const addOne = num => num + 1;
const double = num => num * 2;
console.log(applyFunctions(addOne, double, 5));
