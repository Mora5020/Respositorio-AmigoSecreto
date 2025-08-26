let listaAmigxs = [];

function agregarAmigo() {
    let nombre = obtenerNombre();
    if (verificarAmigo(nombre)) { 
        listaAmigxs.push(nombre);
        console.log(listaAmigxs) 
        limpiarCampo();// 
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

document.getElementById('botonAgregar').addEventListener('click', function() {
    agregarAmigo(); });