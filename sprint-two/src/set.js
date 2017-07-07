var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this.storage.push(item);
  } else {
    console.log(item, 'Already exists in the set!');
  }
};

setPrototype.contains = function(item) {
  if (this.storage.length === 0) {
    return false;  
  }
    
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === item) {
      return true;
    }
  }
  
  return false;
};

setPrototype.remove = function(item) {
  if (this.storage.length === 0) {
    return undefined;
  }
  
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === item) {
      this.storage = this.storage.slice(0, i).concat(this.storage.slice(i + 1));
      break;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add - O(1)
 * contains - O(n)
 * remove - O(n)
 */
