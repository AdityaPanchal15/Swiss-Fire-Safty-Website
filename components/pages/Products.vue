<template>
  <v-parallax src="images/slider2.png" class="products-parallax">
    <div class="overlay d-flex flex-column align-center justify-center text-center px-5">
      <h1 class="main-heading">Our Products</h1>
    </div>
  </v-parallax>
  <div class="products ma-10">
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" md="3" sm="4">
        <ProductCard :image="product.image" :title="product.title" :productId="product.id" :path="product.path" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '../templates/Products/ProductCard.vue';
import { products } from '../../constants/staticValues';
</script>

<style lang="scss">
.products-parallax {
  position: relative;
  color: white;
  height: 500px;

  @media screen and (max-width: 767px) {
    height: 400px;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    /* Semi-transparent overlay for better text readability */
    width: 100%;
    height: 100%;
  }

  .subheading {
    font-size: 1rem;
    letter-spacing: 0.1em;
    color: #e0e0e0;
  }

  .main-heading {
    font-size: 3rem;
    font-weight: bold;
  }
}
</style>