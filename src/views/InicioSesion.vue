<template>
  <div id="InicioSesion">
    <div class="container iniciosesion-margin">
      <div class="row text-center">
        <div class="col-md-6">
          <h4 class="title-margin">¿COMO MEDICO?</h4>
          <button
            v-on:click="iniciarSesionMedico()"
            type="button"
            class="btn btn-lg iniciosesion-button"
          >
            INICIAR SESIÓN COMO MEDICO
          </button>
        </div>
        <div class="col-md-6">
          <h4 class="title-margin">¿COMO USUARIO?</h4>
          <button
            v-on:click="iniciarSesionUsuario()"
            type="button"
            class="btn btn-lg iniciosesion-button"
          >
            INICIAR SESIÓN COMO USUARIO
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "InicioSesion",
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || "Inicio Sesión | Consultorio Medico";
      }
    }
  },
  components: {},
  methods: {
    iniciarSesionMedico: function () {
      router.push(`FormularioInicioSesion/comoMedico`);
    },

    iniciarSesionUsuario: function () {
      router.push(`FormularioInicioSesion/comoUsuario`);
    }
  }
};
</script>
<style>
  .iniciosesion-margin {
    margin-top: 13%;
    margin-bottom: 13%;
  }

  .title-margin {
    margin-bottom: 7%;
    font-family: "Nunito Bold";
    font-size: 22px;
  }

  .iniciosesion-button,
  .iniciosesion-button:hover {
    background-color: #0e539a;
    color: #ffffff;
  }

</style>
