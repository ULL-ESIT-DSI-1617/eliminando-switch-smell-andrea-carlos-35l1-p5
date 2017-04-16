"use strict"

class Temperatura extends Medida {

  constructor(temp){

    var array = temp.match(/([-+]?\d+(?:\.\d+)?)\s*([A-Za-z])\s*(?:to)?\s*([A-Za-z])\s*$/);

    if(array[2].match(/[FfCcKk]/) && array[3].match(/[FfCcKk]/)){
      super(temp)
    } else {
      console.log("Expresión inválida.")
      converted.innerHTML = "ERROR! Introduce algo como '-30C to K' o '20f c'";
    }

  }

}
