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

BinarySearchTreeMethods.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value > this.value) {
    if (this.right !== null) {
      return this.right.contains(value);
    }
    return false;
  } else {
    if (this.left !== null) {
      return this.left.contains(value);
    }
    return false;
  }
  
};

BinarySearchTreeMethods.depthFirstLog = function(callback) {
  callback(this.value);

  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  } 

  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 * insert - O(log n)
 * contains - O(log n)
 * depthFirstLog - O(n)
 */
