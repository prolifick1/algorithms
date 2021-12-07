function productExceptSelf(arr) {
  let lefts = new Array(arr.length);
  lefts[0] = 1;
  for(let i = 1; i < arr.length; i++) {
    lefts[i] = arr[i-1] * lefts[i-1];
  }

  let rights = new Array(arr.length);
  rights[rights.length - 1] = 1;
  for(let i = rights.length - 2; i >= 0; i--) {
    rights[i] = arr[i+1] * rights[i+1];
  }

  let res = new Array(arr.length);
  for(let i = 0; i < arr.length; i++) {
    if(lefts[i] * rights[i] === -0) {
      res[i] = 0;
    } else {
      res[i] = lefts[i] * rights[i];
    }
  }
  return res;
}

module.exports = productExceptSelf;
