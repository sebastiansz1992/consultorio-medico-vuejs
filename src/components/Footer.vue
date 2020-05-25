<template>
  <!-- Footer -->
  <footer class="footer-background-color text-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12 py-5">
          <div class="font-icons-color flex-center">
            <a class="fb-ic">
              <i
                class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"
              ></i>
            </a>
            <a class="tw-ic">
              <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            </a>
            <a class="gplus-ic">
              <i
                class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"
              ></i>
            </a>
            <a class="li-ic">
              <i
                class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"
              ></i>
            </a>
            <a class="ins-ic">
              <i
                class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"
              ></i>
            </a>
            <a class="pin-ic">
              <i class="fab fa-pinterest fa-lg white-text fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright text-center">
      Proyecto Aula Institución Universitaria Salazar y Herrera
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style>
@font-face {
  font-family: "Nunito Bold";
  src: url("../assets/fonts/Nunito-Bold.woff");
}

.text-footer {
  font-family: "Nunito Bold";
  text-align: center;
}

.footer-background-color {
  background-color: #0e539a;
}

.font-icons-color {
  color: #ffffff;
}

.footer-copyright {
  color: #ffffff;
}
</style>
