<template>
  <div class="RegistroUsuario">
    <div class="container sesion-usuario-margin">
      <div class="row">
        <div class="col-md-12 text-center">
          <img src="../assets/images/inicio-sesion/icono-user-login.png" alt="Icono inicio sesión" width="20%">
        </div>
      </div>
      <div class="row sesion-usuario-margin">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <form v-on:submit.prevent="iniciarSesion()">
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                name
                class="form-control"
                placeholder="Nombre usuario"
                type="text"
                v-model="nombreUsuario"
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
                placeholder="Contraseña"
                type="password"
                v-model="contrasenia"
                required
              />
            </div>
            <div class="form-group text-center">
              <button type="submit" class="btn btn-primary">INICIAR SESIÓN</button>
            </div>
          </form>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
export default {
  name: "iniciarsesion",
  data() {
    return {
      nombreUsuario: "",
      contrasenia: ""
    }
  },
  components: {},
  methods: {
    iniciarSesion() {
      const tipoInicioSesion = this.$route.params.tipoSesion;
      if(tipoInicioSesion == "comoMedico") {
        axios
        .get(`http://127.0.0.1:8000/inicioSesionMedico/${this.$data.nombreUsuario}/${this.$data.contrasenia}`)
        .then(response => {
          const idMedico = response.data[0].id;
          router.push(`/MisCitas/medico/${idMedico}`);
          })
        .catch(error => {
          this.$swal({
            icon: 'error',
            title: '¡Lo sentimos!',
            text: 'Tenemos inconvenientes iniciando sesión!'
          }).then((result) => {
            if(result.value) {
              router.push(`/Inicio`);
            }
          });
        });
      } else {
        axios
        .get(`http://127.0.0.1:8000/inicioSesionUsuario/${this.$data.nombreUsuario}/${this.$data.contrasenia}`)
        .then(response => {
          const idUser = response.data[0].id;
          router.push(`/MisCitas/usuario/${idUser}`);
          })
        .catch(error => {
          this.$swal({
            icon: 'error',
            title: '¡Lo sentimos!',
            text: 'Tenemos inconvenientes iniciando sesión!'
          }).then((result) => {
            if(result.value) {
              router.push(`/Inicio`);
            }
          });
        });
      }      
    }
  }  
};
</script>

<style>
.sesion-usuario-margin {
  margin-top: 2%;
  margin-bottom: 2%;
}
</style>