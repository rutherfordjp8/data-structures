var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    
    if (list.tail === null) {
      list.tail = Node(value);
      list.tail.next = node;
      list.head = Node(value);
      list.head.next = node;
    } else {
      list.tail.value = value;
      list.tail.next.next = node;      
      list.tail.next = node;
      
    }
  };

  list.removeHead = function() {
    if (list.head === null) {
      return {};
    } else {
      var temp = list.head.value;
      if (list.head.next.next !== null) {
        list.head = list.head.next;      
        list.head.value = list.head.next.value;
      }
      return temp;
    }
  };

  list.contains = function(target) {
    if (arguments[1] === undefined) {
      return list.contains(target, list.head.next);
    }
    
    if (target === arguments[1].value) {
      return true;
    } else if (arguments[1].next === null && target !== arguments[1].value) {
      return false;
    } else {
      return list.contains(target, arguments[1].next);
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
