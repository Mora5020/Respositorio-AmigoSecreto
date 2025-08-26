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

