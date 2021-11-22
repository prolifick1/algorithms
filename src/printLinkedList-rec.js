let spyWrapper = {
  printList : function printList(llist) {
   if(!llist.next) {
     console.log(llist.val);
     return;
    }
    console.log(llist.val);
   spyWrapper.printList(llist.next);
  }
}
module.exports = spyWrapper;
