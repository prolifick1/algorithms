let { ListNode }  = require('../test/utils.js');

module.exports = function removeNthFromEnd(head, n) {
let fast = head;
    let slow = head;
    while(n !== 0) {
        fast = fast.next;
        n--;
    }
    if(!fast) {
        return head.next;
    }
    while(fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;  
};

