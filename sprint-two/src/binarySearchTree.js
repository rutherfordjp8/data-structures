var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTreeMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value) {
  var node = new BinarySearchTree(value);
  
  //if (value >= this.value)
  if (value >= this.value) {
    //if this.right is null
    if (this.right === null) {
      //this.right = node
      this.right = node;
    } else {
      //else this.right.insert(value);
      this.right.insert(value);
    }
  } else {
  //else
    //if this.left is null
    if (this.left === null) {
      //this.left = node
      this.left = node;
    } else {
      //else this.left.insert(value);
      this.left.insert(value);
    }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
