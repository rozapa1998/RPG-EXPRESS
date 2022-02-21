//----------------------------------Inicializacion Personajes------------------------------------------------------

//Obtenemos Stats del Jugador por Local (Eventualmente DB)
let StatsJugador = JSON.parse(localStorage.getItem("Jugador"))
console.log(StatsJugador)
let ATQJugador = StatsJugador.ATQ
let DEFJugador = StatsJugador.DEF
let HPJugador = StatsJugador.HP
//Porcentaje Barra HP (Jugador)
let porcentajeHPJ = (HPJugador*100)/StatsJugador.HP 

//Generamos objeto Enemigo
let Enemigo1 = {nombre: "Araña", HP:30 ,DEF:12, ATQ: 4}
let ATQEnemigo = Enemigo1.ATQ
let DEFEnemigo = Enemigo1.DEF
let HPEnemigo  = Enemigo1.HP
//Porcentaje Barra HP (Enemigo)
let porcentajeHPE = (HPEnemigo*100)/Enemigo1.HP 

//Variables de turno
let TurnoJ = true
let TurnoE = false

//---------------------------------Fraces Random para Eventos------------------------------------------------------
const fraces = [
    {id:1, frace:"esquivo el ataque con exito"}, 
    {id:2, frace:"uso su agilidad para evadir el ataque"}, 
    {id:3, frace:"no fue presa del zarpaso"},
    {id:4, frace:"bloqueo completamente el daño"},
    {id:4, frace:"no sufrio ninguna perdida de vida"},
    {id:4, frace:"se rie de lo debil del ataque"}
    ]

//--------------------------------------------------Funciones------------------------------------------------------

//Randomizador
const Random = () =>{
    let Random = Math.floor((Math.random() * (4 - 2 + 1)) + 2)
    return Random
}

//Funciones de los Botones

//---------+ATQ+----------
const Atacar = () =>{
    let Ataque = ATQJugador + Random()
    console.log(Ataque)
    return HPEnemigo = HPEnemigo - Ataque
}
//---------+DEF+----------
const Defender = () =>{
    let Defender = DEFJugador + Random()
    return DEFJugador = DEFJugador + Defender
}
//---------+HUI+----------
const Huir = () =>{
    let Huir = DEFJugador + Random()
    console.log(Huir)
}

//Funcion de Pelea
const Pelear = () =>{
    //Condiconales de vida
    let vivoE = true
    let vivoJ = true
    if(HPJugador <= 0){vivoJ = false}
    if(HPEnemigo <= 0){vivoE = false}
    
    //Simulamos async con setTimeout()
    botonCazeria.innerHTML=`Explorando...`
    registro.innerHTML=`Una noche increiblemente oscura cae sobre ti...`
    setTimeout(() => {botonCazeria.innerHTML=`Detener Caceria`}, 3000);
    setTimeout(() => {registro.innerHTML=`Una ${Enemigo1.nombre} se aparece en tu camino`}, 3000);
    //Funcionalidad de combate
        
    console.log("Turno del Jugador")
}
//--------------------------------------------------------DOM------------------------------------------------------

//Generacion del Escenario por DOM
let escenario = document.getElementById("Escenario")
escenario.innerHTML=`
<div class="card-body escenario m-5">
    <div class="position-relative mb-4">

        <div class="position-absolute top-0 start-0 translate-middle">
            <img src="media/Personaje/Personaje1.gif" alt="Personaje" height="90px" class="mt-4"></img>
            <div class="progress mt-3">
                <div class="progress-bar bg-success" role="progressbar" style="width: ${porcentajeHPJ}%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        
        <img src="" alt="" class="position-absolute top-0 start-50 translate-middle"></img>
        
        <div class="position-absolute top-0 start-100 translate-middle">
            <img src="media/Enemigos/Araña.gif" alt="Personaje" height="90px" class="mt-4"></img>
            <div class="progress mt-3">
                <div class="progress-bar bg-danger" role="progressbar" style="width: ${porcentajeHPE}%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </div>
</div>
<div class="card-body bg-dark">
        <div class="row">
            <div class="col-4">
                <p class="card-text color-font" id="registroPelea"></p>
            </div>
            <div class="col-2 position-relative"></div>
            <div class="col-2 position-relative">
                <button class="btn btn-success" id="Atacar">Atacar</button>
            </div>
            <div class="col-2">
                <button class="btn btn-danger" id="Defender">Defenderse</button>
            </div>
            <div class="col-2">
                <button class="btn btn-warning" id="Huir">Huir</button>
            </div>
        </div>
</div>`


//Captamos registro para imprimir los eventos
let registro = document.getElementById("registroPelea")

//Captamos los botones de ATQ/DEF/HUI
//-----ATQ-----
let AtaqueB = document.getElementById("Atacar")
AtaqueB.addEventListener("click", Atacar)
//-----DEF-----
let DefenderB = document.getElementById("Defender")
DefenderB.addEventListener("click", Defender)
//-----HUI-----
let HuirB = document.getElementById("Huir")
HuirB.addEventListener("click", Huir)

//Boton de Iniciar Caceria
let botonCazeria = document.getElementById("botonCazeria")
botonCazeria.addEventListener("click", Pelear)




