"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(_nome, _cpf, _data_nascimento, _telefone, _endereco, _altura, _peso) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    getNome() {
        return this.nome;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    getCPF() {
        return this.cpf;
    }
    setCPF(_cpf) {
        this.nome = _cpf;
    }
    getData_nascimento() {
        return this.data_nascimento;
    }
    setData_nascimento(_data_nascimento) {
        this.data_nascimento = _data_nascimento;
    }
    getTelefone() {
        return this.telefone;
    }
    setTelefone(_telefone) {
        this.telefone = _telefone;
    }
    getEndereco() {
        return this.endereco;
    }
    setEndereco(_endereco) {
        this.endereco = _endereco;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(_altura) {
        this.altura = _altura;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(_peso) {
        this.peso = _peso;
    }
    mostraPessoa() {
        console.log(`Nome: ${this.nome}
        CPF:${this.cpf}
        Data:${this.data_nascimento}
        Telefone:${this.telefone}
        Endereço:${this.endereco}
        Altura:{this.altura}
        Peso:${this.peso}`);
    }
    //implementar os metodos
    falar() {
        //logica de negocio
        console.log(`${this.nome} está falando`);
    }
    falarFrase(_frase) {
        //logca de ngc
        console.log(`${this.nome} falar:${_frase}`);
    }
    andar() {
        console.log(`${this.nome} esta andando...`);
    }
    andarQuilometros(quilometros) {
        setTimeout(() => {
            console.log(`${this.nome}caminhou ${quilometros} quilometros`);
        }, 4000);
    }
    comer() {
        console.log(`${this.nome} esta comendo...`);
    }
    comerPrato(prato) {
        console.log(`${this.nome} esta comendo... ${prato}`);
    }
    /**CRUD */
    cadastroPessoa(pessoa) {
        console.log('Pessoa cadastrada com sucesso');
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map