<template>
  <div class="w-[80%] m-auto relative portfolio-slider text-white p-8">
    <div class="w-full">
      <h2 class="text-4xl font-bold mb-6">Portfolio</h2>
      <div class="swiper-navigation">
        <button class="swiper-button-prev" aria-label="Previous slide">
          <i class="fas fa-arrow-left"></i>
        </button>
        <button class="swiper-button-next" aria-label="Next slide">
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
    <swiper
      :modules="[Navigation]"
      :slides-per-view="1"
      :space-between="135"
      :breakpoints="{
        480: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }"
      :loop="slides.length > 3"
      :navigation="{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }"
      preloadImages="false"
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
            @error="onImageError"
          />
          <div id="glass">
            <p class="text-lg font-normal text-[#F1EDBA] font-barlow">
              Graphic Design
            </p>
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
import "swiper/css/navigation";

// Static imports for images
import slide1 from "../assets/img/slide1.png";
import slide2 from "../assets/img/slider2.png";
import slide3 from "../assets/img/slider3.png";
import slide4 from "../assets/img/slider4.png";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        { image: slide1, title: "A brand 3D design characteristic for growth" },
        { image: slide2, title: "A brand 3D design characteristic for growth" },
        { image: slide3, title: "A brand 3D design characteristic for growth" },
        { image: slide4, title: "A brand 3D design characteristic for growth" },
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
