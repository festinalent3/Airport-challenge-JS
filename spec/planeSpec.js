// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport and confirm that it has landed

describe("Plane", function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = 'heathrow';
  });

  it("should be able to land at an airport", function() {
        plane.land(airport);
        expect(plane.isLanded).toEqual(true);
        expect(plane.airport).toEqual(airport);

  });

});





//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });
//
//
// plane = new Plane
//
//
// airport
//
// plane.land(dock, airport) {
//   land: false,
//
//
// }
//
// var airport = new Airport()
// airport.dock
//
// function Airport( {
//
// Airport.prototype.dock(plane
//
// Airport.prototype.reslease_from_dock();
//
//
//
// });
//
// airport.dock(plane)
//
// function dock(plane) {
//
// }
//
//
//
//
// airport.hanger to include plane
