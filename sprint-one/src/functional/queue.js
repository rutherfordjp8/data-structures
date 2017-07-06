var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size().toString()] = value;
  };

  someInstance.dequeue = function() {
    var temp = storage['0'];
    delete storage['0'];

    if (someInstance.size() > 0) {
      var index = 0;
      for (var key in storage) {
        storage[(index).toString()] = storage[(index + 1).toString()];
        delete storage[(index + 1).toString()];
        index++;
      }
    }
    
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
