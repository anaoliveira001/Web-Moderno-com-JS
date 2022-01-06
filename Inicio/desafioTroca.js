//Troca de Variáveis 

let a = 7;
let b = 94; 
// Depois da troca, o valor da variável a= 94 e b= 7

/*Não funciona
a=b;
b=a;*/

// Correto 
/*let temp = a;
a=b;
b=temp;*/

//Also correct
[a,b] = [b,a];

console.log(a);
console.log(b);

