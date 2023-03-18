window.addEventListener("load", init);

function init(){

    let tarolo = document.getElementById("myList");
    
    tarolo.innerHTML += htmlBeIras();

}

function htmlBeIras(){
    let htmlIras = "<ul>"
    for (let index = 0; index < 10; index++) {
        htmlIras += "<div>" + index + "</div>"
    }
    htmlIras += "</ul>"

    return htmlIras;
}