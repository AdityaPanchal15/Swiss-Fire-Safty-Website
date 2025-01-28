<template>
  <div class="slider-container">
    <v-carousel show-arrows="hover" class="carousel-container" hide-delimiter-background cycle>
      <v-carousel-item
        v-for="i in 5"
        :key="i"
        :src="`images/slider${i}.png`"
        class="image-fill"
      ></v-carousel-item>
    </v-carousel>
  </div>
  <!-- Who we are section -->
  <About />
  <!-- Our Clients -->
  <OurClients />
</template>

<script setup lang="ts">
import About from '../templates/Home/About.vue';
import OurClients from '../templates/Home/OurClients.vue';
</script>

<style lang="scss">
.slider-container {
  .carousel-container {
    height: calc(100vh - 94px) !important;
    .image-fill {
      .v-img img {
        object-fit: fill !important;
        height: 100%;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .slider-container {
    .carousel-container {
      height: 237px !important;
      .image-fill {
        .v-img img {
          object-fit: cover !important;
          height: 100%;
        }
      }
    }
  }
}
</style>
