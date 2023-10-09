let lista;
let li;
function mostrarLista(id){
    lista = document.querySelector(id);

    let clases = lista.classList;
    clases.toggle("active");
}

function seleccionarOpcion(id){

    li = document.querySelector(id);
    console.log(li.textContent);

    if(li.id === "li-1-1" || li.id === "li-1-2" || li.id === "li-1-3"){
        let span_text = document.querySelector("#span-text-1");
        span_text.textContent = li.textContent;
        lista.classList.remove("active");   
    }else if(li.id === "li-2-1" || li.id === "li-2-2" || li.id === "li-2-3"){
        let span_text = document.querySelector("#span-text-2");
        span_text.textContent = li.textContent;
        lista.classList.remove("active");   
    }
}
