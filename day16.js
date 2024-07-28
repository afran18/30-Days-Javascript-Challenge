//  Day 16: Recursion

// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases. •

const factorial = num => {
    if(num === 0 || num === 1) return num;

    return num * factorial(num-1);
}

console.log(factorial(5), factorial(0), factorial(1), factorial(10));

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

const fibonacci = num => {
    if(num === 0 || num === 1) return num;

    return fibonacci(num-1) + fibonacci(num-2);
    
}

console.log(fibonacci(6));

// Activity 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
const myArr = [1,2,3,4,5];
const myArr2 = [5,6,7,8,9,10];
const myArr3 = [1];
const myArr4 = [];

const calcSum = (arr, n) => {
    if(n <= 0) return 0;
    return calcSum(arr, n-1) + arr[n-1];
}

console.log(calcSum(myArr, myArr.length));
console.log(calcSum(myArr2, myArr2.length));
console.log(calcSum(myArr3, myArr3.length));
console.log(calcSum(myArr4, myArr4.length)); 
/*
const calcSum = arr => {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
};

*/

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

const maxEle = (arr, n) => {
    if(n<=0) return -1;
    if(n === 1) return arr[0];

    const maxOfRest = maxEle(arr, n-1);

    return arr[n-1] > maxOfRest ? arr[n-1] : maxOfRest;

}

console.log(maxEle(myArr, myArr.length));
console.log(maxEle(myArr2, myArr2.length));
console.log(maxEle(myArr3, myArr3.length));
console.log(maxEle(myArr4, myArr4.length));  
/* 
const maxEle = arr => {
    if (arr.length === 1) return arr[0];

    const maxOfRest = findMax(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
};

*/

// Activity 3: String Manipulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

const reverseStr = (str) => {
    if (str === "") return "";
    else
    return reverseStr(str.slice(1)) + str[0];
};

console.log(reverseStr("afran"));
console.log(reverseStr(""));
console.log(reverseStr("n"));

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

const isPalindrome = (str, start = 0, end = str.length - 1) => {
    if(start >= end) return true;

    if(str[start] !== str[end]) return false;

    return isPalindrome(str, start + 1, end - 1);
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("afran"));

// Activity 4: Recursive Search
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

let bsArr = [4,8,11,12,15,22,25,28];

const binarySearch = (arr, target, start, end) => {
    if(start > end) return -1;

    let mid = Math.floor((start + end)/2);

    if(arr[mid] === target) return mid;

    if(arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, end);
    }
}
let zeroArr = [];

console.log(binarySearch(bsArr, 15, 0, bsArr.length));
console.log(binarySearch(bsArr, 28, 0, bsArr.length));
console.log(binarySearch(bsArr, 4, 0, bsArr.length));
console.log(binarySearch(zeroArr, 5, 0, zeroArr.length));

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

const countOcc = (arr, target, index = 0 ) => {
    if(index >= arr.length) return 0;
    if(arr[index] === target) {
        return 1 + countOcc(arr, target, index + 1);
    } else {
        return countOcc(arr, target, index + 1);
    }
}

let testArr1 = [1, 2, 3, 4, 1, 1, 2, 1];
let testArr2 = [4, 4, 4, 4, 4, 4, 4];

console.log(countOcc(testArr1, 1));
console.log(countOcc(testArr2, 4));

/* 
const countOccurrencesHelper = (arr, target, index, count) => {
    if (index >= arr.length) return count;

    if (arr[index] === target) {
        return countOccurrencesHelper(arr, target, index + 1, count + 1);
    } else {
        return countOccurrencesHelper(arr, target, index + 1, count);
    }
}

const countOccurrences = (arr, target) => {
    return countOccurrencesHelper(arr, target, 0, 0);
}

*/

// Activity 5: Tree Traversal (Optional)
// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const inOrderTraversal = (node, result = []) => {
    if (node !== null) {
        inOrderTraversal(node.left, result);  // Visit left subtree
        result.push(node.value);              // Visit node
        inOrderTraversal(node.right, result); // Visit right subtree
    }
    return result;
}

// Helper function to create a sample tree for testing
const createSampleTree = () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    return root;
}



// Test case
const sampleTree = createSampleTree();
const result = inOrderTraversal(sampleTree);
console.log(result);  // Output should be [4, 2, 5, 1, 6, 3, 7]

// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.