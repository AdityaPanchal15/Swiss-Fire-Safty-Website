<template>
  <div>
    <v-navigation-drawer v-model="drawer" class="navigation-drawer" temporary>
      <v-list>
        <v-list-item>
          <v-list-item-action class="justify-end mb-2">
            <v-btn icon @click="closeDrawer" class="text-white" theme="light" variant="text">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-list-item-action>
          <!-- <v-list-item-title>Navigation Drawer</v-list-item-title> -->
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item to="/" @click="closeDrawer">
          <v-list-item-title class="text-white">Home</v-list-item-title>
        </v-list-item>
        <v-list-item to="/about" @click="closeDrawer">
          <v-list-item-title class="text-white">About</v-list-item-title>
        </v-list-item>
        <v-list-item to="/contact" @click="closeDrawer">
          <v-list-item-title class="text-white">Contact</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="#0f2443" class="header">
      <v-container class="d-none d-md-flex">
        <img src="~/assets/logo.png" alt="Swiss Logo" :width="150"/>
      </v-container>
      <v-spacer></v-spacer>
      <v-container class="d-none d-md-flex justify-end">
        <v-btn text to="/" @click="closeDrawer">Home</v-btn>
        <v-btn text to="/about" @click="closeDrawer">About</v-btn>
        <v-btn text to="/contact" @click="closeDrawer">Contact</v-btn>
      </v-container>
      <v-container class="d-flex d-md-none">
        <v-row>
          <v-col class="d-flex align-center">
            <v-btn icon @click="toggleDrawer"> <v-icon>mdi-menu</v-icon> </v-btn>
          </v-col>
          <v-col class="d-flex justify-center align-center">
            <img src="~/assets/logo.png" alt="Swiss Logo" :width="100"/>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main class="header flex-0-0">
      <slot />
    </v-main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const drawer = ref(false); 

function toggleDrawer() { 
  drawer.value = !drawer.value ;
} 

function closeDrawer() { 
  drawer.value = false;
}
</script>

<style scoped lang="scss">
.navigation-drawer {
  background-color: #0c1d36;
}
.v-list-item.v-list-item--active {
  background-color: #737588;
}
</style>

<style lang="scss">
.header {
  @media screen and (min-width: 768px) {
    .v-toolbar__content, &.v-main {
      height: 94px !important;
    }
  }
}
</style>