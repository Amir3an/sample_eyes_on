<template>
  <div class="w-[80%] m-auto relative portfolio-slider text-white p-8">
    <div class="flex justify-between m-auto w-[98%]">
      <h2 class="text-4xl font-bold mb-6">Portfolio</h2>
      <div class="swiper-navigation flex gap-6">
        <button class="swiper-button-prev">
          <arrowLeft />
        </button>
        <button class="swiper-button-next">
          <arrowRight />
        </button>
      </div>
    </div>
    <swiper
      class="mt-10"
      :slides-per-view="1"
      :space-between="135"
      :breakpoints="{
        480: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }"
      :navigation="{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }"
    >
      <swiper-slide class="rounded-3xl">
        <div class="relative rounded-3xl shadow-lg overflow-visible mx-5">
          <img
            src="../assets/img/swiper3.jfif"
            alt="Design"
            class="w-full h-[395px] object-cover rounded-3xl"
          />
          <div id="glass">
            <p class="text-lg font-normal text-[#F1EDBA]">Graphic Design</p>
            <h6 class="text-xl mt-2 font-bold">
              A brand 3d Design Characteristic for growth
            </h6>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="rounded-3xl">
        <div class="relative rounded-3xl shadow-lg overflow-visible mx-5">
          <img
            src="../assets/img/swiper2.jfif"
            alt="Design"
            class="w-full h-[395px] object-cover rounded-3xl"
          />
          <div id="glass">
            <p class="text-lg font-normal text-[#F1EDBA]">Graphic Design</p>
            <h6 class="text-xl mt-2 font-bold">
              A brand 3d Design Characteristic for growth
            </h6>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="rounded-3xl">
        <div class="relative rounded-3xl shadow-lg overflow-visible mx-5">
          <img
            src="../assets/img/swiper1.jfif"
            alt="Design"
            class="w-full h-[395px] object-cover rounded-3xl"
          />
          <div id="glass">
            <p class="text-lg font-normal text-[#F1EDBA]">Graphic Design</p>
            <h6 class="text-xl mt-2 font-bold">
              A brand 3d Design Characteristic for growth
            </h6>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="rounded-3xl">
        <div class="relative rounded-3xl shadow-lg overflow-visible mx-5">
          <img
            src="../assets/img/swiper3.jfif"
            alt="Design"
            class="w-full h-[395px] object-cover rounded-3xl"
          />
          <div id="glass">
            <p class="text-lg font-normal text-[#F1EDBA]">Graphic Design</p>
            <h6 class="text-xl mt-2 font-bold">
              A brand 3d Design Characteristic for growth
            </h6>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="rounded-3xl">
        <div class="relative rounded-3xl shadow-lg overflow-visible mx-5">
          <img
            src="../assets/img/swiper1.jfif"
            alt="Design"
            class="w-full h-[395px] object-cover rounded-3xl"
          />
          <div id="glass">
            <p class="text-lg font-normal text-[#F1EDBA]">Graphic Design</p>
            <h6 class="text-xl mt-2 font-bold">
              A brand 3d Design Characteristic for growth
            </h6>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import arrowLeft from "../assets/svg-icon/swiper/arrow-left.vue";
import arrowRight from "../assets/svg-icon/swiper/arrow-right.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    arrowLeft,
    arrowRight,
  },
};
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  display: flex;
  color: #fff;
  background: rgba(0, 44, 63, 1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 0.79px solid rgba(241, 237, 186, 1);
  align-items: center;
  justify-content: center;
  z-index: 10;
}

#glass {
  position: absolute;
  padding-top: 1rem;
  padding-inline: 2rem;
  bottom: 0.7rem;
  right: -5%;
  width: 110%;
  height: 126px;
  background: rgba(5, 57, 48, 0.14);
  border-radius: 16px;
  backdrop-filter: blur(48px);
  font-family: BarlowRegula;
}
</style>
