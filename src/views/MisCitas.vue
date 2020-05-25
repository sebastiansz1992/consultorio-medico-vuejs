<template>
  <div class="mis-citas">
    <h1>Esta es la pagina de Mis Citas</h1>
  </div>
</template>

<script>
export default {
  name: "MisCitas",
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || "Mis Citas | Consultorio Medico";
      }
    }
  },
  components: {}
};
</script>
