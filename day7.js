// OBJECTS //
// Task 1: Create an object representing a book with properties like title
//         author, and year and log to console

const book = {
    title : "Begining with Javascript",
    author : "John Doe",
    year : 2017,
    price : "$59"
}

// console.log(book);  

// Task2 : Access and log title and author properties of the book
console.log(`${book.title} is written by ${book.author}`);

// Task 3: Add a method to book object that returns a string with book title and author and log to console by calling the method
book.displayBook = (discount = 10) => {
    console.log(`The book ${book.title} is written by ${book.author} and is available on ${discount}% discount`);
}

book.displayBook(20);

// Task 4: Add a method to book object with takes a parameter (year) and updates the parameter
book.updateYear = function(newYear) {
    this.year = newYear;
    console.log(`The book ${book.title} is updated on by ${book.year}`)
}
book.updateYear(2021)


console.log(book.year);

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects)
//         and log the library object to console

const library = {
    "Library name" : "My Library",
    books : [
        {
            title: "Beginning with Javascript",
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
}

// console.log(library);

// Task 6: Access the name of library and the titles of all the books
console.log(`Name of library is "${library["Library name"]}" and there are ${library.books.length} books in it.`);
console.log("Titles of Books:");
library.books.forEach((book) => {
    console.log(book.title);
});

// Task 7: Add a method to book obj that uses the 'this' keyword to return the string with the books title and year and log

library.gettitleAndYear = function() {
    let counter = 0;
    return this.books.map(book => {
        counter++;
        return `${counter}: ${book.title} - (${book.year})`
    }).join('\n');
}

console.log(library.gettitleAndYear());

// Task 8: Use a for in loop to iterate over the properties of the book object abd log each property and its value

library.books.forEach((book, index) => {
    console.log(`Book ${index + 1}:`);
    for (let property in book) {
        console.log(`${property}: ${book[property]}`);
    }
    console.log('-----------------');
});
let counter = 0;
// Task 9: Use Object.keys and Object.values methods to log all keys and values of book object
library.books.forEach(() => {
    counter++;
    const keys = Object.keys(book);
    const values = Object.values(book);
    console.log(`Book - ${counter + 1}`);
    for(let i = 0; i<keys.length; i++) {
        console.log(`${keys[i]} : ${[values[i]]}`);
    }
})