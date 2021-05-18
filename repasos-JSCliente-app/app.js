function marcarTarea(evento) {
    let casilla = evento.target;
    let spanTarea = casilla.previousElementSibling;
    let papeleaTarea = casilla.nextElementSibling;
    if (casilla.checked == true) {
        //Mostrar la papelera de al lado.
        papeleaTarea.style.opacity = '1';
        //Tachar el texto de al lado.
        spanTarea.style.textDecoration = 'line-through';
    } else {
        papeleaTarea.style.opacity = '0';
        spanTarea.style.textDecoration = 'none';
    }
}

function agregarTarea() {
    // coger el texto de la caja
    let texto = document.getElementById('nombreTarea').value;

    // crear un div para la nueva tarea con clase "tarea"
    let divTarea = document.createElement('div');
    divTarea.className = "tarea";

    // crear un span con el texto de la caja que hemos cogido antes
    let spanNombreTarea = document.createElement('span');
    spanNombreTarea.textContent = texto;

    //crear el checkbox con el listener ('click',marcarTarea)    
    let elementoInput = document.createElement("input");
    elementoInput.addEventListener("click", marcarTarea);
    elementoInput.type="checkbox";

    //crear el icono de la papeler    
    let elementoPapelera = document.createElement("img");
    elementoPapelera.src = "./iconos/papelera.svg";
    elementoPapelera.alt = "Icono borrar tarea";
    elementoPapelera.title = "Pulsa para borrar la tarea";
    elementoPapelera.style.opacity = '0';
    elementoPapelera.addEventListener("click", borrarTarea)

    //agregarlos también al divTarea
    divTarea.appendChild(spanNombreTarea);
    divTarea.appendChild(elementoInput);
    divTarea.appendChild(elementoPapelera);

    // añadir el div al div llamado #seccionTareas
    let seccionTareas = document.getElementById('seccionTareas');
    seccionTareas.appendChild(divTarea);
    document.getElementById('nombreTarea').value = '';    

    // Remover la tarea al hacer click sobre el icono de la papelera
    function borrarTarea(evento) {
        if (evento.target == elementoPapelera) {
            seccionTareas.removeChild(divTarea);
        }
    }
    
}

function comprobarTecla(evento) {
    if (evento.key == "Enter") {
        agregarTarea();
    }
}

