"use strict"

class Medida {
  constructor(temp) {
    let array = temp.match(/([-+]?\d+(?:\.\d+)?)\s*([FfCcKkMmPp])\s*(?:to)?\s*([FfCcKkMmPp])\s*$/)
    if(array[1]){ this.valor = array[1]; }
    if(array[2]){ this.tipo = array[2]; }
    if(array[3]){ this.cover = array[3]; }
  }

  static type(temp){
    var array = temp.match(/([-+]?\d+(?:\.\d+)?)\s*([FfCcKkMmPp])\s*(?:to)?\s*([FfCcKkMmPp])\s*$/);
    var typ = 0;
    if(array != null){
      if(array[2].match(/[FfCcKkMmPp]/) && array[3].match(/[FfCcKkMmPp]/)) {
        if(array[2].match(/[FfCcKk]/)) {
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
  get getValor() { return this.valor }
  get getTipo() { return this.tipo }
  get getCover() { return this.cover }
}

module.exports = Medida;
