function deleteNode(llist, position) {
  if(!llist) { return null };
  if(position === 0) {
    return llist.next;
  }
  if(position === 1) {
    llist.next = llist.next.next;
    return llist;
  }
  let curr = llist;
  while(position > 1) {
    curr = curr.next;
    position--;
  }
  curr.next = curr.next.next;
  return llist;
}
module.exports = deleteNode;
