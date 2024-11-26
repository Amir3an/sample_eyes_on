<template>
  <div class="w-[80%] flex m-auto">
    <div>
      <h2
        class="text-white text-5xl font-bold w-[100%]"
        id="cnt"
        ref="observeItem"
        :class="{ visible: isVisible }"
      >
        What is our <br />
        mission
      </h2>
    </div>

    <div class="relative">
      <div id="card-background"></div>
      <div class="w-[532px] flex items-center justify-between">
        <p
          id="card"
          class="w-[156px] h-[154px] bg-[#70F9E01A] backdrop-blur-[21px] rounded-2xl"
        >
          <span class="text-xl font-semibold text-white">
            Increase<br />
            Engagement
          </span>
        </p>
        <p
          id="card"
          class="w-[156px] h-[154px] bg-[#70F9E01A] backdrop-blur-[21px] rounded-2xl"
        ></p>
        <p
          id="card"
          class="w-[156px] h-[154px] bg-[#70F9E01A] backdrop-blur-[21px] rounded-2xl"
        ></p>
      </div>
      <div class="w-[344px] mt-8 flex items-center justify-between">
        <p
          id="card"
          class="w-[156px] h-[154px] bg-[#70F9E01A] backdrop-blur-[21px] rounded-2xl"
        ></p>
        <p
          id="card"
          class="w-[156px] h-[154px] bg-[#70F9E01A] backdrop-blur-[21px] rounded-2xl"
        ></p>
      </div>
    </div>
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
  margin-top: -79px;
  margin-right: 15px;
  font-family: BarlowRegula;
}

span {
  font-family: BarlowRegula;
}

#card {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  z-index: 9;
}

#card-background {
  position: absolute;
  top: -2rem;
  width: 430px;
  height: 509.16px;
  background-color: #71c3d04d;
  transform: rotate(-90.91deg);
  filter: blur(166px); /* میزان تاری */
  border-radius: 12px; /* گرد کردن گوشه‌ها */
  padding: 16px;
  z-index: -9;
}

/* #gradiant {
  position: absolute;
  width: 100%;
  background: linear-gradient(to bottom, #030e2100, #00000c);
} */
</style>
