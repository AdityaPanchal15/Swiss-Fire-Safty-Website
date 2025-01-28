<template>
  <h2 class="our-clients-title">Our Clients</h2>
  <v-container class="clients-grid" fluid>
    <v-row>
      <v-col v-for="(client, index) in clients" :key="index" cols="4" md="3" lg="2" class="client-logo-container">
        <v-img :src="client.logo" :alt="client.name" class="client-logo" contain />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const clients = [
  { name: 'Alembic', logo: '/images/clients/alembic.jpg' },
  { name: 'Adani', logo: '/images/clients/adani.png' },
  { name: 'NDDB Dairy Services', logo: '/images/clients/nddb-dairy.jpg' },
  { name: 'Deepak Nitrite', logo: '/images/clients/deepak-nitrite.png' },
  { name: 'L&T Construction', logo: '/images/clients/l-and-t-construction.jpg' },
  { name: 'Transpek Silox', logo: '/images/clients/transpek-silox.jpg' },
  { name: 'ABB', logo: '/images/clients/abb.png' },
  { name: 'Gujarat Metro', logo: '/images/clients/gujarat-metro.png' },
  { name: 'Airports Authority Of India', logo: '/images/clients/airports-authority.png' },
  { name: 'Aarti Industries', logo: '/images/clients/aarti-industries.jpg' },
  { name: 'Indian Oil', logo: '/images/clients/indian-oil.png' },
];
</script>

<style lang="scss" scoped>
.our-clients-title {
  font-size: 2.2rem;
  text-align: center;
  color: #0f2443;
  margin-top: 20px;
}
.clients-grid {
  text-align: center;

  .client-logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
      /* Slight zoom-in effect */
    }
  }

  .client-logo {
    max-height: 100px;
    /* Adjust logo size */
    opacity: 0.8;
    /* Slight fade for inactive state */
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 1;
      /* Full opacity on hover */
    }
  }
}

// Responsive Styles
@media (max-width: 768px) {
  .our-clients-title {
    font-size: 1.8rem; 
  }
}

@media (max-width: 480px) {
  .our-clients-title {
    font-size: 1.6rem; 
  }
}
</style>