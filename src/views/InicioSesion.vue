<template>
  <div class="inicio-sesion-medico">
    <h1>Esta es la pagina de inicio de sesion medico</h1>
  </div>
</template>

<script>
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
  components: {}
};
</script>
