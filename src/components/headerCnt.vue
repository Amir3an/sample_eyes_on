<template>
  <div class="relative">
    <!-- تصویر پس‌زمینه -->
    <img
      class="z-[-99] object-cover mt-10 w-full h-full"
      src="../assets/img/2.png"
      alt="Background"
    />

    <button
      class="flex items-center justify-center w-[224px] h-[59px] m-auto mt-[-13.5rem] text-white rounded-[32px] bg-[#061836B2] border border-[#EEE8A9] text-2xl"
    >
      <span class="w-4 h-4 mr-3 rounded-full bg-[#99DDE5]"></span> open to work
    </button>

    <!-- محتوای اصلی -->
    <div
      id="cnt"
      ref="observeItem"
      :class="{ visible: isVisible }"
      class="w-[80%] absolute left-[10%] top-[8px] flex items-center justify-between h-10 opacity-0 transform -translate-y-20 transition-all duration-1000"
    >
      <!-- متن لوگو -->
      <div class="flex flex-shrink-0 gap-2 items-center text-white">
        <span><EyesOn /></span>
        <h2
          class="font-Bangla-Sangam-MN text-shadow-custom font-[700] tracking-wider text-xl flex-shrink-0"
        >
          EyesOn
        </h2>
      </div>
      <victot1
        class="absolute z-[-9] w-[13.54288rem] top-[-100px] h-[28.60231rem] blur-[110px] left-[41.5%]"
      />

      <!-- منو -->

      <ul class="flex w-[395px] ml-5 justify-between">
        <li>
          <a class="text-xl font-normal cursor-pointer text-[#FFFFFF]">Home</a>
        </li>
        <li>
          <a class="text-xl font-normal cursor-pointer text-[#FFFFFF]"
            >Services</a
          >
        </li>
        <li>
          <a class="text-xl font-normal cursor-pointer text-[#FFFFFF]"
            >Portfolio</a
          >
        </li>
      </ul>
      <!-- متن متحرک با انیمیشن translateY -->
      <div class="relative items-center overflow-hidden h-8">
        <div
          class="relative transition-all mt-0 duration-700 leading-none ease-in-out"
          :style="{
            transform: `translateY(${activeIndex * -16.2}%)`,
          }"
        >
          <p
            v-for="(text, index) in texts"
            :key="index"
            class="text-lg pt-1 text-[#F1EDBA] flex items-center justify-center"
          >
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EyesOn from "../assets/svg-icon/EyesOn.vue";
import victot1 from "../assets/motion/victot1.vue";
import headerMotion from '../assets/motion/headerMotion.vue';
export default {
  components: {
    EyesOn,
    victot1,
    headerMotion
  },
  data() {
    return {
      isVisible: false, // مدیریت نمایش عنصر
      observer: null, // رفرنس به IntersectionObserver
      texts: [
        "Motion Graphics",
        "VFX & Effects",
        "2D 3D Animation",
        "Social Media Content",
        "Video Editting",
        "Graphic Design",
      ], // متن‌های متحرک
      activeIndex: 0, // شاخص متن فعال
    };
  },
  mounted() {
    // ایجاد IntersectionObserver
    this.observer = new IntersectionObserver(this.handleIntersect, {
      threshold: 0.1, // وقتی ۱۰٪ از عنصر دیده شود
    });

    // شروع مشاهده عنصر بعد از آماده شدن DOM
    this.$nextTick(() => {
      const el = this.$refs.observeItem;
      if (el) {
        this.observer.observe(el);
      }
    });

    // شروع تایمر برای چرخش متن
    setInterval(this.nextText, 2500); // هر ۳ ثانیه متن تغییر کند
  },
  methods: {
    handleIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isVisible = true; // وقتی عنصر در viewport قرار بگیرد
        }
      });
    },
    nextText() {
      // چرخش به متن بعدی
      this.activeIndex = (this.activeIndex + 1) % this.texts.length;
    },
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect(); // توقف مشاهده
    }
  },
};
</script>

<style scoped>
/* استایل‌های اصلی */
#cnt {
  transition: transform 1s, opacity 1s ease-in-out;
  opacity: 0;
  transform: translateY(-80px);
}

#cnt.visible {
  opacity: 1;
  transform: translateY(0);
}

/* استایل‌های فونت و متن */
/* div {
  font-family: BanglaSanga;
}

ul li a {
  font-family: BarlowRegula;
} */
</style>
