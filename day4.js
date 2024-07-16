// ACTIVITY 1 : For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a for loop

for(let i = 1; i<=10; i++) {
    console.log(i);
}


// Task 2: Write a program to print the multiplication table of 5 using a for loop.
for(let i = 1; i<=10; i++) {
    console.log("5 X", i, "=", 5*i)
}
    

// Activity 2: While Loop
// Task 3: Write a program to calc sum of nos from 1 to 10 using a while loop
let sum = 0, i = 1;

while(i<=10) {
    sum+=i;
    i++;
}

console.log(sum);


// Task 4: Print numbers from 10 to 1 using a while loop
let j = 10;
while(j>0) {
    console.log(j--);
}


// Activity 3: Do While Loop
// Task 5: Program to print numbers from 1 to 5 using do while loop.
let k = 1;
do {
    console.log(k++);
} while(k<=5)



// Task 6: Program to calc factorial of a number using do while

let num = 5;
let fact = 1;

do{
    fact *= num;
    num--;
} while(num>0)
console.log(fact);

// Task 7: Print the below pattern using nested loop
/*

*
* *
* * *
* * * *
* * * * *

*/

for(let i = 1; i<=5; i++) {
    let pattern = "";
    for(let j = 1; j<=i; j++) {
        pattern = pattern + "* ";
    }
    console.log(pattern);
}

// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the `continue` statement.
for (let t = 1; t <= 10; t++) {
    if (t === 5) {
      continue;
    }
    console.log(t);
  }
  
  // Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the `break` statement.
  for (let p = 1; p <= 10; p++) {
    if (p === 7) {
      break;
    }
    console.log(p);
  }
  
  // Day 4 Completed