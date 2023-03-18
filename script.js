window.addEventListener("load", init);

const KUTYAK =[

    {

        nev:"kolompár",
        fajta:"zsebrakéta",
        láb:"8",
        marmagassag:69,
        nem:"igen",
        kor:10,
        oltas:"van"

    },
    {

        név:"esztebán",
        fajta:"sárkányrepülő",
        láb:"4",
        marmagasság:30,
        nem:"nem",
        kor:2,
        oltás:"van"

    }

]

function init(){

    const ARTICLE = document.querySelectorAll("article");
    let htmlValtozo = kutyaKiir()
    ARTICLE[0].innerHTML = htmlValtozo
    const GOMB = document.querySelector("button");
    GOMB.addEventListener("click", )

}

function kutyaKiir(){
    let htmlValtozo = ""
    for (let index = 0; index < KUTYAK.length; index++) {
        htmlValtozo += "<div>"
        for (const kutyaTulaj in KUTYAK[index]) {
            htmlValtozo += `<p> ${kutyaTulaj} : ${KUTYAK[index][kutyaTulaj]} <button>törlés</button></p>`;
        }
        htmlValtozo += "</div>"
            
    }
    return htmlValtozo;
}
