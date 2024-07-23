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