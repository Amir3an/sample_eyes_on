<template>
  <div
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    class="relative w-[80%] m-auto"
  >
    <!-- Key Projects & Case Studies Structure -->
    <div class="w-full flex justify-between">
      <h2 class="text-5xl font-bold">Key Projects & Case Studies</h2>
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

    <!-- Case Study 1 -->
    <div id="img" class="rounded-3xl">
      <div
        class="w-full flex mt-12 h-[620px] rounded-3xl bg-[#70F9E01A] backdrop-blur-[21px]"
      >
        <div id="img" class="w-[50%] h-full bg-[#70F9E01A] rounded-s-3xl">
          <div
            class="w-full bg-[#70F9E01A] backdrop-blur-[21px] relative flex flex-col gap-8 justify-end pb-14 h-full rounded-s-3xl pl-[5%]"
          >
            <span class="text-[#F1EDBA]">3D Design</span>
            <h2 class="text-3xl font-bold">
              A brand 3d Design<br />
              Characteristic for growth
            </h2>
            <p class="text-xl mb-5">
              Detailed information about our motion graphics and<br />
              animation services, including examples and benefits.
            </p>
            <button
              class="flex items-center justify-evenly w-52 h-14 text-[#F1EDBA] text-xl bg-[#002C3F] rounded-[32px]"
            >
              View Project
              <span
                class="w-8 h-8 content-center place-items-center border rounded-full border-[#F1EDBA]"
              >
                <arrowRight />
              </span>
            </button>
          </div>
        </div>
        <img
          class="w-[50%] h-full rounded-3xl object-cover"
          src="../assets/img/card.png"
          alt="card"
        />
      </div>
    </div>

    <!-- Case Study 2 -->
    <div id="img2" class="rounded-3xl">
      <div
        class="w-full flex flex-row-reverse mt-12 h-[620px] rounded-3xl bg-[#70F9E01A] backdrop-blur-[21px]"
      >
        <div id="img2" class="w-[50%] h-full bg-[#70F9E01A] rounded-e-3xl">
          <div
            class="w-full bg-[#70F9E01A] backdrop-blur-[21px] relative flex flex-col gap-8 justify-end pb-14 h-full rounded-e-3xl pl-[5%]"
          >
            <span class="text-[#F1EDBA]">3D Design</span>
            <h2 class="text-3xl font-bold">
              A brand 3d Design<br />
              Characteristic for growth
            </h2>
            <p class="text-xl mb-5">
              Detailed information about our motion graphics and<br />
              animation services, including examples and benefits.
            </p>
            <button
              class="flex items-center justify-evenly w-52 h-14 text-[#F1EDBA] text-xl bg-[#002C3F] rounded-[32px]"
            >
              View Project
              <span
                class="w-8 h-8 content-center place-items-center border rounded-full border-[#F1EDBA]"
              >
                <arrowRight />
              </span>
            </button>
          </div>
        </div>
        <img
          class="w-[50%] h-full rounded-3xl object-cover"
          src="../assets/img/card2.png"
          alt="card2"
        />
      </div>
    </div>

    <!-- Blur Element (Mouse Effect) -->
    <div ref="blurCircle" class="blur-circle"></div>
  </div>
</template>

<script>
import gsap from "gsap";
import arrowRight from "../assets/svg-icon/arrow-right.vue";

export default {
  components: {
    arrowRight,
  },
  methods: {
    handleMouseMove(event) {
      const circle = this.$refs.blurCircle;

      // محاسبه موقعیت موس نسبت به صفحه
      const container = event.currentTarget.getBoundingClientRect();
      const xPos = event.clientX - container.left; // موقعیت X نسبت به container
      const yPos = event.clientY - container.top; // موقعیت Y نسبت به container

      // به‌روزرسانی موقعیت دایره بلور
      gsap.to(circle, {
        x: xPos - circle.offsetWidth / 2,
        y: yPos - circle.offsetHeight / 2,
        opacity: 1,
        duration: 0.1,
        ease: "power3.out",
      });
    },

    handleMouseLeave() {
      // Hide the blur circle when the mouse leaves
      const circle = this.$refs.blurCircle;
      gsap.to(circle, { opacity: 0, duration: 0.2 });
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

#img {
  background: url("../assets/img/card.png");
}

#img2 {
  background: url("../assets/img/card2.png");
}

/* Blur Circle Style */
.blur-circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  filter: blur(15px);
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.2s ease;
}
</style>
