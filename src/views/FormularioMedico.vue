<template>
  <div class="RegistroMedico">
    <div class="container registro-medico-margin">
      <div class="row">
        <div class="col-md-12 text-center">
          <h1>Formularo registro medico</h1>
        </div>
      </div>
      <div class="row registro-medico-margin">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <form v-on:submit.prevent="registrarMedico()">
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                name="Nombre Completo"
                v-model="nombreCompleto"
                class="form-control"
                placeholder="Nombre completo"
                type="text"
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
                v-model="numeroIdentificacion"
                class="form-control"
                placeholder="Número de identificación"
                type="text"
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
                v-model="correoElectronico"
                class="form-control"
                placeholder="Correo electrónico"
                type="email"
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
                v-model="numeroContacto"
                class="form-control"
                placeholder="Número de contacto"
                type="text"
                required
              />
            </div>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-building"></i>
                </span>
              </div>
              <select class="form-control" v-model="especialidad" required>
                <option selected>Seleccione una especialidad...</option>
                <option value="1">Medicina General</option>
                <option value="2">Pediatría</option>
                <option value="3">Dermatología</option>
                <option value="4">Ginecología</option>
                <option value="5">Cardiología</option>
                <option value="6">Infectología</option>
              </select>
            </div>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                name
                v-model="registroMedico"
                class="form-control"
                placeholder="Registro medico"
                type="text"
                required
              />
            </div>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-building"></i>
                </span>
              </div>
              <select class="form-control" v-model="experiencia" required>
                <option selected>Seleccione la experiencia...</option>
                <option>Menos de 1 año</option>
                <option>Entro 2 y 5 años</option>
                <option>Más de 5 años</option>
              </select>
            </div>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                name
                v-model="titulosObtenidos"
                class="form-control"
                placeholder="Títulos obtenidos"
                type="text"
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
import router from "../router";
export default {
  name: "RegistroMedico",
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title =
          to.meta.title || "Registro Medico | Consultorio Medico";
      }
    }
  },
  components: {},
  data() {
    return {
      nombreCompleto: "",
      numeroIdentificacion: "",
      correoElectronico: "",
      numeroContacto: "",
      especialidad: "",
      registroMedico: "",
      experiencia: "",
      titulosObtenidos: ""
    };
  },
  methods: {
    registrarMedico() {
      axios
        .post("http://127.0.0.1:8000/registrarMedico", {
          nombreCompleto: this.$data.nombreCompleto,
          numeroIdentificacion: this.$data.numeroIdentificacion,
          correoElectronico: this.$data.correoElectronico,
          numeroContacto: this.$data.numeroContacto,
          "especialidad_id": this.$data.especialidad,
          registroMedico: this.$data.registroMedico,
          experiencia: this.$data.experiencia,
          titulosObtenidos: this.$data.titulosObtenidos,
          disponibilidad: "8 a.m. - 10 a.m.",
          activo: 1
        })
        .then(response => {
          this.$swal({
            icon: 'success',
            title: '¡Excelente!',
            text: 'Su registro ha sido almacenado exitosamente!'
          }).then((result) => {
            if(result.value) {
              router.push(`Inicio`);
            }
          });
        }).catch(error => {
          this.$swal({
            icon: 'error',
            title: '¡Lo sentimos!',
            text: 'Tenemos inconvenientes almacenando la información!'
          }).then((result) => {
            if(result.value) {
              router.push(`Inicio`);
            }
          });
        });
    }
  }
};
</script>

<style>
.registro-medico-margin {
  margin-top: 2%;
  margin-bottom: 2%;
}
</style>
