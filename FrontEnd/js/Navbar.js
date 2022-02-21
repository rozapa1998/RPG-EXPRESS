let menu = document.getElementById("navbar")
menu.innerHTML=`<nav class="navbar navbar-dark bg-dark fixed-top">
<div class="container-fluid">
  <a class="navbar-brand color-font fs-3" href="index.html"><span><img src="media/RPG.png" class="mx-3" height="40px"></span>RPG Express</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="offcanvas offcanvas-end bg-dark color-font" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="stats.html">Stats</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Acciones
          </a>
          <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
            <li><a class="dropdown-item" href="cazar.html">Cazar</a></li>
            <li><a class="dropdown-item" href="dungeon.html">Dungeon</a></li>
            <li><a class="dropdown-item" href="entrenar.html">Entrenar</a></li>
            <li><a class="dropdown-item" href="tienda.html">Tienda</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="login.html">Inicio de Sesion</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
</nav>`