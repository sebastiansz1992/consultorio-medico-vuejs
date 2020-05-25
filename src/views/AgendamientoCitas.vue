<template>
  <div id="agendamiento"></div>
</template>

<script>
export default {
  name: "Agendamiento",
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || "Agendamiento | Consultorio Medico";
      }
    }
  },
  components: {}
};
</script>

<style>
.agendamiento-margin {
  margin-top: 2%;
  margin-bottom: 2%;
}
</style>
