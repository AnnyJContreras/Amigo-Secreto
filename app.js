let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    console.log(nombre);
    if (nombre == "") {
        alert("Ingrese un nombre valido");
    }else{
        amigos.push(nombre)
        limpiar();
    }   
    //console.log(amigos)
    listadeAmigos();
    return;
    
}

function listadeAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for ( let i=0 ; i < amigos.length; i++){
        let listaElemento = document.createElement('li');
        listaElemento.textContent = amigos[i];
        lista.appendChild(listaElemento)
    }
}


function limpiar(){
    document.querySelector('#amigo').value = '';
    document.getElementById('resultado').innerHTML = '';
}


function sortearAmigo(){

    if (amigos.length == 0 ){
        alert("No hay amigos, agrega antes de sortear");
        limpiar();
    }else{
        
        let indiceAleatorio = Math.floor(Math.random()* amigos.length);
        let amigoSorteado = amigos[indiceAleatorio]
        
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = "El amigo secreto es: " + amigoSorteado;

        amigos.splice(indiceAleatorio, 1);
        listadeAmigos();

    }
}
