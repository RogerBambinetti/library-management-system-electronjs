"use strict"
class Usuario {
    constructor() {

    }
    set pkUsuario(pkUsuario) {
        this._pkUsuario = pkUsuario;
    }
    get pkUsuario() {
        return this._pkUsuario;
    }
    set nome(nome) {
        this._nome = nome.charAt(0).toUpperCase() + nome.slice(1);
    }
    get nome() {
        return this._nome;
    }
    set nascimento(nascimento) {
        this._nascimento = nascimento;
    }
    get nascimento() {
        return this._nascimento;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }

    verificaTipoUsuario() {
        var tipo;
        if (this.tipo = "Professor") {
            return 1;
        } else {
            return 0;
        }
    }
}
module.exports = Usuario