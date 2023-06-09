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
}