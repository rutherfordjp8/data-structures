var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (arguments[1] === undefined) {
    return this.contains(target, this);
  }

  if (arguments[1].value === target) {
    return true;
  } else if (arguments[1].children.length === 0 && arguments[1].value !== target) {
    return false;
  } else {
    for (var i = 0; i < arguments[1].children.length; i++) {
      if (this.contains(target, arguments[1].children[i])) {
        return true;
      }
    }
  }

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions? 
 * addChild - Constant, O(1)
 * contains - Linear, O(n)
 */
