"use strict"
var Kelvin = require("./Kelvin.js"),
Farenheit = require("./Farenheit.js"),
Celsius = require("./Celsius.js"),
Metro = require("./Metro.js"),
Pulgada = require("./Pulgada.js");

var calculate = function () {
  let temp = original.value;
  let type = Medida.type(temp);
  //let type = Temperatura.type(temp);
  let calculadora;
  if(type == 1){
    type = Temperatura.type(temp);
    if(type == 1) {
      calculadora = new Celsius(temp);
    }
    else {
      if(type == 2) {
        calculadora = new Farenheit(temp);
      }
      else {
        if(type == 3) {
          calculadora = new Kelvin(temp);
        }
        else {
          converted.innerHTML = "ERROR! Introduce algo como '-30C to K' o '30m p'(las longitudes siempre positivas)";
        }
      }
    }
  }
  else{
    type = Longitud.type(temp);
    if(type == 1) {
      calculadora = new Metro(temp);
    }
    else {
      if(type == 2) {
        calculadora = new Pulgada(temp);
      }
    }
  }
  if(calculadora) {
    converted.innerHTML = calculadora.convertir();
  }
  else {
    converted.innerHTML = "ERROR! Introduce algo como '-30C to K' o '30m p'(las longitudes siempre positivas)";
  }
}

module.exports = calculate;
