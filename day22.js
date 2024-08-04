/*
    PLZ NOTE THAT I AM STILL BUILDING MY PROBLEM SOLVING AND LOGIC BUILDING SKILLS HENCE I USED THE HELP OF CHATGPT FOR LOGIC
                                       OF BELOW PROGRAMS, AND THEN CODE IT IN JAVASCRIPT 
*/
// Day 22: LeetCode Medium

// Activity 1: Add Two Numbers
// Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list. Create a few test cases with linked lists and log the sum as a linked list.

function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(); 
    let current = dummy; 
    let carry = 0; 

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry; 
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10); 
        current.next = new ListNode(sum % 10);
        current = current.next; 
    }

    return dummy.next; // Return the head of the newly formed list
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert a linked list to an array for easy display
function linkedListToArray(list) {
    let arr = [];
    while (list !== null) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}

let l1 = createLinkedList([2, 4, 3]); 
let l2 = createLinkedList([5, 6, 4]); 

let result = addTwoNumbers(l1, l2);
console.log(linkedListToArray(result)); 

let l3 = createLinkedList([0]);
let l4 = createLinkedList([0]);
let result2 = addTwoNumbers(l3, l4);
console.log(linkedListToArray(result2)); 

let l5 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
let l6 = createLinkedList([9, 9, 9, 9]);
let result3 = addTwoNumbers(l5, l6);
console.log(linkedListToArray(result3)); 


// Activity 2: Longest Substring Without Repeating Characters
// Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
// Write a function that takes a string and returns the length of the longest substring without repeating characters. Log the length for a few test cases, including edge cases.


const longestSubstr = (str) => {
    let charSet = new Set();
    let maxLen = 0;
    let start = 0;  

    for (let end = 0; end < str.length; end++) {

        while (charSet.has(str[end])) {
            charSet.delete(str[start]);
            start++;
        }
        
        charSet.add(str[end]); 
        maxLen = Math.max(maxLen, end - start + 1); 
    }

    return maxLen;
};

console.log(longestSubstr("ABCABBCADEFGABCD")); 
console.log(longestSubstr("ABDEFGABEF")); 
console.log(longestSubstr("")); 
console.log(longestSubstr("A")); 
console.log(longestSubstr("PWWKEW")); 

// Activity 4: 3Sum
// Task 4: Solve the "3Sum" problem on LeetCode.
// Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero. • Log the triplets for a few test cases, including edge cases.


// Activity 5: Group Anagrams
// Task 5: Solve the "Group Anagrams" problem on LeetCode.
// Write a function that takes an array of strings and groups anagrams together. Log the grouped anagrams for a few test cases.
const groupAnagrams = (strs) => {
    const anagramMap = new Map();

    for (const str of strs) {
        // Sort the string and use it as a key
        const sortedStr = str.split('').sort().join('');
        
        // If the sorted string is not a key, initialize an empty array
        if (!anagramMap.has(sortedStr)) {
            anagramMap.set(sortedStr, []);
        }

        // Add the original string to the list of its anagrams
        anagramMap.get(sortedStr).push(str);
    }

    // Convert the map's values to an array and return
    return Array.from(anagramMap.values());
};


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams(["cba", "abc", "bca", "cab", "bac", "acb"]));
console.log(groupAnagrams(["listen", "silent", "enlist", "google", "gogole", "elgoog"]));
