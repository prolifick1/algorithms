function ListNode(val) {
  this.val = val;
  this.next = null;
}


function linkedListToArray(list) {
    const result = [];
    let curNode = list;
    while(curNode){
        result.push(curNode.val);
        curNode = curNode.next
    }
    return result
}

function arrayToLinkedList(array) {

    if(!array || !array.length){
        return null;
    }

    let i = 1;
    const len = array.length
    let head = new ListNode(array[0])
    let curNode = head;
    while (i<len) {
        curNode.next = new ListNode(array[i])
        curNode = curNode.next
        i++;
    }
    return head;
}

module.exports = { 
  ListNode,
  arrayToLinkedList,
  linkedListToArray
}
