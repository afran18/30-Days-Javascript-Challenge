// Day 18: Algorithms
// Activity 1: Sorting Algorithms
// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function bubbleSort(arr) {
    let size = arr.length;

    for(let i = 0; i<size-1; i++) {
        for(let j = 0; j<size - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(numbers));

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(arr) {
    let size = arr.length;
  
    for (let i = 0; i < size - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < size; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      // Swap the found minimum element with the first element
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  
    return arr;
  }
  
  const numbersSelectionSort = [64, 34, 25, 12, 22, 11, 90];
  console.log("Selection Sorted array:", selectionSort(numbersSelectionSort));
  
//Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function quicksort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];
    let equal = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else if (arr[i] > pivot) {
        right.push(arr[i]);
      } else {
        equal.push(arr[i]);
      }
    }
  
    return quicksort(left).concat(equal, quicksort(right));
  }
  
  const numbersQuicksort = [64, 34, 25, 12, 22, 11, 90];
  console.log("Quicksorted array:", quicksort(numbersQuicksort));
  
// Activity 2: Searching Algorithms
// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

function linearSearch(arr, target) {
  for(let i = 0; i<arr.length; i++) {
    if(arr[i] === target) return i;
  }
  return -1;
}

const linearSearchArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Element found at index:", linearSearch(linearSearchArray, 5));
/* 

function linearSearch(arr, target) {
  for (let i in arr) {  // 'i' represents the index
    if (arr[i] === target) return Number(i);
  }
  return -1;
}


function linearSearch(arr, target) {
  for (let [i, value] of arr.entries()) { // 'i' represents the index
    if (value === target) return i;
  }
  return -1;
}


function linearSearch(arr, target) {
  let foundIndex = -1;
  arr.forEach((value, i) => { // 'i' represents the index
    if (value === target && foundIndex === -1) {
      foundIndex = i;
    }
  });
  return foundIndex;
}

*/

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
const binarySearch = (arr, target) => {
  let length = arr.length;
  if(length === 0) return -1;

  let low = 0, high = length - 1;

  while(low <= high) {
    let mid = Math.floor(low + (high - low)/2);

    if(arr[mid] === target) {return mid;}

    if(arr[mid] < target){
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    
  }

  return -1;
}

const binarySearchArray = [1,4,7,9,11,12,25,28,36];
console.log("Binary search element found at index:", binarySearch(binarySearchArray, 7));

// Activity 3: String Algorithms
// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
const countCharacterOccurrences = str => {
  const charCountObj = {};

  for(let char of str) {
    if(charCountObj[char]) {
      charCountObj[char]++;
    } else {
      charCountObj[char] = 1;
    }
  }
  return charCountObj;
}

const exampleString = "Afran Baazigar";
const characterCounts = countCharacterOccurrences(exampleString);
console.log("Character counts:", characterCounts);

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  let charSet = new Set();
  let longestSubstring = '';
  
  let startOfLongest = 0; // To track the start index of the longest substring found

  for (let end = 0; end < s.length; end++) {
    while (charSet.has(s[end])) {
      charSet.delete(s[start]);
      start++;
    }

    charSet.add(s[end]);

    // Check if we found a new longest substring
    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      startOfLongest = start; // Update the start index of the longest substring
    }
  }

  // Extract the longest substring using the recorded start index and length
  longestSubstring = s.slice(startOfLongest, startOfLongest + maxLength);

  console.log("Longest substring without repeating characters:", longestSubstring);
  return maxLength;
}


const exampleString2 = "afranafran";
console.log("Length of longest substring without repeating characters:", lengthOfLongestSubstring(exampleString2));


// Activity 4: Array Algorithms
// Task 8: Write a function to rotate an array by k positions. Log the rotated array.
const leftRotate = (arr, k) => {
  let n = arr.length;
  k%=n;
  let temp = [];
  for(let i = 0; i<k; i++) {
    temp[i] = arr[i];
  }
  for(let i = 0; i<n - k; i++) {
    arr[i] = arr[i + k];
  }

  for(let i = n-k; i<n; i++) {
    arr[i] = temp[i - n + k];
  }

  // for (let i = 0; i < k; i++) {
  //   arr[n - k + i] = temp[i];
  // }
  return arr;
}

const rotateArray = [1,4,7,9,11,12,25,28,36];
console.log("Rotated array is:", leftRotate(rotateArray, 3));

/* 
const rotateRecursive = (arr, k) => {
  const n = arr.length;
  k %= n; // In case k is larger than the array length

  // Base case: no rotation needed or zero rotation
  if (k === 0) return arr;

  // Recursive step: rotate the array by 1 position
  function rotateByOne(arr) {
    const temp = arr.shift(); // Remove the first element
    arr.push(temp);          // Add it to the end
    return arr;
  }

  // Rotate the array k times
  for (let i = 0; i < k; i++) {
    rotateByOne(arr);
  }

  return arr;
}

const rotateArray = [1, 4, 7, 9, 11, 12, 25, 28, 36];
console.log("Rotated array is:", rotateRecursive(rotateArray, 3));

*/

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0, j = 0;

  // Merge the arrays while there are elements in both arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // If there are remaining elements in arr1, add them to mergedArray
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // If there are remaining elements in arr2, add them to mergedArray
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

const sortedArray1 = [1, 3, 5, 7];
const sortedArray2 = [2, 4, 6, 8];
const mergedArray = mergeSortedArrays(sortedArray1, sortedArray2);
console.log("Merged array:", mergedArray);


// Activity 5: Dynamic Programming (Optional)
// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
function fibonacci(n) {
  // Create an array of size n + 1 and initialize it with 0s
  const dp = new Array(n + 1).fill(0);
  
  // Base case
  if (n >= 1) dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp;
}

const n = 10; 
const fibNumbers = fibonacci(n);
console.log("Fibonacci numbers:", fibNumbers);

// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.