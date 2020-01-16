/*
Overview
- Similar to bubble sort, but instead of first placing large values into sorted position, it places small values
- Iterate to find the smallest value
- Swap the start value with the smallest value

Pseudo Code
- Function taks an unsorted array
- Outer loop starts from the begining until just before the end of the array
- Inner loop starts i+1 to the end of the array
- store smallest numbers index
- compare and update smallest number idx as needed
- swap starting value with smallest number

Time & Space Complexity
- Time -> O(n^2)
- Space -> O(1)
*/

const selectionSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    if (i !== smallest) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
    }
  }
  return arr;
};
