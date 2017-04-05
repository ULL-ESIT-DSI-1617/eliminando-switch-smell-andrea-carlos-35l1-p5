"use strict"
var Medida = require('./Medida.js');

class Longitud extends Medida {
  constructor(temp){
    var array = temp.match(/^\s*(\+?\d+(?:\.\d+)?)\s*([MmPp])\s*(?:to)?\s*([MmPp])\s*$/);

    if(array[2].match(/[MmPp]/) && array[3].match(/[MmPp]/)){
      super(temp)
    }
    else {
      console.log("Expresión inválida.")
    }
  }

  static type(temp){
    var array = temp.match(/^\s*(\+?\d+(?:\.\d+)?)\s*([MmPp])\s*(?:to)?\s*([MmPp])\s*$/);
    var typ = 0;
    if(array != null){
      if(array[2].match(/[MmPp]/) && array[3].match(/[MmPp]/)) {
        if(array[2].match(/[Mm]/)) {
          typ = 1;
        }
        else {
          typ = 2;
        }
      }
      else {
        console.log("Expresión inválida.")
      }
    }
    else{
      console.log("Expresión inválida.")
    }
    return typ;
  }
}


module.exports = Longitud;
