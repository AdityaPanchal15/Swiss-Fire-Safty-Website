<template>
  <div class="slider-container">
    <v-carousel show-arrows="hover" class="carousel-container" hide-delimiter-background cycle>
      <v-carousel-item
        v-for="i in 5"
        :key="i"
        :src="`/images/slider${i}.png`"
        class="image-fill"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup lang="ts">
  const items = reactive([
    {
      src: '~/assets/images/slider1.png',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    },
  ])
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
      height: unset !important;
      .image-fill {
        .v-img img {
          object-fit: contain !important;
          height: 100%;
        }
      }
    }
  }
}
</style>