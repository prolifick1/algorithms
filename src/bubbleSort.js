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
  for(let i = 0; i < arr.length; i++) {
    for(let k = 0; k < arr.length; k++) {
      if(arr[k] > arr[k+1]) {
	let temp = arr[k];
	arr[k] = arr[k+1];
	arr[k+1] = temp;
      }
    }
  }
  return arr;
	
};

module.exports = bubbleSort;
