<template>
  <div class="container medicos-especialidad-margin">
    <div class="row row-cols-1 row-cols-md-3">
      <div class="col mb-4" v-for="medico in $data.medicos" v-bind:key="medico.id">
        <div class="card h-100">
          <img
            src="../assets/images/servicios-medicos/foto-medico.png"
            class="card-img-top"
            alt="Foto Doctor"
          />
          <div class="card-body">
            <h5 class="card-title text-center">{{medico.nombreCompleto}}</h5>
            <p class="card-text">
              <strong>Experiencia:</strong> {{medico.experiencia}}
            </p>
            <p class="card-text">
              <strong>Títulos Academicos:</strong> {{medico.titulosObtenidos}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MedicosEspecialidad",
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || "Especialidades | Consultorio Medico";
      }
    }
  },
  data() {
    return {
      medicos: []
    }
  },
  components: {},
  mounted() {
    this.obtenerMedicoPorEspecialidad();
  },
  methods: {
    obtenerMedicoPorEspecialidad: function () {
      const idEspecialidad = this.$route.params.id;
      axios
        .get(`http://127.0.0.1:8000/obtenerMedicosPorEspecialidad/${idEspecialidad}`)
        .then(response => {
          this.$data.medicos = response.data;
          console.log(this.$data.medicos);
          });
    }
  }
};
</script>

<style>
.medicos-especialidad-margin {
  margin-top: 2%;
  margin-bottom: 2%;
}
</style>
