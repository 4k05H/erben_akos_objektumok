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

    console.log(KUTYAK)
    for (let index = 0; index < KUTYAK.length; index++) {
        for (const kutyaTulaj in KUTYAK[index]) {
           console.log(kutyaTulaj + ":", KUTYAK[index][kutyaTulaj])
        }
        console.log("-------------*-------------")
            
    }
    
    
}