// Day 10 - EVENT HANDLING

// Act 1: Basic Event Handling
// Task 1: Add a click event listener to a button that changes the text content of a paragraph

let replacetext = 'Nulla itaque dolores quam! Aliquam quisquam magni labore dolorum et aliquid! Officia sint possimus reiciendis esse et nesciunt labore facere ratione non.';

const replaceTextFunc = () => {
    const para = document.querySelector('#para');
    para.textContent = replacetext;
}

// Task 2: Add a double-click event listener to an image that toggles it's visibility
let cat_img = document.getElementById('cat-img');
cat_img.addEventListener('dblclick', () => {
    if (cat_img.style.visibility === 'visible') {
        cat_img.style.visibility = 'hidden';
    } else {
        cat_img.style.visibility = 'visible';
    }
})

// Act 2: Mouse events
// Task 3: Add a mouseover event listener to an element that changes it's background color
let box = document.querySelector('.box');

// box.addEventListener('mouseover', () => {
//     box.style.backgroundColor = 'green';    
// })

box.addEventListener('mouseover', () => {
    box.classList.add('color-square');    
})

// Task 4: Add a mouseout event listener to an element that resets it's background color

// box.addEventListener('mouseout', () => {
//     box.style.backgroundColor = 'red';    
// })

box.addEventListener('mouseout', () => {
    box.classList.remove('color-square');    
})

// Keyboard events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console
let inputField = document.getElementById('input-field');
        
inputField.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph
temp = '';
let value = document.createElement('p');

document.body.appendChild(value);
inputField.addEventListener('keyup', (e) => {
    if (e.key.length === 1) {
        temp += e.key;
        value.textContent = temp;
    } else if (e.key === 'Backspace') {
        // Remove the last character if Backspace is pressed
        temp = temp.slice(0, -1);
        value.textContent = temp;
    }
})

// Act 4: Form events
// Task 7 : Add a submit event listener to a form that prevents the default submission and logs the form data

document.getElementById("myForm").addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = {};
    const elements = this.elements;

    for(let i = 0; i<elements.length; i++) {
        if(elements[i].name) {
            formData[elements[i].name] = elements[i].value;
        }
    }

    console.log(formData);
});


/*
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Create a FormData object from the form
    const formData = new FormData(this);
    
    // Convert FormData to a regular object
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Log the form data to the console
    console.log(formObject);
});

*/
/*
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Select all input elements within the form
    const inputs = document.querySelectorAll('#myForm input');
    
    // Create an object to store form data
    const formData = {};

    // Iterate through the input elements and store their data
    inputs.forEach(input => {
        formData[input.name] = input.value;
    });

    // Log the form data to the console
    console.log(formData);
});
*/

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph
document.getElementById('mySelect').addEventListener('change', function() {
    const selectedValue = this.value;
    document.getElementById('selectedValue').textContent = `Selected value: ${selectedValue}`;
});


// Act 5: Event Delegation
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation
document.querySelector('#myList').addEventListener('click', function(event) {
    if(event.target && event.target.nodeName === 'LI') {
        console.log(`Clicked list item is ${event.target.textContent}`);
    }
})

// Task 10: Add an event listener to parent element that listens for events from dynamically added child elements
let count = 1;
const addParagraph = () => {
    const parentEle = document.getElementById('parentElement');
    const newPara = document.createElement('p');

    newPara.textContent = `This is a dynamically added paragraph - ${count}`;
    parentEle.appendChild(newPara);
    count++;
}

document.getElementById('addParagraph').addEventListener('click', addParagraph);

document.getElementById('parentElement').addEventListener('click', (event) => {
    if(event.target && event.target.nodeName === 'P') {
        console.log(`Clicked Para: ${event.target.textContent}`);
    }
})