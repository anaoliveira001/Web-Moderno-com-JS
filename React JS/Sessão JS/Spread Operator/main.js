function cadastroPessoa(info){
 let novosDados = {
     ...info,
     cargo:Developer,
     status:1,
     codigo:56248214
 };
    return novosDados;

}

console.log(cadastroPessoa({nome:'Ana', sobrenome: 'Oliveira', anoInicio:2021}));