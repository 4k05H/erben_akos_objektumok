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
    },
    {
        név:"picúr",
        fajta:"hotdog",
        láb:"4",
        marmagasság:30,
        nem:"kan",
        kor:3,
        oltás:"van"
    },
    {
        név:"folt",
        fajta:"dalmata",
        láb:"4",
        marmagasság:40,
        nem:"szuka",
        kor:5,
        oltás:"van"
    },
    {
        név:"latyak",
        fajta:"puli",
        láb:"4",
        marmagasság:35,
        nem:"kan",
        kor:5,
        oltás:"van"
    },
    {
        név:"bozót",
        fajta:"farkaskutya",
        láb:"4",
        marmagasság:60,
        nem:"kan",
        kor:8,
        oltás:"van"
    }
]

function init(){
    const ARTICLE = document.querySelectorAll("article");
    const DIV = document.querySelectorAll("div");
    let htmlValtozo = kutyaKiir();
    ARTICLE[0].innerHTML = htmlValtozo;
    const GOMB = document.querySelectorAll("button");
    for (let index = 0; index < GOMB.length; index++) {
        torol(GOMB, DIV);
    }
    
}

function kutyaKiir(){
    let htmlValtozo = "";
    for (let index = 0; index < KUTYAK.length; index++) {
        htmlValtozo += "<div> <button>törlés</button>";
        for (const kutyaTulaj in KUTYAK[index]) {
            htmlValtozo += `<p> ${kutyaTulaj} : ${KUTYAK[index][kutyaTulaj]} </p>`;
        }
        htmlValtozo += "</div>";
    }
    return htmlValtozo;
}

function torol(GOMB, ARTICLE){
    for (let index = 0; index < GOMB.length; index++) {
        GOMB[index].addEventListener("click", function(){
            const buttonIndex = index;
            KUTYAK.splice(buttonIndex, 1);
            htmlValtozo = kutyaKiir();
            ARTICLE[0].innerHTML = htmlValtozo;
            torol(GOMB, ARTICLE);
        })
    }
}
