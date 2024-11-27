<template>
  <div class="relative liquid-header">
    <!-- تصویر پس‌زمینه -->
    <img
      class="relative z-[-99] object-cover w-full h-full"
      src="../assets/img/1.png"
      alt="Background"
    />

    <!-- افکت لیکویید -->
    <svg class="liquid-effect absolute inset-0 pointer-events-none">
      <filter id="liquid">
        <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
        <feColorMatrix
          in="blur"
          type="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10"
          result="goo"
        />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </svg>

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
      <ul class="flex w-[395px] ml-24 justify-between">
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
            class="text-lg pt-1 font-bold text-[#F1EDBA] flex items-center justify-center"
          >
            {{ text }}
          </p>
        </div>
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
        "Video Editing",
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
    setInterval(this.nextText, 2500); // هر ۲.۵ ثانیه متن تغییر کند

    // اضافه کردن حرکت موس برای افکت لیکویید
    const liquidHeader = document.querySelector(".liquid-header");
    liquidHeader.addEventListener("mousemove", this.handleMouseMove);
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
    handleMouseMove(event) {
      const { clientX, clientY } = event;
      const gooElement = document.querySelector(".liquid-effect");
      gooElement.style.transform = `translate(${clientX / 20}px, ${
        clientY / 20
      }px)`;
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

/* افکت لیکویید */
.liquid-header {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(120deg, #3a3a3a, #1c1c1c);
  animation: glowing 3s infinite alternate;
}

.liquid-effect {
  filter: url(#liquid);
}

@keyframes glowing {
  0% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
  100% {
    box-shadow: 0 0 50px rgba(255, 255, 255, 0.8);
  }
}

/* استایل‌های فونت و متن */
div {
  font-family: BanglaSanga;
}

ul li a {
  font-family: BarlowRegular;
}
</style>
