window.addEventListener("load", init);

function init(){

    const KOLOMPAR = {

        nev:"kolompár",
        fajta:"zsebrakéta",
        láb:"8",
        marmagassag:69,
        nem:"igen",
        kor:10,
        oltas:"van"

    }
    const ESZTEBAN = {

        nev:"esztebán",
        fajta:"sárkányrepülő",
        láb:"4",
        marmagassag:30,
        nem:"nem",
        kor:2,
        oltas:"van"

    }
    for (const key in KOLOMPAR) {
        if (Object.hasOwnProperty.call(KOLOMPAR, key)) {
            const element = KOLOMPAR[key];
            console.log(element)
            
        }
    }
    
}