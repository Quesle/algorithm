/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 参考：https://leetcode.cn/problems/UHnkqh/
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) {
    return head;
  }
  function revert(node, prev) {
    var next = node.next;
    node.next = prev;
    if (next === null) {
      return node;
    }
    return revert(next, node);
  }
  return revert(head, null);
  // let prev = null;
  // let curr = head;
  // while (curr) {
  //     let next = curr.next
  //     curr.next = prev
  //     prev = curr
  //     curr = next
  // }
  // return prev
};
