var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size().toString()] = value;
  };

  someInstance.pop = function() {
    if (someInstance.size() > 0) {
      var temp = storage[someInstance.size() - 1];
      delete storage[someInstance.size() - 1];
      return temp;
    }
    console.log('Cannot pop an empty stack');
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
