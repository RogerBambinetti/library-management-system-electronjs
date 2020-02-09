"use strict"
class Obra {
    constructor() {
         
    }
    set pkObra(pkObra) {
        this._pkObra = pkObra;
    }
    get pkObra() {
        return this._pkObra;
    }
    set titulo(titulo) {
        this._titulo = titulo.charAt(0).toUpperCase() + titulo.slice(1);
    }
    get titulo() {
        return this._titulo;
    }
    set classificacao(classificacao) {
        this._classificacao = classificacao;
    }
    get classificacao() {
        return this._classificacao;
    }
    set ano(ano) {
        this._ano = ano;
    }
    get ano() {
        return this._ano;
    }
    set fkEditora(fkEditora) {
        this._fkEditora = fkEditora;
    }
    get fkEditora() {
        return this._fkEditora;
    }
    set fkGenero(fkGenero) {
        this._fkGenero= fkGenero;
    }
    get fkGenero() {
        return this._fkGenero;
    }

    verificaClassificacaoObra(usuario) {
        if (usuario.calculaIdadeUsuario() >= this._classificacao) {
            return true;
        } else {
            return false;
        }
    }
}
module.exports = Obra