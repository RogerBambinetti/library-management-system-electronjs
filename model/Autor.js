"use strict"
class Autor {
    constructor() {
        
    }
    set pkAutor(pkAutor) {
        this._pkAutor = pkAutor;
    }
    get pkAutor() {
        return this._pkAutor;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }

}
module.exports = Autor