
let StatsJugador = JSON.parse(localStorage.getItem("Jugador"))




function CargarStats (){
    let stats = document.getElementById("stats")


    if(localStorage.getItem("Jugador")=== null){
        stats.innerHTML=`
        <h3 class="color-font text-center">-Usted no inicio sesion-</h3>
        <div class="col-2" >
                <div class="card text-center bg-dark mt-3" style="width: 10rem;">
                    <div class="card-body">
                        <h5 class="card-title color-font">HP</h5>
                        <h3 class="card-text color-font">0</h3>
                    </div>
                </div>
        </div>
        <div class="col-2" >
                <div class="card text-center bg-dark mt-3" style="width: 10rem;">
                    <div class="card-body">
                        <h5 class="card-title color-font">ATQ</h5>
                        <h3 class="card-text color-font">0</h3>
                        <img src="media/Espada.PNG" alt="Espada" class="mt-2" height="30px">
                    </div>
                </div>
        </div>
        <div class="col-2" >
                <div class="card text-center bg-dark mt-3" style="width: 10rem;">
                    <div class="card-body">
                        <h5 class="card-title color-font">DEF</h5>
                        <h3 class="card-text color-font">0</h3>
                    </div>
                </div>
        </div>
        <div class="col-2" >
                <div class="card text-center bg-dark mt-3" style="width: 10rem;">
                    <div class="card-body">
                        <h5 class="card-title color-font">ORO</h5>
                        <h3 class="card-text color-font">0</h3>
                    </div>
                </div>
        </div>
        <div class="col-2" >
                <div class="card text-center bg-dark mt-3" style="width: 10rem;">
                    <div class="card-body">
                        <h5 class="card-title color-font">XP</h5>
                        <h3 class="card-text color-font">0</h3>
                    </div>
                </div>
        </div>
        <div class="col-2" >
                <div class="card text-center bg-dark mt-3" style="width: 10rem;">
                    <div class="card-body">
                        <h5 class="card-title color-font">Nv</h5>
                        <h3 class="card-text color-font">0</h3>
                    </div>
                </div>
        </div>
        `
        let inventario = document.getElementById("inventario")
    inventario.innerHTML=`<div class="col-2">
    <div class="card text-center bg-dark mt-3" style="width: 10rem; height: 10rem;">
      <div class="card-body">
          <h5 class="card-title color-font">No item</h5>
          
          <h3 class="card-text color-font">0</h3>
      </div>
  </div>
  </div>`
    }else{
        stats.innerHTML=`
    <div class="col-2" >
            <div class="card text-center bg-dark mt-3" style="width: 10rem;">
                <div class="card-body">
                    <h5 class="card-title color-font">HP</h5>
                    <h3 class="card-text color-font">${StatsJugador.HP}</h3>
                </div>
            </div>
    </div>
    <div class="col-2" >
            <div class="card text-center bg-dark mt-3" style="width: 10rem;">
                <div class="card-body">
                    <h5 class="card-title color-font">ATQ</h5>
                    <h3 class="card-text color-font">${StatsJugador.ATQ}</h3>
                    <img src="media/Espada.PNG" alt="Espada" class="mt-2" height="30px">
                </div>
            </div>
    </div>
    <div class="col-2" >
            <div class="card text-center bg-dark mt-3" style="width: 10rem;">
                <div class="card-body">
                    <h5 class="card-title color-font">DEF</h5>
                    <h3 class="card-text color-font">${StatsJugador.DEF}</h3>
                </div>
            </div>
    </div>
    <div class="col-2" >
            <div class="card text-center bg-dark mt-3" style="width: 10rem;">
                <div class="card-body">
                    <h5 class="card-title color-font">ORO</h5>
                    <h3 class="card-text color-font">${StatsJugador.oro}</h3>
                </div>
            </div>
    </div>
    <div class="col-2" >
            <div class="card text-center bg-dark mt-3" style="width: 10rem;">
                <div class="card-body">
                    <h5 class="card-title color-font">XP</h5>
                    <h3 class="card-text color-font">${StatsJugador.xp}</h3>
                </div>
            </div>
    </div>
    <div class="col-2" >
            <div class="card text-center bg-dark mt-3" style="width: 10rem;">
                <div class="card-body">
                    <h5 class="card-title color-font">Nv</h5>
                    <h3 class="card-text color-font">${StatsJugador.Nv}</h3>
                </div>
            </div>
    </div>
    `

    let inventario = document.getElementById("inventario")
    inventario.innerHTML=`<div class="col-2">
    <div class="card text-center bg-dark mt-3" style="width: 10rem; height: 10rem;">
      <div class="card-body">
          <h5 class="card-title color-font">Arco y Flecha</h5>
          <img src="media/Flecha-Cazar.png" alt="Felcha" height="55px">
          <h3 class="card-text color-font">(+3) ATQ</h3>
      </div>
  </div>
  </div>`
    }
    
}

CargarStats()