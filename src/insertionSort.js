/*

Overview
- Builds up the sort by gradually creating a larger left section which is always sorted
- Good for 'online' data or data that is continuously coming in, so you don't need a complete data set

Pseudo Code
- Function takes an unsorted array
- Outer loop starts from the second element until the end
- Inner loop starts from i - 1 and goes to the beginning
- If inner loop is >= 0 and

Time & Space Complexity
- Time -> O(n^2)
- Space -> O(1)

*/

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    // save the new value
    let newValue = arr[i];
    // compare the new value to the sorted elements
    let k = i - 1;
    for (k; k >= 0 && arr[k] > newValue; k--) {
      // shift the larger value to the right
      arr[k + 1] = arr[k];
    }
    // insert new value at correct idx in sorted section
    arr[k + 1] = newValue;
  }
  return arr;
};

module.exports = insertionSort;
