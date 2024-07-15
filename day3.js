//Activity 1: If-Else Statements
// Task 1

function positiveOrnegative(num){
    if (num === 0) {
        console.log(`You enter ${num}`);
    }
    else if (num % 2 === 0) {
        console.log(`${num} is a positive number`);
    } else{
        console.log(`${num} is a negative number`);
    }
}
positiveOrnegative(25)

// Task 2

function isEligibleToVote(age){
    if (age >= 18) {
        console.log(`According to your age you are eligible for vote`);
    } else{
        console.log(`According to your age you are not eligible for vote`);
    }
}
isEligibleToVote(25)

//Activity 2: Nested If-Else
// Task 3

function largestOfThree(a, b, c){
    if (a > b && a > c) {
        console.log(`According to the number of a, b, c the largest number is a: ${a}`);
    }else if(b > a && b > c) {
        console.log(`According to the number of a, b, c the largest number is b: ${b}`);
    }else{
        console.log(`According to the number of a, b, c the largest number is c: ${c}`);

    }
}
largestOfThree(25,55,75)

//Activity 3: Switch Case
//Task 4

function determineTheDay(day){
    switch (day) {
        case 1:
            console.log(`Saturday`);
            break;
        case 2:
            console.log(`Sunday`);
            break;
        case 3:
            console.log(`Monday`);
            break;
        case 4:
            console.log(`Tuesday`);
            break;
        case 5:
            console.log(`Wednesday`);
            break;
        case 6:
            console.log(`Thursday`);
            break;
        case 7:
            console.log(`Friday`);
            break;
        default:
            console.log(`Default case match`);
            break;
    }
}
determineTheDay(3)

//Task 5

//switch (true) is used to allow evaluating conditions within case statements.
//Each case now checks whether the condition score >= threshold && score < upper_threshold is true.

function showGrade(score){
    switch (true) {
        case score >= 80 && score < 100:
            console.log(`According to your score: ${score}  your grade is "A"`);
            break;
        case score >= 65 && score < 80:
            console.log(`According to your score: ${score}  your grade is "B"`);
            break;
        case score >= 50 && score < 65:
            console.log(`According to your score: ${score}  your grade is "C"`);
            break;
        case score >= 40 && score < 50:
            console.log(`According to your score: ${score}  your grade is "D"`);
            break;
    
        default:
            console.log(`According to your score: ${score}  your grade is "F"`);
            break;
    }
}
showGrade(55)

//Activity 4: Conditional (Ternary) Operator
//Task 6

function checkEvenOrOdd(number){
    let result = number % 2 === 0 ?`${number} is even number`: `${number} is odd number`
    console.log(result);
}
checkEvenOrOdd(20)

//Activity 5: Combining Conditions
//Task 7

function checkLeapYear(year){
    if(year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
        console.log(`${year} is leap year`);
    } else {
        console.log(`${year} is not leap year`);
    }
    // switch (true) {
    //     case year % 4 == 0 && year % 100 !== 0 || year % 400 == 0:
    //         console.log(`${year} is leap year`);
    //         break;
    
    //     default:
    //         console.log(`${year} is not leap year`);
    //         break;
    // }
    
}
checkLeapYear(1900)