/* 
// ACTIVITY 1: ARITHMETIC OPERATIONS
// TASK 1: Write a program to add two numbers and log the result to the console
function add(num1, num2) {
    let result = num1 + num2;
    console.log("Addition of two numers is",result);
}

add(21, 14);

// TASK 2: Write a program to subtract two numbers and log the result to the console
function sub(num1, num2) {
    let result = num2 - num1;
    return result;
}

console.log("Subtraction of two numbers is " + sub(15, 35));

// TASK 3: Write a program to multiply two numbers and log the result to the console
function multiply(num1, num2) {
    const result = num1 * num2;
    console.log(`Product of ${num1} and ${num2} is ${result}`);
}

multiply(10, 20);

// TASK 4: Write a program to divide two numbers and log the result to the console
let divide = (num1, num2) => {
    const result = num1/num2;
    console.log(`${num1} divided by ${num2} is: ${result} rounded as ${Math.floor(result)}`);
    // let newresult = Math.floor(result);
    // console.log(newresult);
}

divide(15, 4);

// TASK 5: Write a program to find the remainder when one number is divided by another and log the result to the console
let modulo = (num1, num2) => {
    const result = num1%num2;
    console.log(`Remainder of ${num1} by ${num2} is: ${result}`);
}

modulo(15, 4);

*/

// ACTIVTY 2: ASSIGNMENT OPERATORS  
  // Task 6: Use the += operator to add a number to a variable and log the result to the console.
  let initialValue = 15;
  let addValue = 5;
  initialValue += addValue;
  console.log(initialValue);
  
  // Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
  let value = 15;
  let subValue = 5;
  value -= subValue;
  console.log(value);
  
  // Task 8: Write a program to compare two numbers using > and < and log the result to the console.
  function greater(num1, num2) {
    if (num1 > num2) {
      console.log(`${num1} is greater then ${num2}`);
    } else {
      console.log(`${num1} is less then ${num2}`);
    }
  }
  greater(80, 77);
  
  // Task 9: Write a program to compare two numbers using > and <= and log the result to the console.
  function greaterOrEqual(num1, num2) {
    if (num1 > num2) {
      console.log(`${num1} is greater then ${num2}`);
    } else if (num1 <= num2) {
      console.log(`${num1} is either less then or equal to ${num2}`);
    }
  }
  greaterOrEqual(80, 80);
  
  // Task 10: Write a program to compare two numbers using == and === and log the result to the console.
  function equality(num1, num2) {
    if (num1 == num2) {
      console.log(`${num1} is equal to ${num2} using == check`);
    } else {
      console.log(`${num1} is  not equal to ${num2} using == check`);
    }
    if (num1 === num2) {
      console.log(`${num1} is equal to ${num2} using === check`);
    } else {
      console.log(`${num1} is  not equal to ${num2} using === check`);
    }
  }
  equality(77, "77");
  
  // Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
  function logicalAnd(age, hasId) {
    if (age > 18 && hasId) {
      console.log("The person is adult");
    } else console.log("The person is either not an adult or does not have an Id");
  }
  logicalAnd(20, false);
  
  // Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
  function logicalOr(age, hasId) {
    if (age > 18 || hasId) {
      console.log("The person is adult or has an Id Card");
    } else console.log("The person is neither adult nor has an Id Card");
  }
  logicalOr(20, false);
  
  // Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
  function negate(condition) {
    const negateCondition = !condition;
    console.log(
      `The original Condition was ${condition}, now after negate function, current condition is ${negateCondition}`
    );
  }
  negate(true);
  
  // Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
  function checkNumber(num) {
    const result = num >= 0 ? "positive" : "negative";
    console.log(`The number ${num} is ${result}.`);
  }
  checkNumber(-10);
