

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
    var ind = indexOfKey(this._storage.get(index), k);
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
  //returns the value stored at the key(k)
  //create variable, pairs, that represents pairs array at index
  var pairs = this._storage.get(index);
  //if an array of pairs does exist at index and is not empty
  if (Array.isArray(pairs) && pairs.length > 0) {
    //create variable, key, that represents if/where key exists in pairs
    var key = indexOfKey(pairs, k);
    //if pairs indexOfKey
    if (key !== -1) {
      //return pairs[key][1]
      return pairs[key][1];
    }
    return undefined;
  } else {
  //else return undefined
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //remove key value pair and shift the bucket array
  
  //create variable, pairs, that represents pairs array at index
  var pairs = this._storage.get(index);
  //if an array of pairs does exist at index and is not empty
  if (Array.isArray(pairs) && pairs.length > 0) {
    //create variable key that represents if/where key is in pairs
    var key = indexOfKey(pairs, k);
    //if pairs contains key
    if (key !== -1) {
      //reallocate elements in pairs 
      pairs = pairs.slice(0, key).concat(pairs.slice(key + 1));
      //set _.storage at index to the new pairs.
      this._storage.set(index, pairs);
    } 
  }
};

var indexOfKey = function(collection, value) {
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
 * insert - O(1)
 * retrieve - O(1)
 * remove - O(1)
 */


