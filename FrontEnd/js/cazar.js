//----------------------------------Inicializacion Escenario-------------------------------------------------------
let CardEscenario = document.getElementById("CardEscenario")
CardEscenario.innerHTML=`<div class="card bosqueMithril position-relative" style="height:590px;" id="Escenario"></div>`
let escenario = document.getElementById("Escenario")

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
let Enemigo1 = {nombre: "Araña", HP:30 ,DEF:7, ATQ: 8}
let ATQEnemigo = Enemigo1.ATQ
let DEFEnemigo = Enemigo1.DEF
let HPEnemigo  = Enemigo1.HP
//Porcentaje Barra HP (Enemigo)
let porcentajeHPE = (HPEnemigo*100)/Enemigo1.HP

//---------------------------------Fraces Random para Eventos------------------------------------------------------
const fracesE = [
    {id:1, frace:"esquivo el ataque con exito"}, 
    {id:2, frace:"uso su agilidad para evadir el ataque"}, 
    {id:3, frace:"no fue presa del zarpaso"},
    {id:4, frace:"bloqueo completamente el daño"},
    {id:4, frace:"no sufrio ninguna perdida de vida"},
    {id:4, frace:"se rie de lo debil del ataque"}
    ]

const fracesJ = [
        {id:1, frace:"esquivaste el ataque con exito"}, 
        {id:2, frace:"usaste tu agilidad para evadir el ataque"}, 
        {id:3, frace:"no fuiste presa del zarpaso"},
        {id:4, frace:"bloqueaste completamente el daño"},
        {id:4, frace:"no sufriste ninguna perdida de vida"},
        {id:4, frace:"te rie de lo debil del ataque"}
    ]

//--------------------------------------------------Funciones------------------------------------------------------

//Randomizador
const Random = () =>{
    let Random = Math.floor((Math.random() * (4 - 2 + 1)) + 2)
    return Random
}

//-------------------------------------------Funciones de los Botones-----------------------------------------------

//Funcion de Pelea
const Pelear = () =>{
    //Simulamos async con setTimeout()
    botonCazeria.innerHTML=`Explorando...`
    setTimeout(() => {
        
        escenario.innerHTML=`
<div class="card-body m-5 position-relative">
<div class="text">
        <div class="mt-5">.</div>
        <div class="mt-5">.</div>
        <div class="mt-5">.</div>
        <div class="mt-5">.</div>
        <div class="mt-5">.</div>
        <div id="daño"></div>
        <div class="position-absolute top-0 start-100 translate-middle"></div>
</div>    
<div class="position-relative mb-5 mt-4">      
<div class="position-absolute top-0 start-0 translate-middle">
        <img src="media/Personaje/Personaje1.gif" alt="Personaje" height="110px" class="mt-4 ms-4"></img>  
        <div class="progress mt-3 ms-4" id="HPJugador"></div>
            <span><div id="indicadorTJ" class="ms-3 mb-3"></div></span>
        </div>

        <div class="position-absolute top-0 start-50 translate-middle mb-5" id="alertaResultado"></div>
        
        <div class="position-absolute top-0 start-100 translate-middle">
        <div id="dañoE" class="ms-5"></div>
        <div id="indicadorT"></div>
            <img src="media/Enemigos/Araña.gif" alt="Personaje" height="130px" class="mt-4 me-4"></img>
            <div class="progress me-4 mb-3" id="HPEnemigo">
                
            </div>
            <span><div id="indicadorTE" class="me-3 mb-3"></div></span>
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

//GetElement de los id´s
let registro = document.getElementById("registroPelea")
registro.innerHTML=`Una noche increiblemente oscura cae sobre ti...`

//Victoria o derrota
let alteraResultado = document.getElementById("alertaResultado")
alteraResultado.innerHTML=``

//Daño J
let dañoJ = document.getElementById("daño")
dañoJ.innerHTML=`<p class="color-font-caz"></p>`

//Daño E
let dañoE = document.getElementById("dañoE")
dañoE.innerHTML=`<p class="color-font-caz"></p>`

let vidaJ = document.getElementById("HPJugador")
    vidaJ.innerHTML=`<div class="progress-bar bg-success" role="progressbar" style="width: ${porcentajeHPJ}%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>`

let vidaE = document.getElementById("HPEnemigo")
    vidaE.innerHTML=`<div class="progress-bar bg-danger" role="progressbar" style="width: ${porcentajeHPE}%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>`

//Indicador Turno
let indicadorTJ = document.getElementById("indicadorTJ")
    indicadorTJ.innerHTML= `<div class="spinner-grow text-primary" role="status"></div>`

let indicadorTE = document.getElementById("indicadorTE")
indicadorTE.innerHTML= ``

//Renderizar Vida
function renderVida(porcentajeHPJ, porcentajeHPE){
    vidaJ.innerHTML=`<div class="progress-bar bg-success" role="progressbar" style="width: ${porcentajeHPJ}%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>`
    vidaE.innerHTML=`<div class="progress-bar bg-danger" role="progressbar" style="width: ${porcentajeHPE}%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>`
}

//---------+ATQ+----------
const Atacar = () =>{
    let Ataque = ATQJugador + Random()
    let AtaqueE = ATQEnemigo + Random()
    //Si el ataque es mayor a la defenza del enemigo
    if(Ataque >= DEFEnemigo){
        HPEnemigo = HPEnemigo - Ataque
        dañoE.innerHTML=`<p class="color-font-caz">${Ataque}</p>`
    }else{
        setTimeout(() => {
            registro.innerHTML=`<p>${Enemigo1.nombre}, ${fracesE[Random()].frace}</p>`
        }, 1500);
    }
    //Actualizacion del %HP
    porcentajeHPE = (HPEnemigo*100)/Enemigo1.HP
    renderVida(porcentajeHPJ, porcentajeHPE)
    //------------------Turno E-------------------------------------------------------
    //Cambio del indicador de turno
    setTimeout(() => {
        indicadorTJ.innerHTML=`<div></div>`
        indicadorTE.innerHTML=`<div class="spinner-grow text-primary" role="status"></div>`
        ChequeoVida()
        if(ChequeoVida() === false){
            //Si el ataque del enemigo es mayor a la defensa del jugador
        if(AtaqueE >= DEFJugador){
            HPJugador = HPJugador - AtaqueE
            dañoJ.innerHTML=`<p class="color-font-caz">${AtaqueE}</p>`
        }else{
            setTimeout(() => {
                registro.innerHTML=`<p>${StatsJugador.nombre}, ${fracesJ[Random()].frace}</p>`
            }, 1500);
        }
        //Actualizacion del %HP
        porcentajeHPJ = (HPJugador*100)/StatsJugador.HP
        setTimeout(() => {
            renderVida(porcentajeHPJ, porcentajeHPE)
        }, 800);
        }
    }, 1000);
    //Cambio del indicador de turno
    setTimeout(() => {
        indicadorTE.innerHTML=`<div></div>`
        indicadorTJ.innerHTML=`<div class="spinner-grow text-primary" role="status"></div>`
        ChequeoVida()
    }, 3500);
    
}
//---------+DEF+----------
const Defender = () =>{
    let Defender = DEFJugador + Random()
    let AtaqueE = ATQEnemigo + Random()
    DEFJugador = Defender
    console.log(DEFJugador)
    //------------------Turno E-------------------------------------------------------
    //Cambio del indicador de turno
    setTimeout(() => {
        indicadorTJ.innerHTML=`<div></div>`
        indicadorTE.innerHTML=`<div class="spinner-grow text-primary" role="status"></div>`
        //Si el ataque del enemigo es mayor a la defensa del jugador
        ATQEnemigo = ATQEnemigo + 2
            console.log("ATQ Enemigo", ATQEnemigo)
        if(AtaqueE >= DEFJugador){
            HPJugador = HPJugador - AtaqueE
        }else{
            setTimeout(() => {
                registro.innerHTML=`<p>${StatsJugador.nombre}, ${fracesJ[Random()].frace}</p>`
            }, 1500);
        }
        //Actualizacion del %HP
        porcentajeHPJ = (HPJugador*100)/StatsJugador.HP
        setTimeout(() => {
            renderVida(porcentajeHPJ, porcentajeHPE)
        }, 800);
    }, 1000);
    //Cambio del indicador de turno
    setTimeout(() => {
        indicadorTE.innerHTML=`<div></div>`
        indicadorTJ.innerHTML=`<div class="spinner-grow text-primary" role="status"></div>`
        ChequeoVida()
    }, 3500);

}
//---------+HUI+----------
const Huir = () =>{
    let Huir = DEFJugador + Random()
    let AtaqueEn = ATQEnemigo + Random() + 1
    if (Huir > AtaqueEn) {
        alert("Escapaste con exito")
    }else{
        HPJugador = HPJugador - AtaqueEn
        //Actualizacion del %HP
        porcentajeHPJ = (HPJugador*100)/StatsJugador.HP
        setTimeout(() => {
            renderVida(porcentajeHPJ, porcentajeHPE)
        }, 800);
    }
}

//---------Chequeo Vida---------
const ChequeoVida=()=>{
    if (HPEnemigo <= 0) {
        alteraResultado.innerHTML=`<img class="text-center mb-5" src="media/Alertas/Victoria.png" height="240px"></img>`
        return true
    }if(HPJugador<= 0){
        alteraResultado.innerHTML=`<img class="text-center mb-5" src="media/Alertas/Derrota.png" height="280px"></img>`
        return true
    }else{
        return false
    }
}

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

setTimeout(() => {registro.innerHTML=`Una ${Enemigo1.nombre} se aparece en tu camino`}, 3000);
    }, 1000);
    //Detener proceso
    setTimeout(() => {botonCazeria.innerHTML=`Detener Caceria`}, 1000);
    
}

//Boton de Iniciar Caceria
let botonCazeria = document.getElementById("botonCazeria")
botonCazeria.addEventListener("click", Pelear)




