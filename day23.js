/*
    PLZ NOTE THAT I AM STILL BUILDING MY PROBLEM SOLVING AND LOGIC BUILDING SKILLS HENCE I USED THE HELP OF CHATGPT FOR LOGIC
                                       OF BELOW PROGRAMS, AND THEN CODE IT IN JAVASCRIPT 
*/
// Day 23: LeetCode Hard

// Activity 1: Median of Two Sorted Arrays
// Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays. Log the median for a few test cases, including edge cases.
function findMedianSortedArrays(nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    let x = nums1.length;
    let y = nums2.length;
    let low = 0, high = x;
    
    while (low <= high) {
        let partitionX = Math.floor((low + high) / 2);
        let partitionY = Math.floor((x + y + 1) / 2) - partitionX;
        
        let maxX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        let minX = (partitionX === x) ? Infinity : nums1[partitionX];
        
        let maxY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        let minY = (partitionY === y) ? Infinity : nums2[partitionY];
        
        if (maxX <= minY && maxY <= minX) {
            // We have partitioned arrays at the correct place
            // Now get max of left elements and min of right elements to find the median
            if ((x + y) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            // We are too far on the right side for partitionX. Go on left side.
            high = partitionX - 1;
        } else {
            // We are too far on the left side for partitionX. Go on right side.
            low = partitionX + 1;
        }
    }
    
    // If the input arrays are not sorted or the inputs are invalid
    throw new Error("Input arrays are not sorted or the inputs are invalid.");
}


console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Output: 0
console.log(findMedianSortedArrays([], [1])); // Output: 1
console.log(findMedianSortedArrays([2], [])); // Output: 2


// Activity 3: Trapping Rain Water
// Task 3: Solve the 'Trapping Rain Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining. Log the amount of trapped water for a few test cases.
function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let waterTrapped = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                waterTrapped += rightMax - height[right];
            }
            right--;
        }
    }

    return waterTrapped;
}
console.log("Activity 3 : Trapping Rain Water");

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));             
console.log(trap([1,0,2,1,0,1,3,2,1,2,1,0])); 
console.log(trap([0,0,0,0]));                 
console.log(trap([2,0,2]));        

// Activity 4: N-Queens
// Task 4: Solve the "N-Queens" problem on LeetCode.
// Write a function that places n queens on an nan chessboard such that no two queens attack each other, and returns all distinct solutions to the n- queens puzzle. Log the distinct solutions for a few test cases.

function solveNQueens(n) {
    const solutions = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    const isSafe = (row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false; // Check column
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false; // Check left diagonal
            if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false; // Check right diagonal
        }
        return true;
    };

    const backtrack = (row) => {
        if (row === n) {
            solutions.push(board.map(row => row.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q'; // Place queen
                backtrack(row + 1); // Recur for the next row
                board[row][col] = '.'; // Backtrack and remove queen
            }
        }
    };

    backtrack(0);
    return solutions;
}

console.log("Activity 4 : N-Queens");
console.log(solveNQueens(4));
console.log(solveNQueens(5));
console.log(solveNQueens(1));
