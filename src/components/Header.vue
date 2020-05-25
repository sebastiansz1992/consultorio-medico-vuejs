<template>
  <nav
    class="navbar navbar-expand-lg navbar-light nav-bar-background text-nav-bar"
  >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/Inicio">INICIO</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ServiciosMedicos"
            >SERVICIOS MEDICOS</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/MisCitas">MIS CITAS</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/InicioSesion"
            >INICIO SESIÓN</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Registro">REGISTRO</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style>
@font-face {
  font-family: "Nunito Bold";
  src: url("../assets/fonts/Nunito-Bold.woff");
}

.text-nav-bar {
  font-family: "Nunito Bold";
}

.nav-bar-background {
  background-color: #0e539a;
}

.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover {
  color: #ffffff;
}

.navbar-light .navbar-nav .nav-link {
  color: #ffffff;
}

.nav-link:focus,
.nav-link:hover {
  background-color: #8fbc8f;
  border-radius: 10px;
}
</style>
