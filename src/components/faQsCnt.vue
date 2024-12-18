<template>
  <div class="flex w-[80%] justify-between m-auto">
    <!-- بخش سمت چپ -->
    <article class="relative w-[25%] flex flex-col gap-8">
      <div id="blur"></div>
      <h2 class="text-5xl font-bold">FAQs</h2>
      <p class="text-xl">
        Detailed information about our motion graphics and animation services,
        including examples and benefits.
      </p>
      <button class="w-fit text-xl text-[#0091A4]">Support</button>
    </article>

    <!-- بخش سوالات -->
    <div
      class="z-10 relative w-[70%] h-auto group rounded-[25.9px] p-4 bg-[#05393024]"
    >
      <div id="blur-2"></div>
      <div id="blur-3"></div>
      <details
        v-for="(item, index) in questions"
        :key="index"
        class="faq-item text-white p-4"
        @toggle="handleToggle($event)"
      >
        <!-- هدر سوال -->
        <summary
          class="flex justify-between items-center cursor-pointer text-lg font-semibold list-none"
        >
          <span>{{ index + 1 }}) {{ item.question }}</span>
          <span
            class="relative flex items-center justify-center w-8 h-8 rounded-full text-center border border-[#EEE8A9] bg-[#71C3D033] group-open:transition-colors"
          >
            <!-- علامت پلاس -->
            <span
              class="absolute w-4 h-[3px] rounded-xl bg-[#EEE8A9] transition-transform"
            ></span>
            <span
              class="absolute h-4 w-[3px] rounded-xl bg-[#EEE8A9] transition-opacity group-open:opacity-0"
            ></span>
          </span>
        </summary>

        <!-- بدنه پاسخ -->
        <div class="faq-content mt-2 text-sm text-gray-300 leading-relaxed">
          <p>{{ item.answer }}</p>
        </div>
      </details>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: "What is SEO, and why is it important?",
          answer:
            "SEO is best described as Search Engine Optimization; it's the process of optimizing your website to rank higher in the search engine result pages, which will make the website more visible for prospective customers. That is important because with increased visibility comes increased traffic, which may further lead to more conversions and business growth. SEO is important because it helps drive organic traffic to your site, increasing visibility and conversions...",
        },
        {
          question: "How does SEO help my website?",
          answer:
            "SEO is important because it helps drive organic traffic to your site, increasing visibility and conversions...",
        },
        {
          question: "What are the key elements of SEO?",
          answer:
            "Key elements include keyword research, on-page optimization, backlinks, and content quality...",
        },
        {
          question: "How long does it take to see SEO results?",
          answer:
            "SEO results typically take time and can be seen over a period of 3-6 months depending on efforts...",
        },
        {
          question: "How long does it take to see SEO results?",
          answer:
            "SEO results typically take time and can be seen over a period of 3-6 months depending on efforts...",
        },
      ],
    };
  },
  methods: {
    handleToggle(event) {
      const details = event.target;
      const content = details.querySelector(".faq-content");

      if (details.open) {
        const height = content.scrollHeight;
        content.style.height = height + "px";
        setTimeout(() => {
          content.style.height = "auto"; // باز کردن کامل
        }, 300); // مدت زمان انیمیشن
      } else {
        const height = content.scrollHeight;
        content.style.height = height + "px"; // ارتفاع فعلی
        setTimeout(() => {
          content.style.height = "0"; // بسته شدن
        }, 1);
      }
    },
  },
};
</script>

<style scoped>
article {
  font-family: BarlowRegula;
  color: white;
  z-index: 99;
}
/* انیمیشن ارتفاع برای باز و بسته شدن */
.faq-content {
  height: 0;
  overflow: hidden;
  transition: height 0.2s ease-in;
}
#blur {
  position: absolute;
  top: -3.5rem;
  left: -4rem;
  width: 319.44px;
  height: 330.68px;
  background-color: #71c3d033;
  transform: rotate(-55deg);
  filter: blur(150px); /* میزان تاری */
  border-radius: 12px; /* گرد کردن گوشه‌ها */
  padding: 16px;
  z-index: -9;
}

#blur-2 {
  position: absolute;
  top: -3.5rem;
  left: 0;
  width: 319.44px;
  height: 330.68px;
  background-color: #71c3d033;
  transform: rotate(-55deg);
  filter: blur(100px); /* میزان تاری */
  border-radius: 100%; /* گرد کردن گوشه‌ها */
  padding: 16px;
  z-index: -9;
}

#blur-3 {
  position: absolute;
  top: 6.5rem;
  left: -1rem;
  width: 319.44px;
  height: 330.68px;
  background-color: #71c3d033;
  transform: rotate(-55deg);
  filter: blur(150px); /* میزان تاری */
  border-radius: 100%; /* گرد کردن گوشه‌ها */
  padding: 16px;
  z-index: -9;
}
</style>
