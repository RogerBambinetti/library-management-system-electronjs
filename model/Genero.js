"use strict"
class Genero {
    constructor() {
        
    }
    set pkGenero(pkGenero) {
        this._pkGenero = pkGenero;
    }
    get pkGenero() {
        return this._pkGenero;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
}
module.exports = Genero