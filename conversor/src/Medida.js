"use strict"

class Medida {

  constructor(temp) {

    this.int = temp;
    this.magnitud = {};

    let array = temp.match(/([-+]?\d+(?:\.\d+)?)\s*([A-Za-z])\s*(?:to)?\s*([A-Za-z])\s*$/)

    if(array[1]){ this.valor = array[1]; }
    if(array[2]){ this.tipo = array[2].toLowerCase(); }
    if(array[3]){ this.cover = array[3].toLowerCase(); }

  }

  convertir(magnitud, mymedida) {
    
    try {
      this.magnitud = mymedida;
  
      var calculadora = new this.magnitud[this.tipo](this.int);
  
      converted.innerHTML = this.tipo;
      console.log(this.tipo);
      console.log(this.int);
  
      calculadora.setCalculate(magnitud);
  
      return calculadora.calcular(this.cover);
      
    } catch(err){
      return "ERROR! Introduce algo como '-30C to K' o '20f c'";
    }
    
  }

  get getValor() { return this.valor }
  get getTipo() { return this.tipo }
  get getCover() { return this.cover }

}
