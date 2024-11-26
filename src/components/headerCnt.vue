<template>
  <div class="relative">
    <!-- تصویر پس‌زمینه -->
    <img
      class="relative z-[-99] object-cover w-full h-full"
      src="../assets/img/1.png"
      alt="Background"
    />

    <!-- محتوای اصلی -->
    <div
      id="cnt"
      ref="observeItem"
      :class="{ visible: isVisible }"
      class="w-[80%] absolute left-[10%] top-12 flex items-center justify-between h-10 opacity-0 transform -translate-y-20 transition-all duration-1000"
    >
      <!-- متن لوگو -->
      <p class="text-white text-xl">EyesOn</p>

      <!-- منو -->
      <ul class="flex w-[395px] ml-10 justify-between">
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

      <!-- متن متحرک با انیمیشن fade -->
      <div class="relative flex items-center justify-center h-8">
        <transition-group name="fade" tag="div" class="relative">
          <p
            v-for="(text, index) in [texts[activeIndex]]"
            :key="index"
            class="text-lg font-bold text-[#F1EDBA] absolute inset-0 flex items-center justify-center"
          >
            {{ text }}
          </p>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    setInterval(this.nextText, 3000); // هر ۳ ثانیه متن تغییر کند
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
/* استایل مربوط به انیمیشن fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

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
div {
  font-family: BanglaSanga;
}

ul li a {
  font-family: BarlowRegula;
}
</style>
