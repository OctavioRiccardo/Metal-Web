/* --------------------------------Funciones Pagina de Bandas------------------------------------------------- */
window.addEventListener("load",cargarCardsJson)



function cargarCardsJson(){
    const parametrosUrl = new URLSearchParams(document.location.search);
    const generoUrl = parametrosUrl.get("genero");
    switch(generoUrl){
        case "power":
            fetch("../JSON/power.json")
            .then (res => res.json())
            .then(data => mostrarCards(data))
            break;
        case "doom":
            fetch("../JSON/doom.json")
            .then (res => res.json())
            .then(data => mostrarCards(data))
            break;
        case "heavy":
            fetch("../JSON/heavy.json")
            .then (res => res.json())
            .then(data => mostrarCards(data))
    }

}

function mostrarCards(ObjetoJson){
    const contenedorBandas = document.getElementById("contenedorBandas");
    let numeroDeCartasCargadas = 0;
    const titulo = document.createElement("h1");
    titulo.innerHTML = `${ObjetoJson.titulo}`;
    contenedorBandas.appendChild(titulo);
    const row = document.createElement("div");
    row.classList.add("row", "m-3");

}