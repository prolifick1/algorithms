const { ListNode } = require('../test/utils.js');


const removeElements = function(llist, target) {
     let dummy = new ListNode(-1);
    let curr = dummy;
    dummy.next = llist;
    
    while(curr.next) {
        if(curr.next.val === target) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }    
    }
    return dummy.next; 
};

module.exports = removeElements;
