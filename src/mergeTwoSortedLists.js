let { ListNode } = require('../test/utils.js');

let mergeTwoLists = function (l1, l2) {
 let dummyNode = new ListNode(-1);
  let l3 = dummyNode;
  while(l1 && l2) {
    if(l1.val < l2.val) {
      l3.next = l1;
      l1 = l1.next;
    } else {
      l3.next = l2;
      l2 = l2.next;
    }
    l3 = l3.next;
  }
  if(!l1) {
    l3.next = l2;
  }
  if(!l2) {
    l3.next = l1
  }
  return dummyNode.next;
}

module.exports = mergeTwoLists;
