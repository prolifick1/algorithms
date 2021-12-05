function middleNode(llist) {
  let slow = llist;
  let fast = llist;
  let count = 0;
  while(fast.next) {
    fast = fast.next;
    count++;
  }
  let middle = Math.floor(count/2);
  while(slow.next && count > middle) {
    slow = slow.next;
    count--;
  }
  return slow;
}

module.exports = middleNode;
