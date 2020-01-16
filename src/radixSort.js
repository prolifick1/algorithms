/*
Overview
- Special sorting algorithm work on lists of positive integers
- NOT a comparison sort
- Exploits the fact that information about the size of the number is encoded in the number of digits

Pseudo Code
- Iterate over the array of numbers to find the number with the most digits
- The most digits is the number of times the bucketing process needs to happen
- Iterate over the array of numbers to get the digit at the place of the outer count

Time & Space Complexity
- Time -> O(nk)
- n = number of integers
- k = length of numbers
*/

const getDigit = (num, digit) => {
  return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
};

const numLength = num => {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const maxDigits = arr => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, numLength(arr[i]));
  }
  return max;
};

const radixSort = arr => {
  let max = maxDigits(arr);
  for (let i = 0; i < max; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let num of arr) {
      let digit = getDigit(num, i);
      buckets[digit].push(num);
    }
    arr = [].concat(...buckets);
  }
  return arr;
};
