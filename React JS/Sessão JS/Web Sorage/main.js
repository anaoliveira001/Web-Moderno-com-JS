/*let name = localStorage.name; 
console.log(nome);*/

let name = ' ';
if(typeof localStorage.name == 'undefined'){
    localStorage.name = prompt("Digite o seu nome");
}

name = localStorage.name;

document.getElementById('name').innerHTML = name;