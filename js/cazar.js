let StatsJugador = JSON.parse(localStorage.getItem("Jugador"))

console.log(StatsJugador)

let Enemigo1 = {nombre: "Araña", HP:30 ,DEF:12, ATQ: 4} 

let registro = document.getElementById("registroPelea")

const Random = () =>{
    let Random = Math.floor((Math.random() * (4 - 2 + 1)) + 2)
    return Random
}

const Atacar = (ATQJugador, DEFEnemigo, HPEnemigo) =>{
    if ((ATQJugador + Random()) >= DEFEnemigo) {
        //Ataque exitoso
         HPEnemigo =  HPEnemigo - ATQJugador
    }
}


const fraces = [
{id:1, frace:"esquivo el ataque con exito"}, 
{id:2, frace:"uso su agilidad para evadir el ataque"}, 
{id:3, frace:"no fue presa del zarpaso"},
{id:4, frace:"bloqueo completamente el daño"},
{id:4, frace:"no sufrio ninguna perdida de vida"},
{id:4, frace:"se rie de lo debil del ataque"}
]

/*Progress Bar*/




const Pelear = () =>{
    //Stats Jugador
    let HPJugador = StatsJugador.HP
    let ATQJugador = StatsJugador.ATQ
    let DEFJugador = StatsJugador.DEF
    //Stats Enemigo
    let HPEnemigo  = Enemigo1.HP
    let ATQEnemigo = Enemigo1.ATQ
    let DEFEnemigo = Enemigo1.DEF
    
    registro.innerHTML=`Explorando...`
    setTimeout(() => {registro.innerHTML=`Un ${Enemigo1.nombre} se cruza en tu camino`}, 3000);

    

}


/*const Pelear = () =>{
}

           if (HPEnemigo <= 0) {
               break
           }
        }else{
            //Si falla el ataque
            setTimeout(() => {
                ImprimirDOM((Enemigo1.nombre + " "+ fraces[Random()].frace))
            }, 4000);
            
        }
        //Ataque del Enemigo
        if ((ATQEnemigo + Random()) >= DEFJugador) {
            HPJugador = HPJugador - ATQEnemigo
            //Impresion de lo ocurrido
            setTimeout(() => {
                ImprimirDOM((Enemigo1.nombre + " pego " + ATQEnemigo))
            }, 2000);

            setTimeout(() => {
                ImprimirDOM(("A " + StatsJugador.nombre + " le queda " + HPJugador + " de vida"))
            }, 3500);
            //Comprueba Vida
            if (HPJugador <= 0) {
                break
            }
        }else{
            //Si falla el ataque
            setTimeout(() => {
                ImprimirDOM((StatsJugador.nombre+ " " + fraces[Random()].frace))
            }, 4000);
        }
    }

    if (HPJugador > 0) {
        setTimeout(() => {
            ImprimirDOM(("Gano" + StatsJugador.nombre))
        }, 5000);
        
    }else{
        setTimeout(() => {
            ImprimirDOM(("Gano" + Enemigo1.nombre))
        }, 5000);*/