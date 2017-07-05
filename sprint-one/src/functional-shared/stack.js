var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.size().toString()] = value;
  },

  pop: function() {
    if (this.size() > 0) {
      var temp = this.storage[(this.size() - 1).toString()];
      delete this.storage[(this.size() - 1).toString()];
      return temp;
    }
    console.log('Cannot pop an empty Stack');
  },

  size: function() {
    return Object.keys(this.storage).length;
  }


};


