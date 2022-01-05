/*function minhasLista(...nomes){
console.log(nomes);
}

minhasLista("Ana", "Rapha", "Nico");*/

/*function minhaLista(...numeros){
    console.log(numeros);
}

minhaLista (1,2,3,4,5);*/

function cadastrar(usuarios, ...novosUsuarios){
let totalUsuarios =[
    ...usuarios,
    ...novosUsuarios
];
return console.log(totalUsuarios);
}

let usuarios = ["Ana", "Oliveira" ];
let novosUsuarios = cadastrar(usuarios, "Henrique", "Lucas");