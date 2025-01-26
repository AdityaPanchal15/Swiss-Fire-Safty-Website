<template>
  <v-card class="product-card" outlined rounded @click="redirectToProduct">
    <!-- Image Section with Hover Effect -->
    <v-img :src="image" :alt="title" height="250px" class="product-image">
      <!-- Overlay with Quick View Text -->
      <div class="overlay d-flex align-center justify-center">
        <span class="text-white text-subtitle-1 font-weight-medium">Quick View</span>
      </div>
    </v-img>

    <!-- Title Section -->
    <v-card-text class="product-title">
      <span class="text">{{ title }}</span>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  productId: {
    type: [String, Number],
    required: true,
  },
  path: {
    type: String,
    required: true
  }
});

const router = useRouter();

function redirectToProduct() {
  router.push(`/product/${props.path}`);
}
</script>

<style scoped lang="scss">
.product-card {
  cursor: pointer;
  position: relative;
  height: 100%;
}

.product-image {
  position: relative;
  transition: opacity 0.3s ease;
}

.product-card:hover .product-image {
  opacity: 0.8;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .overlay {
  opacity: 1;
}

.product-title {
  height: 100%;
  background-color: #f5f5f5;
  .text {
    font-size: 1rem;
    color: #606f7b;
    line-height: 1.6;
  }
}

.text-white {
  color: white;
}
</style>