<template>
  <v-parallax
    :src="product?.image"
    class="product-parallax"
  >
    <div class="overlay d-flex flex-column align-center justify-center text-center px-5">
      <h1 class="main-heading">{{ product?.title }}</h1>
    </div>
  </v-parallax>
  <div class="product-description" v-html="product.description"></div>
</template>

<script setup lang="ts">
import { products } from '../../constants/staticValues';

const route = useRoute();
const product: any = reactive(products.find(product=> product.path === route.params.path) || {});

useHead(() => ({
  title: product.title ? `${product.title} - Swiss Fire & Security` : 'Product Not Found - Swiss Fire & Security'
}));
</script>

<style lang="scss">
.product-parallax {
  position: relative;
  color: white;
  height: 500px;

  @media screen and (max-width: 767px) {
    height: 400px;
  }
  
  .overlay {
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay for better text readability */
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

.product-description {
  padding: 40px;
  background-color: #f5f5f5;
  // Styling for headings
  h1, h2 {
    color: #2c3e50; // Heading color
    font-size: 1.5rem; // Heading font size, larger for h1
    margin-bottom: 1rem;
  }
  
  h2 {
    font-size: 1.25rem; // Slightly smaller size for h2
  }
  
  // Styling for paragraphs
  p, li {
    font-size: 1rem;
    color: #606f7b; // Text color
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  // Styling for unordered lists
  ul {
    // list-style-type: none; // Remove default bullet points
    padding-left: 2rem;
  }
  
  // Styling for list items
  li {
    margin-bottom: 0.5rem;
  }
  
  // Strong (bold) text
  strong {
    font-weight: bold;
    color: black;
  }
}
</style>
