// Day 21: LeetCode Easy
// Activity 1: Two Sum
// Task 1: Solve the "Two Sum" problem on LeetCode.
// Write a function that takes an array of numbers and a target number, and retums the indices of the two numbers that add up to the target. Log the indices for a few test cases.

const twoSum = (nums, target) => {
    const numToIndex = {};
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
  
      if (numToIndex[complement] !== undefined) {
        return [numToIndex[complement], i];
      }
  
      numToIndex[nums[i]] = i;
    }
  
    return null; 
  };

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6)); 
console.log(twoSum([3, 3], 6));  
console.log(twoSum([1, 5, 5, 9], 10));

// Activity 2: Reverse Integer
// Task 2: Solve the "Reverse Integer" problem on LeetCode.
// Write a function that takes an integer and returns it with its digits reversed. Handle edge cases like negative numbers and numbers ending in zero. Log the reversed integers for a few test cases.
const reverse = x => {
    let reversed = 0;
    let num = Math.abs(x);

    while(num > 0) {
        let curr = num%10;
        reversed = reversed * 10 + curr;
        num = Math.floor(num/10);
    }

    if(x < 0) return reversed - (2*reversed);

    return reversed;
}

console.log("Reversed",reverse(321), reverse(-321),reverse(0));

// Activity 3: Palindrome Number
// Task 3: Solve the "Palindrome Number" problem on LeetCode. Write a function that takes an integer and retums true if it is a palindrome, and false otherwise. • Log the result for a few test cases, including edge cases like negative numbers.

const palindrome = x => {
    let reversed = 0;
    let num = Math.abs(x);

    while(num > 0) {
        let temp = num%10;
        reversed = reversed * 10 + temp;
        num = Math.floor(num / 10);
    }

    if(reversed == Math.abs(x)) {
        return true;
    } else {
        return false;
    }
}

console.log("Palindromes", palindrome(12121), palindrome(-12121), palindrome(0), palindrome(12345));

// Activity 4: Merge Two Sorted Lists
// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// Write a function that takes two sorted linked lists and returns a new sorted list by merging them. Create a few test cases with linked lists and log the merged list.

const mergeLists = (list1 = [], list2 = []) => {
    let n1 = list1.length;
    let n2 = list2.length;

    if(n1 === 0 && n2 === 0) return [];
    let mergedList = [];
    let first = 0, second = 0;
    while(first < n1 || second < n2) {
        if(list1[first] < list2[second]) {
            mergedList.push(list1[first]);
            first++;
        } else {
            mergedList.push(list2[second]);
            second++;
        }
    }

    while(first < n1) {
        mergedList.push(list1[first]);
        first++;
    }
    while(second < n2) {
        mergedList.push(list2[second]);
        second++;
    }

    return mergedList;
}
let list1 = [1,3,5,7], list2 = [2,4,6,8,9,10];
console.log(list1, "merged with", list2, "gives", mergeLists(list1, list2));

// Activity 5: Valid Parentheses
// Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// Write a function that takes a string containing just the characters 'C, )', 'T, T', 'T' and '1', and determines if the input string is valid. A string is valid if open brackets are closed in the correct order. Log the result for a few test cases.
const isValid = (s) => {
    const stack = [];
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log("Valid Parenthesis");

console.log(isValid("()"));      
console.log(isValid("()[]{}"));  
console.log(isValid("(]"));       
console.log(isValid("([)]"));     
console.log(isValid("{[]}"));    
console.log(isValid(""));          
