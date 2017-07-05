var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};


Queue.prototype.enqueue = function(value) {
  this.storage[this.size()] = value;
};

Queue.prototype.dequeue = function() {
  var temp = this.storage['0'];
  delete this.storage['0'];
  
  if (this.size() > 0) {
    var index = 0;
    for (var key in this.storage) {
      this.storage[index] = this.storage[index + 1];
      delete this.storage[index + 1];
      index++;
    }
  }

  return temp;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;  
};


