"use strict"
var Temperatura = require("./Temperatura.js");

class Celsius extends Temperatura {
  constructor(temp){
    if(Temperatura.type(temp) == 1){
      super(temp);
    }
  }
  convertir() {
    this.resultado = 0;
    if(super.getCover.match(/[Cc]/)){
      this.resultado = super.getValor;
    }
    else{
      if(super.getCover.match(/[Ff]/)){
        this.resultado = (super.getValor * (9/5))+32;
      }
      else{
        this.resultado = super.getValor - 0 + 273.15;
      }
    }
    return this.resultado;
  }
}

module.exports = Celsius;
