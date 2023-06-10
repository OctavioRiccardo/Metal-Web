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
    const titulo = document.createElement("h1");
    titulo.innerHTML = `${ObjetoJson.titulo}`;
    contenedorBandas.appendChild(titulo);
    const row = document.createElement("div");
    row.classList.add("row", "m-3");
    for (let i = 0; i < ObjetoJson.bandas.length; i++) {
        const columna = document.createElement("div");
        columna.classList.add("col-md-4", "mt-3");
        const cardBanda = document.createElement("a");
        cardBanda.outerHTML = `<a href="./banda?nombre=${ObjetoJson.bandas[i].titulo}"> </a>`;
        const cardimage = document.createElement("div");
        cardimage.classList.add("card", "card-bandas");
        const imagenBanda = document.createElement("img");
        imagenBanda.outerHTML = `<img class="card-img-top" src="../${ObjetoJson.bandas[i].imgBanda}">`;
        const cardbody = document.createElement("div");
        cardbody.classList.add("card-body");
        


    }
}