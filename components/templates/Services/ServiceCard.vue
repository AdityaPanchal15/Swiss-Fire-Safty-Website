<template>
  <v-row :class="{ 'flex-row-reverse': imagePosition === 'left' }" class="service-item mb-md-10 mb-1">
    <v-col :cols="12" :sm="4" :md="4">
      <v-img :src="imageSrc" alt="Service Image" class="service-image"></v-img>
    </v-col>
    <v-col class="service-content" :cols="12" :sm="8" :md="8">
      <h1 class="service-title">{{ serviceName }}</h1>
      <p class="service-description">{{ description }}</p>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  imageSrc: string;
  serviceName: string;
  description: string;
  imagePosition: 'left' | 'right';
}>();
</script>

<style scoped lang="scss">
.service-item {
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  &.flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* Stack columns vertically on small screens */
  @media (max-width: 600px) {
    flex-direction: column;
  }
}

.service-image {
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);

  /* Adjust image width for small screens */
  @media (max-width: 600px) {
    width: 100%;
  }
}

.service-content {
  padding-left: 20px;
  padding-right: 20px;

  /* Center text on smaller screens */
  @media (max-width: 600px) {
    padding: 10px 0;
    text-align: center;
  }
}

.service-title {
  font-size: 2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 10px;

  /* Responsive font size for smaller screens */
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
}

.service-description {
  font-size: 1rem;
  color: #606f7b;
  line-height: 1.6;

  /* Adjust font size on smaller screens */
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
}
</style>
