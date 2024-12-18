<template>
  <div class="w-[80%] m-auto">
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

    <!-- اضافه کردن افکت بلر پشت موس -->
    <div
      class="relative"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <div id="img" class="rounded-3xl">
        <div class="w-full flex mt-12 h-[620px] rounded-3xl bg-[#70F9E01A]">
          <div id="img" class="w-[50%] h-full bg-[#70F9E01A] rounded-s-3xl">
            <div
              class="w-full bg-[#70F9E01A] relative flex flex-col gap-8 justify-end pb-14 h-full rounded-s-3xl pl-[5%]"
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
                  ><arrowRight />
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
    </div>

    <div
      class="relative"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <div id="img2" class="rounded-3xl">
        <div
          class="w-full flex flex-row-reverse mt-12 h-[620px] rounded-3xl bg-[#70F9E014]"
        >
          <div id="img2" class="w-[50%] h-full bg-[#70F9E01A] rounded-e-3xl">
            <div
              class="w-full bg-[#70F9E01A] relative flex flex-col gap-8 justify-end pb-14 h-full rounded-e-3xl pl-[5%]"
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
                  ><arrowRight />
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
    </div>

    <!-- دایره بلر که زیر موس حرکت میکنه -->
    <div v-show="isMouseIn" class="blur-circle" ref="blurCircle"></div>
  </div>
</template>

<script>
import gsap from "gsap";
import arrowRight from "../assets/svg-icon/arrow-right.vue";

export default {
  components: {
    arrowRight,
  },
  data() {
    return {
      isMouseIn: false, // برای نمایش یا عدم نمایش دایره بلر
    };
  },
  methods: {
    handleMouseMove(event) {
      this.isMouseIn = true;

      const circle = this.$refs.blurCircle;
      const xPos = event.clientX;
      const yPos = event.clientY;

      // موقعیت موس را به دایره بلر منتقل می‌کنیم
      gsap.to(circle, {
        x: xPos - circle.offsetWidth / 2,
        y: yPos - circle.offsetHeight / 2,
        duration: 0.3,
        ease: "power3.out",
      });

      // اضافه کردن بلر به دایره
      gsap.to(circle, {
        filter: "blur(15px)",
        duration: 0.3,
      });
    },
    handleMouseLeave() {
      this.isMouseIn = false;
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

/* برای پس‌زمینه‌های بلر شده */
.relative {
  position: relative;
}

.blur-circle {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  pointer-events: none;
  transition: transform 0.3s ease-out;
  z-index: 9999;
}
</style>
