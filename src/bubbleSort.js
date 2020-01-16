/*
Overview
- Iterates through a set to see if value is greater than next value
- If so, values are swapped
- Builds a sorted list from greatest to least

Psuedo Code
- Function takes in an unsorted array
- Outer for loop from the end to the beginning
- Inner for lopp from beginning to i - 1
- Swap if next elem is greater
- Break if no swaps are make

Time & Space Complexity
- Time -> O(n^2)
- Space -> O(1)
*/

const bubbleSort = arr => {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        noSwaps = false;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};
