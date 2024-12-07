<template>
  <div class="w-[80%] m-auto relative portfolio-slider text-white p-8">
    <h2 class="text-4xl font-bold mb-6">Portfolio</h2>
    <swiper
      :slides-per-view="1"
      :space-between="155"
      :breakpoints="{
        480: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }"
      navigation
      loop
    >
      <swiper-slide class="ml-3" v-for="(item, index) in slides" :key="index">
        <div class="relative rounded-3xl shadow-lg overflow-hidden">
          <img
            src="../assets/img/slider3.png"
            alt="Design"
            class="w-full h-[395px] object-cover"
          />
        </div>
        <div id="glass">
          <p class="text-sm uppercase text-[#F1EDBA]">Graphic Design</p>
          <h3 class="text-lg font-semibold">{{ item.title }}</h3>
        </div>
      </swiper-slide>
    </swiper>

    <div class="swiper-navigation">
      <button class="swiper-button-prev">
        <i class="fas fa-arrow-left"></i>
      </button>
      <button class="swiper-button-next">
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        {
          image: "@/assets/img/slide1.png",
          title: "A brand 3D Design Characteristic for growth",
        },
        {
          image: "@/assets/img/slide2.png",
          title: "A brand 3D Design Characteristic for growth",
        },
        {
          image: "@/assets/img/slide3.png",
          title: "A brand 3D Design Characteristic for growth",
        },
        {
          image: "@/assets/img/slide4.png",
          title: "A brand 3D Design Characteristic for growth",
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
  padding: 2rem;
  bottom: 0.7rem;
  right: -5%;
  width: 110%;
  height: 126px;
  background: rgba(5, 57, 48, 0.14);
  border-radius: 16px;
  backdrop-filter: blur(48px);
}
</style>
