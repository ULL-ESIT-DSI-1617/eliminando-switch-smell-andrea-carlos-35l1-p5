(function(calculates) {

  var c = {};

  c.k = function(val) {
    return val - 0 + 273.15;
  }

  c.c = function(val) {
    return val;
  }

  c.f = function(val) {
    return (val * (9/5))+32;
  }
  
  calculates.c = c;
  calculates.C = c;
} (magnitud.calculates = magnitud.calculates || {}))
