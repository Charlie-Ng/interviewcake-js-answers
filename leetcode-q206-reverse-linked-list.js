// Reverse a singly linked list.

var reverseList = function(head) {
    
    var cur = head;
    var pre = null;
    var next = cur.next;
    while(next) {
        
        if(cur.next) {
            next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        else {
            cur.next = pre;
            break;
        }
    }
    return cur;
    
};