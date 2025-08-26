let listaAmigxs = [];


function agregarAmigo(){
    let amigo = document.querySelector('#amigo').value.trim();
    if (!amigo || amigo === '') {
        alert('Por favor ingresa un nombre');
        return true;
        }  else if (listaAmigxs.includes(amigo)) {
            alert('Este nombre fue ingresado, por favor ingresa otro');
            return true;
        }
        else {
        listaAmigxs.push(amigo); 
        console.log(listaAmigxs); 
        document.getElementById('amigo').value = '';
        return;
    } 
    
}


document.getElementById('botonAgregar').addEventListener('click', agregarAmigo);



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
