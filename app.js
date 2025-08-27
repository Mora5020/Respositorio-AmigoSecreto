let listaAmigxs = [];

function obtenerNombre() {
    let input = document.getElementById('amigo').value.trim();
    console.log(input);
    return input;
}

function verificarAmigo(input) {
    if (!input || input === '') {
        alert('Por favor ingresa un nombre');
        return false;
    } else if (listaAmigxs.includes(input)) {
        alert('Este nombre fue ingresado, por favor ingresa otro');
        return false;
    }
    return true;
}

function limpiarCampo() {
    document.getElementById('amigo').value = "";
    return;
}

function agregarAmigo() {
    let nombre = obtenerNombre();
    if (verificarAmigo(nombre)) { 
        listaAmigxs.push(nombre);
        console.log(listaAmigxs);
        limpiarCampo();
        mostrarAmigos();
    }
}

function mostrarAmigos() {
let lista = document.getElementById('listaAmigos');
lista.innerHTML = '';
for (let i = 0; i < listaAmigxs.length; i++) {
let li = document.createElement('li');
li.textContent = listaAmigxs[i];
lista.appendChild(li);
}

}

function sortearAmigos() {
    if (listaAmigxs.length === 0) { 
        alert('No agregaste amigos para sortear');
        return;
    }
    let indice = Math.floor(Math.random() * listaAmigxs.length);
    let amigoSorteado = listaAmigxs[indice];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpio el contenido previo del resultado;
    resultado.textContent = (`tu amigo sorteado es ${amigoSorteado}`); //  Muestro el nombre del amigo sorteado   
}

document.getElementById('botonAgregar').addEventListener('click', function() {
    agregarAmigo();
});
document.getElementById('botonSortear').addEventListener('click', function() {
    sortearAmigos(); });