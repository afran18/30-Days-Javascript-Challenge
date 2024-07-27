// DAY 14 - Classes

// Activity 1: Class Definition
// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greeting() {
        return `Good morning ${this.firstName}!`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`${this.firstName}'s new Age is ${this.age}`);
    }

    // Task 5: Static method
    static genericGreeting() {
        console.log("Good morning everyone!");
    }

    // Static method with dynamic value
    static personalizedGreeting(name) {
        console.log(`Good morning, ${name}!`);
    }

    // TASK 7: Getter method
    get getFullName() {
        return `My full name is: ${this.firstName} ${this.lastName}`
    }
    // TASK 8: Setter methods
    set setFirstName(firstName) {
        this.firstName = firstName;
    }

    set setLastName(lastName) {
        this.lastName = lastName;
    }

    // Method to set both first and last names
    setFullName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const p1 = new Person("Afran", "Davalbhai", 23);
console.log(p1.greeting());

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
p1.updateAge(25);

// Activity 2: Class Inheritance
// Task 3: Define a class Student that extends the Person class. Add a property student ID and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Student extends Person {
    static studentCount = 0;

    constructor(firstName, lastName, age, studentID) {
        super(firstName,lastName, age);
        this.studentID = studentID;
        Student.studentCount += 1;
    }

    getStudentID() {
        return this.studentID;
    }

    // Task 4: Override the greeting method in the Student class to include the student ID in the message.
    greeting() {
        return `Good morning ${this.firstName} ${this.lastName}, Your Student ID is ${this.studentID}.`;
    }

    // Additional method to get student details
    getStudentDetails() {
        return `Student Name: ${this.firstName} ${this.lastName}\nStudent Age: ${this.age}\nStudent Roll: ${this.studentID}`;
    }
}

let s1 = new Student('Parvez', 'Pinjari', 22, 43);
let s2 = new Student('Afran', 'Davalbhai', 23, 2);
let s3 = new Student('Kaif', 'Dholakpur', 24, 33);

console.log("Student ID:", s1.getStudentID());

// Task 4: Override the greeting method in the Student class to include the student ID in the message.
console.log(s1.greeting());
console.log("----------- Student Details -----------\n" + s1.getStudentDetails());

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method.
Person.genericGreeting();
Person.personalizedGreeting("Afran");

// Task 6: Add a static property to the Student class to keep track of the number of students created.
// Increment this property in the constructor and log the total number of students.
console.log("Total number of students:", Student.studentCount);


// Activity 4: Getters and Setters
// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName
//    property). Create an instance and log the full name using the getter. 

console.log(p1.getFullName);

// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName).
//  Update the name using the setter and log the updated full name.

p1.setFirstName = "Mustakeen"
p1.setLastName = "Nimmbargi"

console.log(p1.getFullName);

p1.setFullName("Afran", "Davalbhai");
console.log(p1.getFullName);

// Activity 5: Private Fields (Optional)
// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money.
// Ensure that the balance can only be updated through these methods.

class Account {
    #balance = 0;

    constructor(accName, accNo) {
        this.accName = accName;
        this.accNo = accNo;
    }

    depositMoney(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Amount deposited ${amount} and current balance is ${this.#balance}`);
        } else {
            console.log('Deposit amount must be positive');
        }
    }

    withDrawMoney(amount) {
        if (amount > this.#balance) {
            console.log('Balance is low');
            console.log(`Current balance is ${this.#balance}`);
        } else if (amount > 0) {
            this.#balance -= amount;
            console.log(`Amount withdrawn ${amount} and current balance is ${this.#balance}`);
        } else {
            console.log('Withdrawal amount must be positive');
        }
    }

    getBalance() {
        return `Your account balance is: $${this.#balance}`;
    }
}

let acc1 = new Account("Afran", 123);
console.log(acc1.getBalance()); 

acc1.depositMoney(500); 

acc1.depositMoney(-399); 
acc1.withDrawMoney(1000);
acc1.withDrawMoney(200);  

console.log(acc1.getBalance());

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
// Implented in above class