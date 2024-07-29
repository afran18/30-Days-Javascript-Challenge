// Day 17: Data Structures

// Activity 1: Linked List
// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Function to create a linked list from an array of values
  function createLinkedList(values) {
    if (values.length === 0) {
      return null;
    }
  
    let head = new Node(values[0]);
    let current = head;
  
    for (let i = 1; i < values.length; i++) {
      current.next = new Node(values[i]);
      current = current.next;
    }
  
    return head;
  }
  
  let values = [1, 2, 3, 4, 5];
  let linkedList = createLinkedList(values);
  
  // Function to print the linked list
  function printLinkedList(head) {
    let current = head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
  
  printLinkedList(linkedList);
  
  // Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Method to add a node to the end
    add(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Method to remove a node from the end
    remove() {
      if (this.head === null) {
        console.log('List is empty');
        return;
      }
  
      if (this.head.next === null) {
        this.head = null;
        return;
      }
  
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
  
    // Method to display all nodes
    display() {
      if (this.head === null) {
        console.log('List is empty');
        return;
      }
  
      let current = this.head;
      while (current !== null) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  // Example usage:
  const linkedListClass = new LinkedList();
  linkedListClass.add(1);
  linkedListClass.add(2);
  linkedListClass.add(3);
  
  console.log('Linked List:');
  linkedListClass.display();
  
  linkedListClass.remove();
  console.log('After removing last node:');
  linkedListClass.display();
  
  linkedListClass.remove();
  console.log('After removing another node:');
  linkedListClass.display();
  
  linkedListClass.remove();
  console.log('After removing the last node:');
  linkedListClass.display();

// Activity 2: Stack
// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class Stack {
    constructor() {
      this.items = [];
    }
  
    // Method to add an element to the stack
    push(element) {
      this.items.push(element);
    }
  
    // Method to remove and return the top element from the stack
    pop() {
      if (this.items.length === 0) {
        console.log('Stack is empty');
        return null;
      }
      return this.items.pop();
    }
  
    // Method to view the top element of the stack
    peek() {
      if (this.items.length === 0) {
        console.log('Stack is empty');
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    // Method to display all elements in the stack
    display() {
      if (this.items.length === 0) {
        console.log('Stack is empty');
        return;
      }
      console.log('Stack elements:', this.items.join(', '));
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log('Stack after pushing elements:');
  stack.display();
  
  console.log('Peek top element:', stack.peek());
  
  console.log('Pop top element:', stack.pop());
  console.log('Stack after popping an element:');
  stack.display();
  
  console.log('Peek top element:', stack.peek());
  console.log('Pop top element:', stack.pop());
  console.log('Stack after popping another element:');
  stack.display();
  
  console.log('Pop top element:', stack.pop());
  console.log('Stack after popping the last element:');
  stack.display();

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
let str = "AFRAN BAAZIGAR";
const strStack = new Stack();

for(let i = 0; i<str.length; i++) {
    strStack.push(str.charAt(i));
}
strStack.display();

let revStr = "";

for(let i = 0; i<str.length; i++) {
    let char = strStack.pop();
    revStr += char;
}

console.log(revStr);

/* 
function reverseString(str) {
  const stack = new Stack();

  // Push all characters of the string onto the stack
  for (let char of str) {
    stack.push(char);
  }

  // Pop all characters from the stack to get the reversed string
  let reversedStr = '';
  while (stack.items.length > 0) {
    reversedStr += stack.pop();
  }

  return reversedStr;
}

// Example usage:
const originalString = "hello";
const reversedString = reverseString(originalString);
*/

// Activity 3: Queue
// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

class Queue {
    constructor() {
      this.items = [];
    }
  
    // Method to add an element to the end of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Method to remove and return the first element from the queue
    dequeue() {
      if (this.items.length === 0) {
        console.log('Queue is empty');
        return null;
      }
      return this.items.shift(); // Removes the first element from the array
    }
  
    // Method to view the first element of the queue
    front() {
      if (this.items.length === 0) {
        console.log('Queue is empty');
        return null;
      }
      return this.items[0]; // Returns the first element without removing it
    }
  
    // Method to view the last element of the queue
    back() {
      if (this.items.length === 0) {
        console.log('Queue is empty');
        return null;
      }
      return this.items[this.items.length - 1]; // Returns the last element without removing it
    }
  
    // Method to display all elements in the queue
    display() {
      if (this.items.length === 0) {
        console.log('Queue is empty');
        return;
      }
      console.log('Queue elements:', this.items.join(', '));
    }
  }
  
  // Example usage:
  const queue = new Queue();
  
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  console.log('Queue after enqueue operations:');
  queue.display();
  
  console.log('Front element:', queue.front());
  console.log('Back element:', queue.back());
  
  console.log('Dequeue operation:', queue.dequeue());
  console.log('Queue after dequeue operation:');
  queue.display();
  
  console.log('Front element:', queue.front());
  console.log('Back element:', queue.back());
  
  console.log('Dequeue operation:', queue.dequeue());
  console.log('Queue after dequeue operation:');
  queue.display();
  
  console.log('Front element:', queue.front());
  console.log('Back element:', queue.back());
  
  console.log('Dequeue operation:', queue.dequeue());
  console.log('Queue after dequeue operation:');
  queue.display();
  
// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
// Simulate a simple printer queue
function printerQueueSimulation() {
    const printerQueue = new Queue();
  
    // Adding print jobs to the queue
    printerQueue.enqueue('Document1.pdf');
    printerQueue.enqueue('Document2.docx');
    printerQueue.enqueue('Photo.jpg');
    printerQueue.enqueue('Presentation.pptx');
  
    console.log('Printer Queue after adding jobs:');
    printerQueue.display();
  
    // Processing print jobs
    while (printerQueue.items.length > 0) {
      const job = printerQueue.dequeue();
      console.log(`Printing: ${job}`);
    }
  
    console.log('Printer Queue after processing all jobs:');
    printerQueue.display(); // Should indicate that the queue is empty
  }
  
  // Run the simulation
  printerQueueSimulation();