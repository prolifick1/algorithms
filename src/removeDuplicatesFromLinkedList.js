let deleteDuplicates = function(llist) {
  if(!llist) {
    return null;
  }
  let curr = llist;
  while(curr.next) {
    if(curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  };
  return llist;
};

module.exports = deleteDuplicates;
