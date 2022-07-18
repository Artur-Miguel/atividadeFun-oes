function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
const pessoa1 = {
    nome:'A',
    idade:34,
};
const pessoa2 = {
    nome:'B',
    idade:19,
};
console.log(calculaIdade.apply(pessoa1, [2]));
//