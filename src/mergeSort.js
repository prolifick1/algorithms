/*
Overview
- Combination of merging and sorting
- Exploits the fact that arrays of 0 or 1 elements are always sorted
- Starts by breaking up array into multiple arrays of length 0 or 1
- then merging back together so that the array is sorted
- continues merging until there is one unified array

Time & Space Complexity
- Time -> O(nlog(n))
  - Spliting all of the elements is O(n)
  - Merging the split arrays is O(log(n))
- Space -> O(n) // Sub arr is created for each element
*/

const merge = (arr1, arr2) => {
  let mergedArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }
  if (i < arr1.length) mergedArr = mergedArr.concat(arr1.slice(i));
  if (j < arr2.length) mergedArr = mergedArr.concat(arr2.slice(j));
  return mergedArr;
};

const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, mid);
  let secondHalf = arr.slice(mid);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
};
