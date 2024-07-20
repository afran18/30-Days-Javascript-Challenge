// Task 1: Create an array of nos 1 to 5 and log the array to console

myArr = [1,2,3,4,5];
console.log(myArr);


// Task 2: Access the first and last element of an array and log them to console
let first = myArr[0], last = myArr[myArr.length - 1];
console.log(`First element is ${first} and last element is ${last}`);

// task 3:  Push a number to array and log
let pushed = myArr.push(6);
console.log(pushed);
console.log(myArr);

// Task 4: Pop a number from array and log
let popped = myArr.pop();
console.log(popped);
console.log(myArr);

// Task 5: shift method to remove the first element from array
myArr.shift();
console.log(myArr);

// Task 6: Unshift method to add an element to the beginning of an array
myArr.unshift("Apple", "Mango");
console.log(myArr);

myArr.shift(); myArr.shift();
myArr.unshift(0,1);

// Task 7: Use map to create a new array where each number is doubled

const newArr = myArr.map( ele => {
    return ele*2;
})

console.log(newArr);

// Task 8: Use filter to create a new array with even elements
const evenArr = myArr.filter( ele => {
    return ele%2 == 0
});

console.log(evenArr);

// Task 9: use Reduce to calculate sum of all numbers in the array
let sum = myArr.reduce( (acc, curr) => (
    acc + curr
), 0);

console.log(sum);

// Task 10: use for loop to iterate over an array
for(let i = 0; i<myArr.length; i++) {
    console.log(myArr[i]);
}

// Task 11: user forEach method to iterate over an array
myArr.forEach(ele => {
    console.log(ele * 2);
});

// Task 12: Create a 2 dimensional array(matrix) and log the array;
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);

matrix.forEach(row => {
    console.log(row.join(' '));
});


for (let i = 0; i < matrix.length; i++) {
    let row = '';
    for (let j = 0; j < matrix[i].length; j++) {
        row += matrix[i][j] + ' ';
    }
    console.log(row.trim());
}

// Task 13: Access a spec element from 2d array and log
let element = matrix[2][2];
console.log(element);