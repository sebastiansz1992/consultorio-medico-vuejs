<template>
  <div id="Registro">
    <div class="container registro-margin">
      <div class="row text-center">
        <div class="col-md-6">
          <h4 class="title-margin">¿REGISTRARSE COMO MEDICO?</h4>
          <button
            v-on:click="registroMedico()"
            type="button"
            class="btn btn-lg registro-button"
          >
            REGISTRO MEDICO
          </button>
        </div>
        <div class="col-md-6">
          <h4 class="title-margin">¿REGISTRARSE COMO USUARIO CONCURRENTE?</h4>
          <button
            v-on:click="registroUsuario()"
            type="button"
            class="btn btn-lg registro-button"
          >
            REGISTRO USUARIO
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "Registro",
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || "Registro | Consultorio Medico";
      }
    }
  },
  components: {},
  methods: {
    registroMedico() {
      router.push("RegistroMedico");
    },
    registroUsuario() {
      router.push("RegistroUsuario");
    }
  }
};
</script>

<style>
.registro-margin {
  margin-top: 13%;
  margin-bottom: 13%;
}

.title-margin {
  margin-bottom: 7%;
  font-family: "Nunito Bold";
  font-size: 22px;
}

.registro-button,
.registro-button:hover {
  background-color: #0e539a;
  color: #ffffff;
}
</style>
