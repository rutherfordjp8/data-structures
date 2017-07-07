

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create an array "pairs" for the posistion of the index in this.storage.
  //push key value pairs into the array of pairs.

  //if an array of pairs does not exist at index...
  if (!Array.isArray(this._storage.get(index))) {
    //create an array of pairs
    var pairs = [];
    //create an array for key value pairs 
    //then push key value pairs into "pairs".
    pairs.push([k, v]);
    //insert this new array into the index
    this._storage.set(index, pairs);
  } else {
    //if array "pairs" already exist
    //if key exists in pairs
    var ind = containsKey(this._storage.get(index), k);
    if (ind !== -1) {
      //override the value in the key/value pair in array "pairs"
      this._storage.get(index)[ind][1] = v;
    } else {
      //else, push key/value pair to 'pairs'
      this._storage.get(index).push([k, v]);    
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

var containsKey = function(collection, value) {
  if (collection.length === 0) {
    return -1;
  }
  
  for (var i = 0; i < collection.length; i++) {
    if (collection[i][0] === value) {
      return i;
    }
  }
  
  return -1;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


