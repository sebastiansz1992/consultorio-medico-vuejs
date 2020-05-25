<template>
  <div id="serviciomedicos">
    <div class="container servicios-medicos-margin">
      <div class="row">
        <div class="col-md-12">
          <h1 class="servicios-medicos-title">
            Especialidades que tenemos registradas actualmente
          </h1>
        </div>
      </div>
      <div class="container servicios-medicos-margin">
        <div class="row row-cols-1 row-cols-md-3">
          <div class="col mb-4" v-for="especialidad in $data.especialidades" v-bind:key="especialidad.id">
            <div class="card h-100">
              <div
                class="card-header text-center servicios-medicos-background-header-card"
              >
                <h4>{{especialidad.nombre}}</h4>
              </div>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <p class="servicios-medicos-description">
                    {{especialidad.descripcion}}
                  </p>
                  <footer class="text-center">
                    <button
                      v-on:click="irEspecialidades(especialidad.id)"
                      type="button"
                      class="btn btn-success"
                    >
                      INGRESAR
                    </button>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
export default {
  name: "serviciomedicos",
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title =
          to.meta.title || "Servicios Medicos | Consultorio Medico";
      }
    }
  },
  data() {
    return {
      especialidades: []
    }
  },
  components: {},
  methods: {
    irEspecialidades: function(idEspecialidad) {
      router.push(`Especialidades/${idEspecialidad}`);
    },
    consultarEspecialidades: function() {
      axios
        .get("http://127.0.0.1:8000/especialidades")
        .then(response => {
          this.$data.especialidades = response.data;
          });
    }
  },
  mounted() {
    this.consultarEspecialidades();
  }
};
</script>

<style>
.servicios-medicos-margin {
  margin-top: 2%;
  margin-bottom: 2%;
}

.servicios-medicos-title {
  font-family: "Nunito Bold";
  text-align: center;
}

.servicios-medicos-description {
  font-family: "Nunito Regular";
}

.servicios-medicos-background-header-card {
  background-color: #0e539a;
  color: #ffffff;
  font-family: "Nunito Bold";
}
</style>
