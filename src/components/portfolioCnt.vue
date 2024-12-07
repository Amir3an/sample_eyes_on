<template>
  <div class="w-[80%] m-auto relative portfolio-slider text-white p-8">
    <div class="w-full">
      <h2 class="text-4xl font-bold mb-6">Portfolio</h2>
      <div class="swiper-navigation">
        <button class="swiper-button-prev">
          <i class="fas fa-arrow-left"></i>
        </button>
        <button class="swiper-button-next">
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
    <swiper
      :slides-per-view="1"
      :space-between="135"
      :breakpoints="{
        480: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }"
      loop
      :navigation="{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }"
    >
      <swiper-slide
        class="rounded-3xl"
        v-for="(item, index) in slides"
        :key="index"
      >
        <div class="relative rounded-3xl shadow-lg overflow-visible mx-5">
          <img
            :src="item.image"
            alt="Design"
            class="w-full h-[395px] object-cover rounded-3xl"
          />
          <div id="glass">
            <p class="text-lg font-normal text-[#F1EDBA]">Graphic Design</p>
            <h6 class="text-xl mt-2 font-bold">{{ item.title }}</h6>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import slid1 from "../assets/img/";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        {
          title: "A brand 3d Design Characteristic for growth",
        },
        {
          title: "A brand 3d Design Characteristic for growth",
        },
        {
          title: "A brand 3d Design Characteristic for growth",
        },
        {
          title: "A brand 3d Design Characteristic for growth",
        },
      ],
    };
  },
};
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
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
