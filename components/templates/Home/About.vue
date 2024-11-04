<template>
  <div class="who-we-are">
    <h2>Who we are?</h2>
    <p>
      In today’s fast-paced industrial environment, ensuring safety and minimizing risks are paramount. Industrial fire and safety is a critical aspect of operations, aimed at protecting both personnel and assets from fire hazards and other safety-related incidents. Our commitment to industrial fire and safety involves implementing comprehensive strategies that encompass prevention, training, and emergency response.
    </p>
    <p>
      At Swiss Fire And Security, we prioritize the creation of a safe workplace by adhering to industry standards and regulations. Our dedicated team of professionals is equipped with the knowledge and expertise to assess potential risks, develop tailored safety programs, and conduct thorough training sessions for employees. We believe that a proactive approach to fire safety not only safeguards lives but also enhances productivity and operational efficiency.
    </p>
    <p>
      By integrating state-of-the-art technologies and best practices, we strive to foster a culture of safety that empowers our workforce and protects our community. With our unwavering focus on industrial fire and safety, we are committed to being a leader in the field, ensuring that safety is not just a policy, but a core value of our company.
    </p>
  </div>
</template>

<style scoped lang="scss">
.who-we-are {
  background: #f0f4f8; // Light, cool background
  color: #0f2443; // Theme color for the text
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
  margin: 20px auto;
  max-width: 800px;
  text-align: center;

  h2 {
    font-size: 2.2rem;
    color: #0f2443; // Theme color for the heading
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #4a4a4a; // Dark gray for softer contrast
    margin-bottom: 20px;
    text-align: justify; // Maintains readability

    &:last-child {
      margin-bottom: 0;
    }
  }

  &::before {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #0f2443; // Accent line in theme color
    margin: 0 auto 20px;
    border-radius: 2px;
  }

  button {
    background-color: #0f2443;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #173b63; // Slightly lighter shade on hover
    }
  }
}

// Responsive Styles
@media (max-width: 768px) {
  .who-we-are {
    padding: 20px; // Reduce padding on smaller screens
    border-radius: 0;
    margin-top: 0;

    h2 {
      font-size: 1.8rem; // Adjust heading size
    }

    p {
      font-size: 1rem; // Adjust paragraph size
    }

    button {
      width: 100%; // Make button full width on small screens
      padding: 12px; // Increase padding for better touch targets
    }
  }
}

@media (max-width: 480px) {
  .who-we-are {
    h2 {
      font-size: 1.6rem; // Further reduce heading size for very small screens
    }

    p {
      font-size: 0.9rem; // Further reduce paragraph size
    }
  }
}

</style>