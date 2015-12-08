/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
var linkedList = linkedListGenerator();
function linkedListGenerator(){
  var head = null,
      tail = null,
      length = 0;
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
    length++;
    return newNode;
  };

  var get = function(number) {
    var currNode = this.getHead(),
        i = 0;
      while (i < number) {
        if(currNode === tail) {
          return false;
        }
      currNode = currNode.next;
      i++;
    }
    return currNode;
  };

  var remove = function(val) {
    var currNode = this.get(val),
        previous = this.get(val - 1);
    if ( val >= length) {
      return false;
    }
    if ( length === 1 && val === 0 ) {
      head = null;
      tail = null;
    } else if ( val === 0 ){
      head = currNode.next;
    } else if( val === length -1 ) {
      tail = previous;
      previous.next = null;
    } else {
      previous.next = currNode.next;
    }
    length --;
  };

  var createNode = function ( value ) {
    return {
      value : value,
      next : null
    };
  };

  var insert = function(val, index) {
    var currNode = this.get( index ),
        previous = this.get( index - 1 );
        tmpNode = createNode( val );

    if ( index >= length || index < 0) {
      return false;
    } else if ( index === 0)  {
      tmpNode.next = currNode;
      head = tmpNode;
    } else {
      previous.next = tmpNode;
      tmpNode.next = currNode;
    }
      length++;
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