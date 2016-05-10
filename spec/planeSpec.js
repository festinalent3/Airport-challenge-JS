describe("Plane", function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = {
      isStormy: function() {
        return value;
      },
      dock: function() {
        return value;
      }
    };

    spyOn(airport,'isStormy').and.returnValue(false);
    spyOn(airport,'dock').and.returnValue(true);

  });

  it("should be able to land at an airport", function() {
    plane.land(airport);
    expect(plane.isLanded).toEqual(true);
    expect(plane.airport).toEqual(airport);

  });

  it("should be able to take off from an airport", function() {
    plane.land(airport);
    plane.takeOff();
    expect(plane.isLanded).toEqual(false);
    expect(plane.airport).toEqual('none');
  });

});
