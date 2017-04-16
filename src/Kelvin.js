(function(calculates) {

  var k = {};

  k.k = function(val) {
    return val;
  }

  k.c = function(val) {
    return val - 273.15;
  }

  k.f = function(val) {
    return ((val - 273.15) * (9/5))+32;
  }

  calculates.k = k;
  calculates.K = k;

} (magnitud.calculates = magnitud.calculates || {}))
