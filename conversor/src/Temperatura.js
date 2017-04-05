"use strict"
var Medida = require("./Medida.js");

class Temperatura extends Medida {
  constructor(temp){
    var array = temp.match(/([-+]?\d+(?:\.\d+)?)\s*([FfCcKk])\s*(?:to)?\s*([FfCcKk])\s*$/);
    if(array[2].match(/[FfCcKk]/) && array[3].match(/[FfCcKk]/)){
      super(temp)
    }
    else {
      console.log("Expresión inválida.")
    }
  }
  static type(temp){
    var array = temp.match(/([-+]?\d+(?:\.\d+)?)\s*([FfCcKk])\s*(?:to)?\s*([FfCcKk])\s*$/);
    var typ = 0;
    if(array != null){
      if(array[2].match(/[FfCcKk]/) && array[3].match(/[FfCcKk]/)) {
        if(array[2].match(/[Cc]/)) {
          typ = 1;
        }
        else {
          if(array[2].match(/[Ff]/)) {
            typ = 2;
          }
          else {
            typ = 3;
          }
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

module.exports = Temperatura;
