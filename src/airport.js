'use strict';

function Airport() {
  this._hangar = [];
  this.MAX_CAPACITY = 20;
};

Airport.prototype.dock = function(plane) {
  this.isFull();
  this._hangar.push(plane);
};

Airport.prototype.isFull = function() {
  if (this._hangar.length === this.MAX_CAPACITY) {
    throw new Error("nope, full!");
  }
  return false;
};

Airport.prototype.landedPlanes = function() {
  return this._hangar;
};
