<template>
  <div class="w-[80%] flex justify-between m-auto services-section" ref="servicesSection">
    <div class="relative flex flex-col">
      <div id="blur-2"></div>
      <EyseOnServices class="w-52 h-52 opacity-10" />
      <div class="flex flex-col gap-7 mt-[-1rem]">
        <h2 class="text-5xl font-bold mb-4">Services</h2>
        <p class="text-xl">
          Detailed information about our motion graphics and<br />
          animation services, including examples and benefits.
        </p>

        <button
          class="flex items-center justify-evenly w-44 h-14 text-[#F1EDBA] text-xl bg-[#002C3F] rounded-[32px]"
        >
          View More
          <span
            class="w-8 h-8 content-center place-items-center border rounded-full border-[#F1EDBA]"
          >
            <arrowRight />
          </span>
        </button>
      </div>
    </div>

    <!-- کارت‌های سرویس -->
    <div class="w-[594px] h-auto">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="service-card rounded-3xl"
        :class="{ 'active-card': activeIndex === index }"
        ref="serviceCards"
      >
        <div
          class="w-full relative h-[180px] px-10 py-8 mt-5 rounded-3xl bg-[#70F9E01A] backdrop-blur-[21px]"
        >
          <h2 class="text-2xl font-bold">{{ service.title }}</h2>
          <p class="text-xl mt-4">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EyseOnServices from "../assets/svg-icon/EyseOn-Services.vue";
import arrowRight from "../assets/svg-icon/arrow-right.vue";

export default {
  components: {
    arrowRight,
    EyseOnServices,
  },
  data() {
    return {
      services: [
        { title: "Motion Graphics", description: "Details about motion graphics." },
        { title: "2D & 3D Animation", description: "Details about animations." },
        { title: "VFX & Effects", description: "Details about VFX services." },
        { title: "Social Media Content", description: "Details about content services." },
      ],
      activeIndex: 0, // برای روشن کردن کارت‌ها
      isSectionLocked: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const section = this.$refs.servicesSection;
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      // قفل کردن اسکرول وقتی سکشن وارد صفحه می‌شود
      if (sectionTop <= 0 && sectionBottom > window.innerHeight) {
        document.body.style.overflow = "hidden";
        this.isSectionLocked = true;
      } else {
        document.body.style.overflow = "auto";
        this.isSectionLocked = false;
      }

      // فعال کردن کارت‌ها به‌ترتیب
      this.$refs.serviceCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight * 0.7) {
          this.activeIndex = index;
        }
      });
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    document.body.style.overflow = "auto"; // بازگرداندن اسکرول به حالت عادی
  },
};
</script>

<style scoped>
/* کارت‌ها در حالت عادی */
.service-card {
  transition: all 0.5s ease-in-out;
  opacity: 0.5;
  transform: translateY(50px);
}

/* کارت فعال */
.service-card.active-card {
  opacity: 1;
  transform: translateY(0);
}

#blur-2 {
  position: absolute;
  top: -6rem;
  left: -17rem;
  width: 430px;
  height: 200.16px;
  background-color: #71c3d04d;
  transform: rotate(-130.91deg);
  filter: blur(113px);
  border-radius: 25rem;
  z-index: -9;
}
</style>



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