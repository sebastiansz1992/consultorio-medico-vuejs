<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://tec-ps.com/wp-content/uploads/2017/05/contact-banner-3.png"
          alt="..."
          class="img-fluid"
          width="100%"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://tec-ps.com/wp-content/uploads/2017/05/contact-banner-3.png"
          alt="..."
          class="img-fluid"
          width="100%"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://tec-ps.com/wp-content/uploads/2017/05/contact-banner-3.png"
          alt="..."
          class="img-fluid"
          width="100%"
        />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Carousel extends Vue {}
</script>
