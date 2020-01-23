/*
Hash Tables

Hash Function:
- Fast (constant time)
- Doesn't cluster inputs are specific indeces (spread evenly)
- Deterministic (same input -> same output)
- Good idea to make hash table length prime

Handling Collisions
-***Separate Chaining***
  -At each index in our array we store values
  using a more sophisticated data structure (e.g. an array)
  - Allows us to store multiple key / value pairs at the same index
-***Linear Probing***
  - With linear probing, when we find a collision, we search through the array to find the next empty slot
  - Allows us to store a single key/value pair

Time Complexity (Avg)
- Insert: O(1)
- Deletion: O(1)
- Access: O(1)
*/

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total + WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  /*
    Set:
    - Accepts a key and a value
    - Hashes the key
    - Stores the key-value pair in the hash table array via separate chaining
  */

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  /*
    Get:
    - Accepts a key
    - Hashes the key
    - Loop over array at position to look for key
    - If there, return value
    - Else return undefined
  */
  get(key) {
    let index = this._hash(key);
    let chain = this.keyMap[index];
    if (chain) {
      for (let i = 0; i < chain.length; i++) {
        let pair = chain[i];
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }
    return undefined;
  }

  // Keys returns an array of all keys in the table (unique)
  keys() {
    let uniqueKeys = [];
    let keyObj = {};
    for (let chain of this.keyMap) {
      if (chain) {
        for (let pair of chain) {
          if (!keyObj[pair[0]]) {
            keyObj[pair[0]] = true;
            uniqueKeys.push(pair[0]);
          }
        }
      }
    }
    return uniqueKeys;
  }

  // Values returns an array of all values in the table (unique)
  values() {
    let uniqueValues = [];
    let valuesObj = {};
    for (let chain of this.keyMap) {
      if (chain) {
        for (let pair of chain) {
          if (!valuesObj[pair[1]]) {
            valuesObj[pair[1]] = true;
            uniqueValues.push(pair[1]);
          }
        }
      }
    }
    return uniqueValues;
  }
}

module.exports = HashTable;
