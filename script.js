
function mostrarLista(id){
    const lista = document.querySelector(id);
    let clases = lista.classList;
    if(clases.contains("active")){
        clases.remove("active");
    }else{
        clases.add("active");
    }
}

