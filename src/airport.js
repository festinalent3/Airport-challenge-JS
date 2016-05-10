'use strict';

function Airport() {
  this.landedPlanes = [];
  this.MAX_CAPACITY = 20;
};

Airport.prototype.dock = function(plane) {
  this.isFull();
  this.landedPlanes.push(plane);
  console.log(this.landedPlanes.length);
};

Airport.prototype.isFull = function() {
  if (this.landedPlanes.length === this.MAX_CAPACITY) {
    throw new Error("nope, full!");
  }
  return false;
};
