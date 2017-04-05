"use strict"
var Temperatura = require("./Temperatura.js");


class Farenheit extends Temperatura {
  constructor(temp){
    if(Temperatura.type(temp) == 2){
      super(temp);
    }
  }

  convertir(){
    if(super.getCover.match(/[Cc]/)){
      this.resultado = (super.getValor-32) * (5/9);
    }
    else{
      if(super.getCover.match(/[Ff]/)){
        this.resultado = super.getValor;
      }
      else{
        this.resultado = ((super.getValor-32) * (5/9)) + 273.15;
      }
    }
    return this.resultado;
  }
}
module.exports = Farenheit;
