<template>
  <v-footer class="flex-column footer" color="#0f2443">
    <v-row class="py-10 w-100 text-center text-sm-left" align="start" justify="space-between">
      <v-col class="align-self-center d-flex justify-md-start justify-center" cols="12" md="2" sm="12">
        <img src="~/assets/logo.png" alt="Swiss Logo" class="image-container" />
      </v-col>
      <v-col cols="12" md="3" sm="4">
        <p>Registered address:</p>
        <p>C-34, Arunachal Society, <br /> Arunachal Road, <br /> Subhanpura, Vadodara, Gujarat 390023.</p>
        <br />
        <p>Branch address:</p>
        <p>SF-09, Shidhheshwer Hallmark, <br /> Ajwa Road, Vadodara, Gujarat 390021</p>
      </v-col>
      <v-col cols="12" md="3" sm="4">
        <p style="word-break: break-word">Email:
          <br /> <a href="mailto:info@swissfiresecurity.com"
            class="text-white text-decoration-none">info@swissfiresecurity.com</a>
          <br /> <a href="mailto:vishal@swissfiresecurity.com"
            class="text-white text-decoration-none">vishal@swissfiresecurity.com</a>
          <br /> <a href="mailto:darpan@swissfiresecurity.com"
            class="text-white text-decoration-none">darpan@swissfiresecurity.com</a>
        </p>
        <br />
        <p>Contact Number:
          <br /> <a href="tel:+919638178282" class="text-white text-decoration-none">+91 9638178282</a>
          <br /> <a href="tel:+919428136617" class="text-white text-decoration-none">+91 9428136617</a>
        </p>

      </v-col>
      <v-col cols="12" md="3" sm="4">
        <p>Hours:</p>
        <p>Mon-Sat 9:30am - 7:00pm</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <span>&copy; 2025 Swiss Fire Security</span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
</script>

<style scoped lang="scss">
.footer {
  .image-container {
    height: 150px;
  }
}

@media (max-width: 512px) {
  .footer {
    p {
      font-size: 0.9rem;
    }
  }
}

@media screen and (max-width: 768px) {
  .footer {
    .image-container {
      height: 125px;
    }
  }
}
</style>
