//Includes
//endsWith
//startsWith


/*Includes
let nomes = ['Ana', 'Paula', 'Oliveira'];
console.log(nomes.includes('Paula'));

if (nomes.includes('Ana')){
    console.log('Ana está na lista');
}else{
    console.log('Ana não está na lista');
}*/



//endsWith

/*let nome = 'Ana';
console.log(nome.endsWith('a'));*/

//startsWith

/*let nome = 'Ana';
console.log(nome.startsWith('A'));*/

//Método some e every 

let nomes = [
    {nome: 'Ana', idade:20},
    {nome: 'Maria', idade:20},
    {nome: 'Raphael', idade: 33}
];

console.log(nomes);
//console.log(nomes.some(nomes=> nomes === 'Ana'));

//every

console.log(nomes.every(nome=>nomes.idade >=.18));
if(nomes.every(nomes=nomes.idade>=18)){
    console.log('Todos são maiores de 18 anos');
}else{
    console.log('Alguém é menor de 18 anos');
}