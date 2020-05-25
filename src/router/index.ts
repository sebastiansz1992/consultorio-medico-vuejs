import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Inicio.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "Inicio"
  },
  {
    path: "/Inicio",
    name: "Inicio",
    component: Home
  },
  {
    path: "/ServiciosMedicos",
    name: "ServiciosMedicos",
    component: () => import("../views/ServiciosMedicos.vue")
  },
  {
    path: "/MisCitas",
    name: "MisCitas",
    component: () => import("../views/MisCitas.vue")
  },
  {
    path: "/InicioSesion",
    name: "InicioSesion",
    component: () => import("../views/InicioSesion.vue")
  },
  {
    path: "/Registro",
    name: "Registro",
    component: () => import("../views/Registro.vue")
  },
  {
    path: "/Especialidades/:id",
    name: "Especialidades",
    component: () => import("../views/MedicosEspecialidad.vue")
  },
  {
    path: "/Agendamiento",
    name: "Agendamiento",
    component: () => import("../views/AgendamientoCitas.vue")
  },
  {
    path: "/RegistroMedico",
    name: "RegistroMedico",
    component: () => import("../views/FormularioMedico.vue")
  },
  {
    path: "/RegistroUsuario",
    name: "RegistroUsuario",
    component: () => import("../views/FormularioUsuario.vue")
  }
];

const router: VueRouter = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
