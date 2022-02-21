//Clase contructora
class Jugador {
    constructor(nombre,username,email,password){
        this.nombre     = nombre
        this.username   = username
        this.email      = email
        this.password   = password
        this.HP         = 0
        this.DEF        = 0
        this.ATQ        = 0
        this.oro        = 0
        this.Nv         = 1
        this.xp         = 0
        this.vivo       = true
    }
    
    //Para pelear
    PreguntaVivo(){
    if (this.HP>0) {
        this.vivo = true
    }else{
        this.vivo = false}
    }

    GenerarStats(){
        this.HP     = Math.floor((Math.random() * (20 - 10 + 1)) + 10)
        this.DEF    = Math.floor((Math.random() * (10 - 3 + 1)) + 3)
        this.ATQ    = Math.floor((Math.random() * (10 - 3 + 1)) + 3)
    }

    SumarXP(num){
        let valor = this.xp + num
        this.xp = valor
    }
}

function Registro(){
    //Captar datos
    let nombre   = document.getElementById("nombre").value
    let email    = document.getElementById("email").value
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    //New Jugador
    let Jugador1 = new Jugador(nombre,username,email,password)
    Jugador1.GenerarStats()
    localStorage.setItem("Jugador",JSON.stringify(Jugador1))
    
    document.getElementById("password").value=""
    document.getElementById("nombre").value=""
    document.getElementById("email").value=""
    document.getElementById("username").value=""

    console.log(Jugador1)

    //Alerta
    let alerta = document.getElementById("alerta")
    alerta.innerHTML=(`<div class="alert alert-success d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
      Tu registro se proceso con exito!
    </div>
  </div>`)

  //Redirecting
  let redirect = document.getElementById("redirecting")
  let blurry = document.getElementById("blurry")
  
  //Simulando Async
  setTimeout(() => {
      alerta.innerHTML=(``)
  }, 3000);

    blurry.classList.add("blurry")
    redirect.innerHTML=(`<h5 class="color-font">Aguarda unos segundos te estamos redirigiendo...</h5>
    <div class="spinner-border text-light" style="width: 5rem; height: 5rem;" role="status" class="visually-hidden"></div>
    `)

  setTimeout(() => {
    window.location.href = "login.html"
}, 4000);
  
}