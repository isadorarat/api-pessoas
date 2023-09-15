export class Pessoa {

    private nome: string;
    private cpf: string;
    private data_nascimento: Date;
    private telefone: string;
    private endereco: string;
    private altura: number;
    private peso: number;

    public constructor(_nome: string,
        _cpf: string,
        _data_nascimento: Date,
        _telefone: string,
        _endereco: string,
        _altura: number,
        _peso: number,) {

        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    public getNome() {
        return this.nome;
    }
    public setNome(_nome: string) {
        this.nome = _nome;
    }
    public getCPF() {
        return this.cpf;
    }
    public setCPF(_cpf: string) {
        this.nome = _cpf;
    }
    public getData_nascimento() {
        return this.data_nascimento;
    }
    public setData_nascimento(_data_nascimento: Date) {
        this.data_nascimento = _data_nascimento;
    }
    public getTelefone() {
        return this.telefone;
    }
    public setTelefone(_telefone: string) {
        this.telefone = _telefone;
    }
    public getEndereco() {
        return this.endereco;
    }
    public setEndereco(_endereco: string) {
        this.endereco = _endereco;
    }
    public getAltura() {
        return this.altura;
    }
    public setAltura(_altura: number) {
        this.altura = _altura;
    }
    public getPeso() {
        return this.peso;
    }
    public setPeso(_peso: number) {
        this.peso = _peso;
    }

    public mostraPessoa(){
        console.log(`Nome: ${this.nome}
        CPF:${this.cpf}
        Data:${this.data_nascimento}
        Telefone:${this.telefone}
        Endereço:${this.endereco}
        Altura:{this.altura}
        Peso:${this.peso}`);
    }
    //implementar os metodos
    public falar() {
        //logica de negocio
        console.log(`${this.nome} está falando`);
    }
    public falarFrase(_frase: string) {
        //logca de ngc
        console.log(`${this.nome} falar:${_frase}`);
    }
    public andar(){
        console.log(`${this.nome} esta andando...`);
    }
    public andarQuilometros (quilometros:number){
        setTimeout(() => {
            console.log (`${this.nome}caminhou ${quilometros} quilometros`);
    }, 4000);
}

    public comer (){
        console.log(`${this.nome} esta comendo...`);
    }
    public comerPrato(prato:string){
        console.log(`${this.nome} esta comendo... ${prato}`);
    }

}

