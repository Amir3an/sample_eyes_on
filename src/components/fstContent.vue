<template>
  <div class="flex justify-between w-[80% m-auto relative">
    <!-- بخش ثابت (بالا سمت چپ) -->
    <div class="relative flex flex-col section-fixed">
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
    <!-- کارت‌ها -->
    <div class="cards-container" ref="cardsContainer">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card"
        :ref="`card-${index}`"
      >
        <div id="img" class="w-[594px] h-auto rounded-3xl">
          <div
            class="w-[594px] h-auto px-10 py-8 rounded-3xl bg-[#70F9E01A] backdrop-blur-[21px]"
          >
            <h2 class="text-2xl font-bold">{{ card.title }}</h2>
            <p class="text-xl mt-4">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import EyseOnServices from "../assets/svg-icon/EyseOn-Services.vue";
import arrowRight from "../assets/svg-icon/arrow-right.vue";

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    arrowRight,
    EyseOnServices,
  },
  data() {
    return {
      cards: [
        {
          title: "Motion Graphic",
          description: "Details about motion graphics services.",
        },
        {
          title: "2D Animation",
          description: "Information about 2D animation.",
        },
        {
          title: "3D Animation",
          description: "Explore 3D animation benefits.",
        },
        { title: "Custom Design", description: "Tailored design solutions." },
      ],
    };
  },
  mounted() {
    this.initScrollCards();
  },
  methods: {
    initScrollCards() {
      const cardsContainer = this.$refs.cardsContainer;

      // تنظیم انیمیشن برای کارت‌ها
      gsap
        .timeline({
          scrollTrigger: {
            trigger: cardsContainer,
            start: "top top",
            end: "+=300%", // افزایش مدت زمان برای ماندن در بخش
            scrub: true, // حرکت انیمیشن با اسکرول
            pin: true, // ثابت نگه‌داشتن بخش
            anticipatePin: 1,
          },
        })
        .to(".card", {
          opacity: 0,
          y: 50,
          stagger: 1, // کارت‌ها یکی پس از دیگری نمایش داده شوند
          duration: 1,
          ease: "power2.out",
        })
        .to(".card", {
          opacity: 1,
          y: 0,
          stagger: 1,
          duration: 1,
          ease: "power2.out",
        });
    },
  },
};
</script>

<style scoped>
div {
  font-family: BarlowRegula;
  color: white;
}

button {
  border: 1px solid #f1edba;
}

.cards-container {
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
}

#img {
  position: relative;
  background: url("../assets/img/eyseOn1.png");
}

.card {
  opacity: 0; /* شروع انیمیشن با حالت محو */
  transition: opacity 0.3s ease-in-out;
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
