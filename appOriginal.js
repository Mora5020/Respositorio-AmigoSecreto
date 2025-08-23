let listaAmigxs = [];

function agregarAmigo(){
    let amigo = document.querySelector('#amigo').value;// Obtengo el valor del input y lo almaceno en campoAmigxs
    if (amigo === '') {// le digo a la funcion que si el campo esta vacio se muestre un alert
        alert('Por favor ingresa un nombre');
        return true;
        }  else {
        listaAmigxs.push(amigo); // agrego al array el amigx ingresado
        console.log(listaAmigxs); // muestro el nombre en la consola
        return;
    } 
    
}


function limpiarInput() {
  document.querySelector('#amigo').value ='';   // limpio el input
}
document.getElementById('amigo').addEventListener('click', agregarAmigo);
limpiarInput(); // limpio el input al cargar la pagina

//Obtengo el boton por su id y le agrego un event listener que escucha el click
//The button triggers the function.
