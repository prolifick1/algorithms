function productExceptSelf(arr) {
  let product = 1;
  for(let i = 0; i < arr.length; i++) {
    product *= arr[i]
  }
  let products = Array(arr.length).fill(product);
  let productsExceptSelf = []; 
  for(let i = 0; i < products.length; i++) {
   productsExceptSelf.push(products[i] / arr[i]);
  }
  return productsExceptSelf;
}

module.exports = productExceptSelf;
