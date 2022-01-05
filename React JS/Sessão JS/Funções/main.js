// função entrar

function entrar(){
    let area =document.getElementById('area');
    let text = prompt('Digite o seu nome');

    if(text=='' || text == null){
        alert('Digite o seu nome novamente!!');
        area.innerHTML='Bem vindo...';
    } else{
        area.innerHTML='Bem vindo'+ ' ' + text;
    }
}
    
 function entrar2(nome){
    let area2= document.getElementById('area2');
    let text = prompt('Digite o seu sobrenome?');
    area2.innerHTML = nome + ' ' +text; 
 }   
