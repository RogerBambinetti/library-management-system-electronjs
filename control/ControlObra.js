"use strict"
var Obra = require('../model/Obra');
var DaoObra = require('../model/DaoObra');
class ControlObra {
    constructor() {
        this.dao = new DaoObra();
        this.obra = new Obra();
    }

    inserir(titulo, classificacao, ano, fkGenero, fkEditora, fkAutor) {
        var erros = 0;
        if (titulo.length == 0) {
            erros++;
        } else if (classificacao.length == 0) {
            erros++;
        } else if (ano.length == 0) {
            erros++;
        }
        if (erros == 0) {
            this.obra.titulo = titulo;
            this.obra.classificacao = classificacao;
            this.obra.ano = ano;
            this.obra.fkGenero = fkGenero;
            this.obra.fkEditora = fkEditora;
            this.obra.fkAutor = fkAutor;
            if (this.dao.inserir(this.obra)) {
                console.log("Sucesso");
            } else {
                console.log("Erro");
            }
            return true;
        } else {
            return false;
        }
    }

    editar(pkObra, titulo, classificacao, ano, fkGenero, fkEditora, fkAutor) {
        this.obra.pkObra = pkObra;
        this.obra.titulo = titulo;
        this.obra.classificacao = classificacao;
        this.obra.ano = ano;
        this.obra.fkGenero = fkGenero;
        this.obra.fkEditora = fkEditora;
        this.obra.fkAutor = fkAutor;
        if (this.dao.editar(this.obra)) {
            console.log("Sucesso");
            return true;
        } else {
            console.log("Erro");
        }
    }

    excluir(pkObra) {
        if (this.dao.excluir(pkObra)) {
            console.log("Sucesso");
        } else {
            console.log("Erro");
        }
    }

    selecionar(pkObra) {
        return this.dao.selecionar(pkObra);
    }

    listar() {
        return this.dao.listar();
    }

    consultar(termo) {
        return this.dao.consultar(termo);
    }

    selecionarUltimopkObra() {
        return this.dao.selecionarUltimopkObra();
    }

}
module.exports = ControlObra