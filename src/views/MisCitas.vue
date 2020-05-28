<template>
  <div class="miscitas">
    <div class="container miscitas-margin">
      <div v-if="$data.citasMedicos.length != 0">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Nombre paciente</th>
              <th scope="col">Cédula</th>
              <th scope="col">Correo electrónico</th>
              <th scope="col">Día</th>
              <th scope="col">Mes</th>
              <th scope="col">Hora</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="medico in $data.citasMedicos" v-bind:key="medico.id">
              <th id="medico">{{medico.nombreUsuario_id}}</th>
              <td>{{medico.numeroIdentificacion}}</td>
              <td>{{medico.correoElectronico}}</td>
              <td>{{medico.dia}}</td>
              <td>{{medico.mes}}</td>
              <td>{{medico.hora}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="$data.citasUsuarios.length != 0">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Nombre medico</th>
              <th scope="col">Especialidad</th>
              <th scope="col">Día</th>
              <th scope="col">Mes</th>
              <th scope="col">Hora</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in $data.citasUsuarios" v-bind:key="usuario.id">
              <th id="medico">{{usuario.nombreMedico_id}}</th>
              <td>{{usuario.especialidad_id}}</td>
              <td>{{usuario.dia}}</td>
              <td>{{usuario.mes}}</td>
              <td>{{usuario.hora}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
export default {
  name: "miscitas",
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || "Mis Citas | Consultorio Medico";
      }
    }
  },
  data() {
    return {
      citasMedicos: [],
      citasUsuarios: []
    };
  },
  components: {},
  mounted() {
    this.consultarCitas();
  },
  methods: {
    consultarCitas() {
      const tipoInicioSesion = this.$route.params.tipo;
      const id = this.$route.params.id;
      if (tipoInicioSesion == "medico") {
        axios
          .get(`http://127.0.0.1:8000/consultarCitasPorMedico/${id}`)
          .then(response => {
            this.$data.citasMedicos = response.data;
            if (this.$data.citasMedicos == 0) {
              this.$swal({
                icon: "warning",
                title: "¡Advertencia!",
                text: "En el momento no tiene citas agendadas"
              }).then(result => {
                if (result.value) {
                  router.push(`/Inicio`);
                }
              });
            }
          })
          .catch(error => {
            this.$swal({
              icon: "error",
              title: "¡Lo sentimos!",
              text: "Tenemos inconvenientes consultando las citas!"
            }).then(result => {
              if (result.value) {
                router.push(`Inicio`);
              }
            });
          });
      } else {
        axios
          .get(`http://127.0.0.1:8000/consultarCitasPorUsuario/${id}`)
          .then(response => {
            this.$data.citasUsuarios = response.data;
            if (this.$data.citasUsuarios == 0) {
              this.$swal({
                icon: "warning",
                title: "¡Advertencia!",
                text: "En el momento no tiene citas agendadas"
              }).then(result => {
                if (result.value) {
                  router.push(`/Inicio`);
                }
              });
            }
          })
          .catch(error => {
            this.$swal({
              icon: "error",
              title: "¡Lo sentimos!",
              text: "Tenemos inconvenientes consultando las citas!"
            }).then(result => {
              if (result.value) {
                router.push(`Inicio`);
              }
            });
          });
      }
    }
  }
};
</script>
<style>
.miscitas-margin {
  margin-top: 2%;
  margin-bottom: 2%;
}
</style>
