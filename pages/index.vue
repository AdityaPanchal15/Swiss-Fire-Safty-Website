<template>
  <v-app>
    <v-app-bar flat class="navbar">
      <v-toolbar-title class="logo">
        <img src="~assets/logo.jpg" alt="Company Logo" height="40" />
        <div class="company-info">
          <span class="company-name">Swiss Fire & Security</span>
          <span class="tagline">The Process Solution Company</span>
        </div>
      </v-toolbar-title>

      <v-spacer />

      <v-btn text class="nav-link" v-for="(item, index) in navItems" :key="index">
        {{ item }}
      </v-btn>

      <v-divider vertical class="divider" />
      
      <v-btn text class="quick-inquiry">
        QUICK INQUIRY
        <v-icon end>mdi-email</v-icon>
      </v-btn>
    </v-app-bar>
  </v-app>
</template>

<script setup>
const navItems = ['About Us', 'Product-Based Solutions', 'Career', 'Contact']
</script>

<style scoped>
.navbar {
  background-color: white;
  padding: 0 20px;
  border-bottom: 1px solid #ddd;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.company-info {
  display: flex;
  flex-direction: column;
}

.company-name {
  font-weight: bold;
  font-size: 16px;
  color: #1e3e78;
}

.tagline {
  font-size: 12px;
  color: #1565c0;
}

.nav-link {
  color: #1e3e78;
  font-weight: 500;
}

.divider {
  height: 32px;
  margin: 0 10px;
}

.quick-inquiry {
  color: #1e3e78;
  font-weight: bold;
}
</style>
