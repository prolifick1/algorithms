function getNodeFromTail(llist, positionFromTail) {
  let curr = llist;
  let fast = llist;
  let count = 0;
  while(fast.next) {
    fast = fast.next;
    count++;
  }
  let dist = count - positionFromTail;
  while(dist > 0) {
    curr = curr.next;
    dist--;
  }
  return curr.val;
}

module.exports = getNodeFromTail;
