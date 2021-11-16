function rectangleOverlap(arr1, arr2) {
  if(arr1[2] <= arr2[0] || arr1[3] <= arr2[1] || arr1[0] >= arr2[2] || arr1[1] >= arr2[3])  {
    return false;
  }
  return true;
};

module.exports = rectangleOverlap;
