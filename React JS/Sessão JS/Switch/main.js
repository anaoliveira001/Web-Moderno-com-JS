document.write("</br>Escolha o seu pedido</br>");
document.write("</br>0 - Sorvete / 1 - Suco</br>");
document.write("</br>2 - Cola-Cola / 3 - Água Gelada</br>");

// Switch
function pedir (){
    x = prompt("O que deseja Pedir?");
    switch(x){
        case 0:
            alert("O x vale 0 !..");
            break;
        case 1:
            alert("O x vale 1 !..");
            break;
        case 2:
            alert("O x vale 2 !..");
            break;
        case 3:
            alert("O x vale 3 !..");
            break;

        default:
            alert("Ops, não temos essa opção");
            break;
        }
    }
    