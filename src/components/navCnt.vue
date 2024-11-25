<template>
  <div class="m-auto">
    <div id="gradiant">
      <h2
        class="text-white text-5xl font-bold m-auto w-[80%]"
        id="cnt"
        ref="observeItem"
        :class="{ visible: isVisible }"
      >
        What is our <br />
        mission
      </h2>
    </div>

    <p class="w-[156px] h-[154px] bg-[#70F9E01A] blur-[10px] rounded-2xl"></p>
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

#gradiant {
  position: absolute;
  width: 100%;
  background: linear-gradient(to bottom, #030e2100, #00000c);
}
</style>
