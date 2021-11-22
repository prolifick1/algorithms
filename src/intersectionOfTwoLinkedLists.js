function getIntersectionNode(listA, listB) {
  if(listA === null || listB === null) { return null };
  let p1 = listA;
  let p2 = listB;
  while(p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
    if(p1 === p2) {
      return p1;
    };
    if(!p1) {
      p1 = listB;
    }
    if(!p2) {
      p2 = listA;
    }
  }
  return p1;
}

module.exports = getIntersectionNode;
