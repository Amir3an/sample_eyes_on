<template>
  <img
    class="relative z-[-99] object-cover w-full h-full"
    src="../assets/img/1.png"
  />
  <div
    id="cnt"
    class="w-[80%] absolute left-[10%] top-12 flex items-center justify-between h-10"
  >
    <p class="text-white text-xl">EyesOn</p>
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

    <p class="text-[#F1EDBA]">Motion Graphics</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false, // مدیریت نمایش متن
      observer: null,
    };
  },
  mounted() {
    console.log("Component mounted, setting up observer");

    // ایجاد یک Observer برای مشاهده‌ی تغییرات در عنصر
    this.observer = new IntersectionObserver(this.handleIntersect, {
      threshold: 0.1, // وقتی 10 درصد از عنصر دیده شود، تریگر می‌شود
    });

    this.$nextTick(() => {
      const el = this.$refs.observeItem; // گرفتن رفرنس عنصر
      if (el) {
        this.observer.observe(el); // شروع مشاهده‌ی عنصر
      }
    });
  },
  methods: {
    handleIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isVisible = true; // نمایش عنصر وقتی که در viewport قرار می‌گیرد
        }
      });
    },
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
};
</script>
<style scoped>
#cnt {
  transition: transform 2s, opacity 3s;
  opacity: 1;
  transform: translateY(-80px);
}

#cnt.visible {
  opacity: 1;
  transform: translateY(0);
}

div {
  font-family: BanglaSanga;
}

ul li a {
  font-family: BarlowRegula;
}
</style>
