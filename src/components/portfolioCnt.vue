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
      <swiper-slide v-for="(item, index) in slides" :key="index">
        <div class="rounded-3xl shadow-lg overflow-hidden">
          <img
            src="../assets/img/slider3.png"
            alt="Design"
            class="w-full h-[395px] object-cover"
          />
          <!-- <div class="p-4 bg-gradient-to-b from-gray-800 to-gray-900">
            <p class="text-sm uppercase text-gray-400">Graphic Design</p>
            <h3 class="text-lg font-semibold">{{ item.title }}</h3>
          </div> -->
        </div>
        <p id="glass"></p>
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

#blur {
  position: absolute;
  width: 385px;
  height: 126px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
