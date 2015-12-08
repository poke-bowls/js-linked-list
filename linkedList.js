/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
var linkedList = linkedListGenerator();
function linkedListGenerator(){
  var head = null,
      tail = null;
  //Private variables
  var getHead = function() {
      return head;
  };

  var getTail = function() {
    return tail;
  };

  var add = function(value) {
    var newNode = {
      value: value,
      next: null
    };
    if(head === null && tail === null){
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
    return newNode;
  };

  var get = function(number) {
    var node = head,
        i = 0;
      while (i < number) {
        if(node === tail) {
          return false;
        }
      node = node.next;
      i++;
      }
  return node;
    };

  var remove = function(val) {
    var node = head,
        i = 0,
        removeMe = linkedList.get(val),
        previous = linkedList.get(val - 1),
        following = linkedList.get(val + 1);
    while(i < 0) {

    }

    removeMe = previous;
    previous.next = removeMe.next + 1;

  };

  var insert = function(value, vumber) {
  };

  //Public variables
  return {
    linkedList: linkedList,
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  };
}