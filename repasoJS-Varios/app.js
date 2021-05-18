let listaImagenes = ['logo1.png', 'logo2.png', 'logo3.png', 'logo4.png', 'logo5.png', 'logo6.png', 'logo7.png', 'logo8.png', 'logo9.png', 'logo11.png', 'logo12.png'];

//Creamos una funcion agregarImagen(nombreArchivo) que acepte un parámetro nombre de archivo
//La función debe crear un nuevo elemento img con la propiedad 
//src igual a la cadena ./imgs/<nombreArchivo>
//Después debe incluir la imagen dentro de el div llamado "galeria"

function agregarImagen(nombreArchivo) {
    let elementoImg = document.createElement("img");
    elementoImg.src = nombreArchivo;
    elementoImg.addEventListener("click", fondoAmarillo);
    let galeria = document.getElementById("galeria");
    galeria.appendChild(elementoImg);
}

function fondoAmarillo(event) {
    let galeria = document.getElementById("galeria");
    galeria = event.target.style.backgroundColor = "yellow";
}

//Cuando hayáis creado la función, rellenad la función siguiente:
// con un for of que recorra nombreImgs y que use la funcion 
//agregarImagen(nomreArchivo)
function agregarImagenes() {
    for (const nombreImagen of listaImagenes) {
        agregarImagen('./imgs/' + nombreImagen);
    }
}
agregarImagen('./imgs/logo1.png');

let array = [1, 2, 3, 4, 5, "Hola"];
for (const elemento of array) {
    console.log(elemento);
}


/* Ocultar y mostrar imágenes */


function ocultarImagen() {
    let imagenes = document.getElementsByTagName("img");
    for (const img of imagenes) {
        img.style.opacity = "0";
    }
}

function mostrarImagen() {
    let imagenes = document.getElementsByTagName("img");
    for (const img of imagenes) {
        img.style.opacity = "1";
    }
}

/* Intercambia el color del fondo */

function intercambiarFondo() {
    let imagenes = document.getElementsByTagName("img");
    for (const img of imagenes) {
        if (img.style.backgroundColor == "yellow") {
            img.style.backgroundColor = "";
        }else{
            img.style.backgroundColor = "yellow";
        }
    }
}


