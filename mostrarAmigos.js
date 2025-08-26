let listaAmigxs = [];

function agregarAmigo() {
    let nombre = obtenerNombre();
    if (verificarAmigo(nombre)) { 
        listaAmigxs.push(nombre);
        console.log(listaAmigxs) 
        limpiarCampo();
        mostrarAmigos(); 
    }
}
function obtenerNombre() {   
    let input = document.getElementById('amigo').value.trim(); 
    console.log(input);
    return input;
}   

function verificarAmigo(input) {
    if ( !input || input === '') {
        alert('Por favor ingresa un nombre');
        return false;
    } else if (listaAmigxs.includes(input)) {
        alert('Este nombre fue ingresado, por favor ingresa otro');
        return false;
    }
    return true;
} 

function limpiarCampo() {
    document.getElementById('amigo').value = '';
    return; }       


function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');// Obtengo el elemento de la lista 
    // (listaAmigos es de HTML, lista es la variable de esa lista en la funcion mostrarAmigos
    // y listaAmigxs es el array de amigos)
    lista.innerHTML = ''; // Limpiar la lista antes de mostrar los amigos
    for (i = 0; i < listaAmigxs.length; i++) {// Recorro el array de amigos
        let li = document.createElement('li');// Creo un nuevo elemento de lista
        li.textContent = listaAmigxs[i]; // Asigno el nombre del amigo al contenido del elemento de lista
        lista.appendChild(li); // Agrego el elemento de lista a la lista en el HTML
        // appendChild es un método del DOM. Sirve para agregar un nodo hijo a otro nodo. Básicamente: “tomá este elemento que creé en JS y ponelo dentro de este contenedor del HTML”.   
    }
}


document.getElementById('botonAgregar').addEventListener('click', function() {
    agregarAmigo(); });