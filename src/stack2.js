class Stack {
  constructor() {
    this.storage = [];
    this.count = 0;
  }
  push(val) {
    this.storage[this.count] = val;
    this.count++;
  }
  pop() {
    let result = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return result;
  }
  length() {
    return this.count;
  }
  peek() {
    return this.storage[this.count - 1];
  }
  isEmpty() {
    return this.count === 0;
  }
}

module.exports = Stack

// class Stack {
//   constructor() {
//     this.count = 0;
//     this.storage = [];
//   }

//   push(val) {
//     this.storage[this.count] = val;
//     this.count++;
//   }

//   pop() {
//     if (this.count === 0) {
//       return undefined;
//     }

//     this.count--;
//     let result = this.storage[this.count];
//     delete this.storage[this.count];
//     return result;
//   }

//   length() {
//     return this.count;
//   }

//   peek() {
//     let result = this.storage[this.count - 1];
//     return result;
//   }

//   isEmpty() {
//     return this.count === 0;
//   }
// }

// module.exports = Stack;