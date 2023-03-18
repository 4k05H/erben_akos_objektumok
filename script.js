window.addEventListener("load", init);

const kutyaLista=["foxterrier","kuvasz","puli","agár","újfullandi","keverék"]

function init(){

    const ARTICLE = document.querySelectorAll("article");
    let htmlValtozo = kutyaKiir()
    ARTICLE[0].innerHTML = htmlValtozo

}

function kutyaKiir(){
    let htmlValtozo = ""
    for (let index = 0; index < kutyaLista.length; index++) {
        htmlValtozo += `<div><p> ${kutyaLista[index]} </p></div>`;
    }
    console.log(htmlValtozo)
    return htmlValtozo;
    
}