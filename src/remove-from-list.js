const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');
/**
 * Дан односвязный связный список целых чисел (l) и целое число (k),
 * удалите все элементы из списка l, содержащие значение k.
 *
 * @param {ListNode} l
 * @param {Number} k
 * @return {ListNode}
 */
module.exports = function removeKFromList(l, k) {

  let dummy = new ListNode(0);
  dummy.next = l;
  
 
  let current = dummy;

  while (current.next !== null) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummy.next;
}