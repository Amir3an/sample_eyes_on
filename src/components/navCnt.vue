<template>
  <div class="w-[80%] bg-red-300 m-auto">
    <h2 class="text-white text-5xl font-bold">
      What is our <br />
      mission
    </h2>
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

<style scoepd>
h2 {
  font-family: BarlowRegula;
}
</style>
