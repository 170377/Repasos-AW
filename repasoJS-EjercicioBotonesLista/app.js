function azarNumero() {
    let aleatorio = Math.floor(Math.random() * 100);
    let lista1 = document.getElementById("lista1");
    let agregali = document.createElement("li");
    agregali.innerHTML = aleatorio;
    lista1.appendChild(agregali);
}
function añadirHora() {
    let fecha = new Date();
    let hora = fecha.getHours() + ":" +  fecha.getMinutes() + ":" + fecha.getSeconds();
    let lista1 = document.getElementById("lista1");
    let agregali = document.createElement("li");
    agregali.innerHTML = hora;
    lista1.appendChild(agregali);
}
function añadirDía() {
    let fecha = new Date();
    let hoy = fecha.getDay() + "/" + ( fecha.getMonth() + 1 ) + "/" + fecha.getFullYear();
    let lista1 = document.getElementById("lista1");
    let agregali = document.createElement("li");
    agregali.innerHTML = hoy;
    lista1.appendChild(agregali);
}
function añadirParrafo() {
    let parrafo = prompt("Escribe lo que deseas añadir");
    if (parrafo == "") {
        parrafo = "No has escrito nada";
        console.log(parrafo);
    }else if (parrafo === null) {
        console.log("parrafo es null");
    }else{
        let lista1 = document.getElementById("lista1");
        let agregali = document.createElement("li");
        agregali.innerHTML = parrafo;
        lista1.appendChild(agregali);
    }
}
function borrarLista() {
    let lista1 = document.getElementById("lista1");
    while (lista1.childElementCount > 0){
        lista1.removeChild(lista1.firstElementChild);
        console.log("La lista ha sido borrada")
    }
}