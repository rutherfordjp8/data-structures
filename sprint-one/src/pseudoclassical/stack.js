var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Object.prototype.push = function() {

};

Object.prototype.pop = function() {

};

Object.prototype.size = function() {
  return Object.keys(this.storage).length;
};

