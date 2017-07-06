var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = _.extend({}, queueMethods);
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {
  
  enqueue: function(value) {
    this.storage[this.size().toString()] = value;
  },
  
  dequeue: function() {
    var temp = this.storage['0'];
    delete this.storage['0'];
      
    if (this.size() > 0) {
      var counter = 0;
      for (var key in this.storage) {
        this.storage[counter.toString()] = this.storage[(counter + 1).toString()];
        delete this.storage[(counter + 1).toString()];
      }
    }
    
    return temp;
  },
    
  size: function() {
    return Object.keys(this.storage).length;
  }

};


