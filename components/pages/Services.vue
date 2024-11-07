<template>
  <v-parallax
    src="images/services/our-services.jpg"
    class="service-parallax"
  >
    <div class="overlay d-flex flex-column align-center justify-center text-center px-5">
      <p class="subheading">WHAT WE’RE OFFERING</p>
      <h1 class="main-heading">OUR SERVICES</h1>
    </div>
  </v-parallax>
  <ServiceCard
    v-for="(service, index) in services"
    class="ma-md-10 ma-0"
    :key="index"
    :imageSrc="service.imageSrc"
    :description="service.description"
    :imagePosition="index % 2 !== 0 ? 'left' : 'right'"
    :serviceName="service.name"
  />
</template>

<script setup>
import ServiceCard from '../templates/Services/ServiceCard.vue';

const services = [
  { 
    imageSrc: 'images/services/fire-alarm-systems.jpg', 
    name: 'Fire Alarm Systems', 
    description: 'Our advanced fire alarm systems are designed to provide robust protection, ensuring the safety of your property and personnel. We offer comprehensive solutions, from system design and installation to maintenance and monitoring. Our alarms are equipped with cutting-edge sensors and communication features, allowing for immediate alerts and efficient response. With a focus on reliability and compliance, we tailor each fire alarm system to meet the unique needs of our clients, offering peace of mind and top-notch fire safety.' 
  },
  { 
    imageSrc: 'images/services/fire-fighting-systems.jpg', 
    name: 'Fire Fighting Systems', 
    description: 'Our fire fighting systems provide essential protection for high-risk environments, ensuring rapid and effective fire control. We specialize in designing, installing, and maintaining a range of fire suppression systems, including sprinklers, hydrants, and gas-based suppression solutions. Each system is crafted to meet regulatory standards and tailored to fit the unique safety needs of your facility. With our expertise, you can trust in responsive and reliable protection, safeguarding people, assets, and operations from fire hazards.' 
  },
  { 
    imageSrc: 'images/services/fire-hydrant-system.jpg', 
    name: 'Fire Hydrant Systems', 
    description: 'Our fire fighting systems provide essential protection for high-risk environments, ensuring rapid and effective fire control. We specialize in designing, installing, and maintaining a range of fire suppression systems, including sprinklers, hydrants, and gas-based suppression solutions. Each system is crafted to meet regulatory standards and tailored to fit the unique safety needs of your facility. With our expertise, you can trust in responsive and reliable protection, safeguarding people, assets, and operations from fire hazards.' 
  },
  { 
    imageSrc: 'images/services/cctv-camera-system.jpg', 
    name: 'CCTV Camera Systems', 
    description: 'Our CCTV camera systems deliver high-quality surveillance to enhance the security of your property. We offer a complete range of solutions, from advanced HD cameras and smart analytics to remote monitoring and custom integrations. Designed for both indoor and outdoor environments, our systems ensure 24/7 vigilance and are equipped with features like motion detection, night vision, and real-time alerts. Tailored to meet your specific security needs, our CCTV systems provide a reliable way to protect people, assets, and premises effectively and efficiently.' 
  },
  { 
    imageSrc: 'images/services/access-control-systems.jpg', 
    name: 'Access Control Systems', 
    description: 'Our access control systems provide a secure and streamlined way to manage entry points and monitor access across your facility. With features like biometric authentication, key card access, and remote management, our systems ensure only authorized personnel can access sensitive areas. Our solutions are designed to integrate seamlessly with existing security infrastructure, offering robust control, real-time monitoring, and detailed access logs. Whether for a small office or a large-scale facility, our access control systems provide reliable security and operational efficiency tailored to your needs.' 
  },
];
</script>

<style scoped lang="scss">
.service-parallax {
  position: relative;
  color: white;
  height: 500px;

  @media screen and (max-width: 767px) {
    height: 400px;
  }
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
</style>