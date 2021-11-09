function hasCycle(llist){
  if(!llist) {
    return false;
  }
  let p1 = llist;
  let p2 = llist.next;
  while(p2 && p2.next){
    p1 = p1.next;
    p2 = p2.next.next;
    if(p1 === p2) {
      return true;
    }
  }
  return false;
  
}

module.exports = hasCycle;
