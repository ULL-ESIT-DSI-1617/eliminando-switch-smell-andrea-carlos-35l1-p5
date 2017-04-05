"use strict"
var Temperatura = require("./Temperatura.js");

class Kelvin extends Temperatura {
  constructor(temp){
    if(Temperatura.type(temp) == 3){
      super(temp);
    }
  }

  convertir() {
    if(super.getCover.match(/[Cc]/)){
      this.resultado = super.getValor - 273.15;
    }
    else{
      if(super.getCover.match(/[Ff]/)){
        this.resultado = ((super.getValor - 273.15) * (9/5))+32;
      }
      else{
        this.resultado = super.getValor;
      }
    }
    return this.resultado
  }
}

module.exports = Kelvin;
