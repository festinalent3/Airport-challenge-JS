'use strict';

function Plane() {
};

Plane.prototype.land = function(airport) {
  this.isLanded = true;
  this.airport = airport;
  airport.dock(this);
};

Plane.prototype.takeOff = function() {
  if (this.airport.isStormy()) {
    throw new Error('cannot takeoff during storm');
  }
  else {
    this.isLanded = false;
    this.airport = 'none';
  }
};
