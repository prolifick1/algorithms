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
  for(let i = 1; i < arr.length; i++) {
    let k = i - 1;
    let newVal = arr[i];
    for(k; arr[k] > newVal && k >= 0 ; k--) {
      arr[k+1] = arr[k];
    }
    arr[k+1] = newVal;
  }
  return arr;
};

module.exports = insertionSort;
