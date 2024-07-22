// DOM Manipulation

// Act 1: Selceting and manipulating Elements
// Task 1: Select an HTML Element by it's ID and change it's text content
document.getElementById('heading-small').textContent = "The heading has been modified";

// Task 2: Select an HTML Element by it's class and change it's background
let heading = document.getElementsByClassName('heading-small');
for (let i = 0; i < heading.length; i++) {
    heading[i].style.backgroundColor = 'green';
}

/*
let heading = document.getElementsByClassName('heading-small')[0];
heading.style.backgroundColor = 'green';

*/

// Act 2: Creating and Appending Elements
// Task 3: Create a new div element with some text content and append it to the body
const newDiv = document.createElement('div');
const newH3 = document.createElement('h3');
newH3.textContent = 'This is a newly created div element';

newDiv.appendChild(newH3);
document.body.appendChild(newDiv);

// Task 4: Create a new li element and add it to an existing ul list
const newLi = document.createElement('li');
newLi.innerHTML= '<h5>I am new list item</h5>';

const myList = document.getElementsByClassName('my-list')[0];
myList.appendChild(newLi);


// Act 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM
document.getElementById("remove-elem").hidden = true

// Task 6: Remove the last child of a specific HTML Element
myList.lastChild.remove();


// Act 4: Modifying attributes and Classes
// Task 7: Select an HTML Element and change tone of its attributes (eg src of an img tag)
document.getElementsByTagName('a')[0].setAttribute('href', 'https://www.google.com');

// Task 8: Add and remove a css class to/from an HTML Element
function changeColor() {
    let heading = document.getElementById('heading-small');
    if (heading) {
        if (heading.classList.contains('white')) {
            heading.classList.remove('white');
        } else {
            heading.classList.add('white');
        }
    }
}

// Act 5: Event Handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph
const changePara = () => {
    const para = document.getElementsByClassName('para');
    para[0].textContent = 'Text has been changed - Text has been changed - Text has been changed';
}

// Task 10: Add a mouseover event listener to an element that changes its border color
document.getElementById('styled-button').addEventListener('mouseover', () => {
    document.getElementById('styled-button').style.borderColor = "green"
});
document.getElementById('styled-button').addEventListener('mouseleave', () => {
    document.getElementById('styled-button').style.borderColor = ""
});