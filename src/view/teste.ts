import { Pessoa } from "../model/Pessoa";
let pessoa = new Pessoa ('Joao','11111111',new Date(2000,9,15),
'00000000000','rua numero 1',170,70 ); 

pessoa.falar();
pessoa.falarFrase("hello world!")

console.log("\n");

let pessoa2 = new Pessoa ('Maria Zeferina','33333333333', new Date (1955 , 8 , 29), '99999999999999','Rua das Corrigas', 165,55);
pessoa2.andar();
pessoa2.andarQuilometros(20);

console.log("\n");

let pessoa3 = new Pessoa ('Garfield' ,'222222', new Date (1999,5,12),'77777777','Rua das lasanhas',40, 15);
 
pessoa3.comer();
pessoa3.comerPrato ("lasanha");

console.log("\n");

pessoa.mostraPessoa();
pessoa2.mostraPessoa();
pessoa3.mostraPessoa();

console.log("\n");