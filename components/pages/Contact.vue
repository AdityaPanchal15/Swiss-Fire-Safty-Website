<template>
  <v-parallax
    src="images/contact/contact-us-banner.jpg"
    class="service-parallax"
  >
    <div class="overlay d-flex flex-column align-center justify-center text-center px-5">
      <p class="subheading">GET IN TOUCH WITH US</p>
      <h1 class="main-heading">CONTACT US</h1>
    </div>
  </v-parallax>
  <div class="contact-details">
    <v-row>
      <v-col cols="12" sm="6" md="3" v-for="item in contactDetails">
        <v-card class="text-center mx-3 px-6 py-8" elevation="12" rounded="lg">
          <v-img
            width="75"
            :src="item.imgUrl"
            alt="Office"
            class="mx-auto"
          ></v-img>
          <v-card-title class="contact-title">
            {{ item.title }}
          </v-card-title>
          <v-card-text class="contact-description">
            <p v-html="item.description" class="text-wrap"></p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
const contactDetails = [
  {
    imgUrl: 'images/contact/office-icon.png',
    title: 'Office',
    description: 'C-34, Arunachal Society, Arunachal Road, Subhanpura, Vadodara, Gujarat - 390023. <br />'
  },
  {
    imgUrl: 'images/contact/phone-icon.png',
    title: 'Phone',
    description: 'India: +91 9638178282 <br /> India: +91 9428136617'
  },
  {
    imgUrl: 'images/contact/email-icon.png',
    title: 'Email',
    // description: 'info@swissfiresecurity.com <br /> vishal@swissfiresecurity.com <br /> darpan@swissfiresecurity.com'
    description: 'info@swissfiresecurity.com <br /> darpan@swissfiresecurity.com'
  },
  {
    imgUrl: 'images/contact/job-icon.png',
    title: 'Open',
    description: 'Mon-Sat 9:30am - 7:00pm <br /> Online Support'
  },

]
</script>

<style lang="scss">
.service-parallax {
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

.contact-details {
  padding: 100px 20px !important;
  .contact-description {
    height: 100px;
    color: #0f2443;
  }
  
  .contact-title {
    color: #0f2443;
    margin: 10px 0;
    font-weight: 600;
  }
}
</style>
