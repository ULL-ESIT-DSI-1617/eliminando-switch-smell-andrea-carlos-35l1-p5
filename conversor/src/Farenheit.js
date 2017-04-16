(function(calculates) {

  var f = {}

  f.k = function(val) {
    return ((val-32) * (5/9)) + 273.15;
  }

  f.c = function(val) {
    return (val-32) * (5/9);
  }

  f.f = function(val) {
    return val;
  }

  calculates.f = f;
  calculates.F = f;
} (magnitud.calculates = magnitud.calculates || {}))
