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
	let p1 = 0;
	let p2 = 0;
	let mergedArr = [];
	while(p1 < arr1.length && p2 < arr2.length) {
		if(arr1[p1] < arr2[p2]) {
			mergedArr.push(arr1[p1]);
			p1++;
		} else {
			mergedArr.push(arr2[p2]);
			p2++;
		};

	};
	if(p1 < arr1.length) {
		mergedArr = mergedArr.concat(arr1.slice(p1));
	};
	if(p2 < arr2.length) {
		mergedArr = mergedArr.concat(arr2.slice(p2));
	};
	return mergedArr;
};

const mergeSort = arr => {
	if(arr.length === 0 || arr.length === 1) {
		return arr;	
	};
	let mid = Math.floor(arr.length / 2);
	let leftHalf = arr.slice(0, mid);
	let rightHalf = arr.slice(mid);
	return merge(mergeSort(leftHalf), mergeSort(rightHalf));
	
};

module.exports = mergeSort;
