"use strict"
class Editora {
    constructor() {
        
    }
    set pkEditora(pkEditora) {
        this._pkEditora = pkEditora;
    }
    get pkEditora() {
        return this._pkEditora;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }

}
module.exports = Editora