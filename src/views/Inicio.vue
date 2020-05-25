<template>
  <div class="inicio">
    <div class="container inicio-margin">
      <div class="row">
        <Carousel />
      </div>
      <div class="row inicio-margin-title">
        <div class="col-md-2">
          <img
            src="../assets/images/Inicio/logo-salud.png"
            alt="Logo de Salud"
            class="img-fluid"
          />
        </div>
        <div class="col-md-10">
          <h1 class="inicio-title">
            Bievenidos a una nueva forma de cuidar tu salud
          </h1>
        </div>
      </div>
      <div class="row inicio-description">
        <div class="col-md-12">
          <p>
            Este espacio es un sistema medico diseñado como un consultorio
            virtual para la atención de pacientes, donde por medio de la
            tecnologia buscamos agilizar la prestación y gestión de cuidados de
            salud, sin importar la condición personal o localización geográfica,
            facilitando la movilidad y permitiendo la elección de los recursos
            sanitarios apropiados.
          </p>
          <p>
            Tendremos varias especialidades como medicina general, dermatólogia,
            cardiologia, infectologia, pediatria y ginecologia a las cuales
            puedes acceder y ademas tendras varias medicos con gran trayectoria
            y experiencia dispuestos atenderte
          </p>
          <p>No esperes mas y agenda tu cita con nuestros profesionales!!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Carousel from "../components/Carousel.vue";
export default {
  name: "Inicio",
  watch: {
    $route: {
      immediate: true,
      handler(to: any, from: any) {
        document.title = to.meta.title || "Inicio | Consultorio Medico";
      }
    }
  },
  components: {
    Carousel
  }
};
</script>

<style>
@font-face {
  font-family: "Nunito Regular";
  src: url("../assets/fonts/Nunito-Regular.woff");
}

@font-face {
  font-family: "Nunito Bold";
  src: url("../assets/fonts/Nunito-Bold.woff");
}

.inicio-title {
  font-family: "Nunito Bold";
}

.inicio-margin {
  margin-top: 2%;
  margin-bottom: 2%;
}

.inicio-margin-title {
  margin-top: 5%;
}

.inicio-description {
  margin-top: 5%;
  font-family: "Nunito Regular";
  font-size: 20px;
}
</style>
