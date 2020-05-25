<template>
  <div class="RegistroUsuario">
    <div class="container registro-usuario-margin">
      <div class="row">
        <div class="col-md-12 text-center">
          <h1>Formularo registro usuario</h1>
        </div>
      </div>
      <div class="row registro-usuario-margin">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <form v-on:submit.prevent="registrarUsuario()">
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                name
                class="form-control"
                placeholder="Nombre completo"
                type="text"
                v-model="nombreCompleto"
                required
              />
            </div>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                name
                class="form-control"
                placeholder="Número de identificación"
                type="text"
                v-model="numeroIdentificacion"
                required
              />
            </div>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
              <input
                name
                class="form-control"
                placeholder="Correo electrónico"
                type="email"
                v-model="correoElectronico"
                required
              />
            </div>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                name
                class="form-control"
                placeholder="Número de contacto"
                type="text"
                v-model="numeroContacto"
                required
              />
            </div>
            <div class="form-group text-center">
              <button type="submit" class="btn btn-primary">REGISTRARSE</button>
            </div>
          </form>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RegistroUsuario",
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title =
          to.meta.title || "Registro Usuario | Consultorio Medico";
      }
    }
  },
  components: {},
  data() {
    return {
      nombreCompleto: "",
      numeroIdentificacion: "",
      correoElectronico: "",
      numeroContacto: ""
    };
  },
  methods: {
    registrarUsuario() {
      console.log(this.$data);
      axios
        .post("http://127.0.0.1:8000/registrarUsuario", {
          nombreCompleto: this.$data.nombreCompleto,
          numeroIdentificacion: this.$data.numeroIdentificacion,
          correoElectronico: this.$data.correoElectronico,
          numeroContacto: this.$data.numeroContacto,
          activo: 1
        })
        .then(response => console.log(response));
    }
  }
};
</script>

<style>
.registro-usuario-margin {
  margin-top: 2%;
  margin-bottom: 2%;
}
</style>
