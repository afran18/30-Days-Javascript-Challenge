// ES6+ Features //
// Act 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for person's name and age and log to console
let person_name = "John Doe";
let age = 23;

console.log(`The person's name is ${person_name} and age is ${age}`);

// Task 2: Create a multiline string using template literals and log to console
console.log(`Hi there,
My name is ${person_name}\nAnd my age is ${age}`);

// Act 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log to console

const nums = [1,2,3,4,5];
const [first, second] = nums;
console.log(`First: ${first} and Second: ${second}`);

const [firstEle, ...rest] = nums;
let last = rest.pop();
console.log(`First: ${firstEle} and Last: ${last}`);

// Task 4: Use object destructuring to extract title and author from a book object and log them to console
const book = {
    title : "Begining with Javascript",
    author : "John Doe",
    year : 2017,
    price : "$59"
}

const {title, author} = book;
console.log(`Title: ${title} and the author is ${author} and price is ${book.price}`);

/*
const library = {
    "Library name": "My Library",
    books: [
        {
            title: "Beginning with JavaScript",
            author: "John Doe",
            year: 2019,
            price: "$59"
        },
        {
            title: "Advanced JavaScript",
            author: "Jane Smith",
            year: 2024,
            price: "$79"
        },
        {
            title: "Programming with Java",
            author: "Tim Buchalka",
            year: 2023,
            price: "$119"
        }
    ]
};

// Using array destructuring to extract each book object
const { books } = library;

// Using forEach to iterate over each book and object destructuring to extract title and author
books.forEach(({ title, author }) => {
    console.log(`Title: ${title} and Author: ${author}`);
});
 */

// Act 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all the elements of an existing array plus additional elements
const newNums = [...nums, 6,7,8,9,10];
console.log(newNums);

// Task 6: Use the rest operator in a function to accept an arbitrary number of argument, sum them and return the results
const sum = (fix, ...nums) => {
    return nums.reduce( (acc, curr) => acc + curr, fix);
}
let fix = 6;
const result = sum(1,2,3,4,5) + fix;
console.log(result);

// Act 4: Default params
// Task 7: Write a function that takes two parameters and returns their product with the second parameter having a default value of 1
const displaySum = (first, second = 5) => console.log(first + second);

displaySum(5, 9);
displaySum(5)

// Act 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties and log the object

const libName = "My Library";
const yearEstablished = 2020;

const library = {
    libName,
    yearEstablished,
    
    // Method to get the library's details
    getDetails() {
        return `Welcome to ${this.libName}, established in ${this.yearEstablished}.`;
    },

    // Method to set a new year of establishment
    setYear(newYear) {
        this.yearEstablished = newYear;
    }
};


console.log(library);


console.log(library.getDetails()); 


library.setYear(2024);
console.log(library.getDetails()); 

// Task 9: Create an object with computed property names based on variables and log the object to console
let property1 = 'firstName';
const property2 = 'lastName';
const property3 = 'age';

const person = {
    [property1]: 'John',
    [property2]: 'Doe',
    [property3]: 30
};

// Log the object to the console
console.log(person);

// END
