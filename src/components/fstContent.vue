<template>
  <div class="services-container" ref="servicesSection">
    <div
      v-for="(service, index) in services"
      :key="index"
      class="service-card"
      :class="{ active: activeIndex === index }"
    >
      <div class="service-content">
        <h2 class="text-2xl font-bold">{{ service.title }}</h2>
        <p class="text-xl mt-4">{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Motion Graphics",
          description: "Details about motion graphics.",
        },
        {
          title: "2D & 3D Animation",
          description: "Details about animations.",
        },
        { title: "VFX & Effects", description: "Details about VFX services." },
        {
          title: "Social Media Content",
          description: "Details about content services.",
        },
      ],
      activeIndex: 0, // کارت فعال
    };
  },
  mounted() {
    window.addEventListener("wheel", this.handleScroll, { passive: false });
  },
  methods: {
    handleScroll(event) {
      event.preventDefault(); // جلوگیری از اسکرول عادی
      if (event.deltaY > 0 && this.activeIndex < this.services.length - 1) {
        // اسکرول به پایین
        this.activeIndex++;
      } else if (event.deltaY < 0 && this.activeIndex > 0) {
        // اسکرول به بالا
        this.activeIndex--;
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener("wheel", this.handleScroll);
  },
};
</script>

<style scoped>
.services-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.service-card {
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.8s ease, transform 0.8s ease;
  position: absolute;
  width: 60%;
  background: #70f9e01a;
  backdrop-filter: blur(21px);
  border-radius: 1rem;
  padding: 2rem;
  color: white;
  text-align: center;
}

/* کارت فعال */
.service-card.active {
  opacity: 1;
  transform: translateY(0);
}

div {
  font-family: BarlowRegula;
  color: white;
}

button {
  border: 1px solid #f1edba;
}

#blur {
  backdrop-filter: blur(21px);
}

#img {
  background: url("../assets/img/eyseOn1.png");
}
</style>
