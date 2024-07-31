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
  