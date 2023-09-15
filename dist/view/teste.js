"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("../model/Pessoa");
let pessoa = new Pessoa_1.Pessoa('Joao', '11111111', new Date(2000, 9, 15), '00000000000', 'rua numero 1', 170, 70);
pessoa.falar();
pessoa.falarFrase("hello world!");
//# sourceMappingURL=teste.js.map