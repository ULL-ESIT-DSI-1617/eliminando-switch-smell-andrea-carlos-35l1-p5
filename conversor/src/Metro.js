"use strict"
var Longitud = require('./Longitud.js')

class Metro extends Longitud {
  constructor(temp){
    if(Longitud.type(temp) == 1){
      super(temp);
    }
  }

  convertir() {
    this.resultado = 0;
    if(super.getCover.match(/[Mm]/)){
      this.resultado = super.getValor;
    }
    else{
      this.resultado = super.getValor/0.0254;
    }
    return this.resultado;
  }
}

module.exports = Metro;
