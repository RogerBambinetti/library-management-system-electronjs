"use strict"
class Exemplar {
    constructor() {
        
    }
    set pkExemplar(pkExemplar) {
        this._pkExemplar = pkExemplar;
    }
    get pkExemplar() {
        return this._pkExemplar;
    }
    set numero(numero) {
        this._numero = numero;
    }
    get numero() {
        return this._numero;
    }
    set fkObra(fkObra) {
        this._fkObra = fkObra;
    }
    get fkObra() {
        return this._fkObra;
    }
}
module.exports = Exemplar