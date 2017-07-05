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

    
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
