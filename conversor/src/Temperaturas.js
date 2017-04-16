(function(magnitudes) {
  
  class Kelvin extends Temperatura {
    
    constructor(temp){
      super(temp);
      this.calculate = {};
    }

    setCalculate(conversiones) {
      this.calculate = conversiones.k;
    }

    calcular(temp) {
      return this.calculate[temp](super.getValor);
    }
    
  }

  class Celsius extends Temperatura {
    
    constructor(temp){
      super(temp);
      this.calculate = {};
    }

    setCalculate(conversiones) {
      this.calculate = conversiones.c;
    }

    calcular(temp) {
      return this.calculate[temp](super.getValor);
    }
    
  }

  class Farenheit extends Temperatura {
    
    constructor(temp){
      super(temp);
      this.calculate = {};
    }

    setCalculate(conversiones) {
      this.calculate = conversiones.f;
    }

    calcular(temp) {
      return this.calculate[temp](super.getValor);
    }

  }

  magnitudes.c = Celsius;
  magnitudes.k = Kelvin;
  magnitudes.f = Farenheit;

} (myMedida.magnitudes = myMedida.magnitudes || {}))

