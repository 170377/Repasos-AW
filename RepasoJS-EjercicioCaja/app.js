let alto = 50;
let ancho = 50;

document.getElementById("caja").style.height = alto + "vh";
document.getElementById("caja").style.width = ancho + "vw";

let caja = document.getElementById("caja");
let aumentar = 1;
let disminuir = 1;

function cambiarCaja(event) {
    if (event.code == "NumpadAdd") {
        alto = alto + aumentar;
        ancho = ancho + aumentar;
    }
    else if (event.code == "NumpadSubtract") {
        alto = alto - aumentar;
        ancho = ancho - aumentar;
    }
    caja.style.height = alto + "vh";
    caja.style.width = ancho + "vw";
    
    if (event.code == "KeyB") {
        // si el display de caja es none, entonces ponlo a block
        if ( caja.style.display == "none") {
            caja.style.display = "block";
        }else{ // si no entonces ponlo a none 
            caja.style.display = "none";
        }    
    }
}


/*

Crear una función que aumente el tamaño de la caja en
1vh y en 1wh cada vez que se pulse la tecla +
Usa onkeypress aplicado al body, busca el ejercicio
que hicimos del canvas y la bola del mundo.

*/

/*

Crear una función que disminuya el tamaño de la caja en
1vh y en 1wh cada vez que se pulse la tecla -
Usa onkeypress aplicado al body, busca el ejercicio
que hicimos del canvas y la bola del mundo.

*/