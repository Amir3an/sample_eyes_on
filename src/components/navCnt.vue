<template>
  <div class="w-[80%] flex m-auto">
    <div>
      <h1
        class="text-white text-5xl leading-tight font-extrabold w-[100%]"
        id="cnt1"
        ref="observeItem"
        :class="{ visible: isVisible }"
      >
        What is our <br />
        mission
      </h1>
    </div>

    <div class="relative ml-[10%]">
      <div id="card-background"></div>
      <div class="w-[553px] flex items-center justify-between">
        <p
          id="card"
          class="w-[156px] h-[154px] bg-[#70F9E01A] backdrop-blur-[21px] rounded-2xl"
        >
          <Person />
          <span class="text-xl font-semibold text-white">
            Increase<br />
            Engagement
          </span>
        </p>
        <p
          id="card"
          class="w-[156px] h-[154px] bg-[#70F9E01A] backdrop-blur-[21px] rounded-2xl"
        >
          <Globe />
          <span class="text-xl font-semibold text-white">
            Increase<br />
            Engagement
          </span>
        </p>
        <p
          id="card"
          class="w-[156px] h-[154px] bg-[#70F9E01A] backdrop-blur-[21px] rounded-2xl"
        >
          <span class="text-xl font-semibold text-white">
            Increase<br />
            Engagement
          </span>
        </p>
      </div>
      <div class="w-[353px] mt-8 flex items-center justify-between">
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
        >
          <span class="text-xl font-semibold text-white">
            Increase<br />
            Engagement
          </span>
        </p>
      </div>
    </div>
    <h2 class="text-white text-xl font-normal ml-[-9rem] mt-72">
      Detailed infortmation about our motion graphics and<br />
      animation services, including examples and benefits.<br />
      Detailed infortmation about our motion.
    </h2>
  </div>
</template>
<script>
import Person from "../assets/svg-icon/Person.vue";
import Globe from "../assets/svg-icon/Globe.vue";
import favoriteChart from "../assets/svg-icon/favorite-chart.vue";
export default {
  components: {
    Person,
    Globe,
    favoriteChart,
  },
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
#cnt1 {
  margin-top: -79px;
  margin-right: 15px;
  font-family: BarlowRegula;
}

h2 {
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
  left: -10rem;
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
