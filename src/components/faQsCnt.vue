<template>
  <div class="flex w-[80%] bg-red-200 justify-between m-auto">
    <!-- بخش سمت چپ -->
    <article class="w-[30%] flex flex-col gap-12">
      <h2 class="text-5xl font-bold">FAQs</h2>
      <p class="text-xl">
        Detailed information about our motion graphics and animation services,
        including examples and benefits.
      </p>
      <button class="w-fit text-xl text-[#0091A4]">Support</button>
    </article>

    <!-- بخش سوالات -->
    <div class="w-[70%] h-[364px]">
      <details
        v-for="(item, index) in questions"
        :key="index"
        class="faq-item rounded-lg bg-[#05393024] text-white p-4 group"
        @toggle="handleToggle($event)"
      >
        <!-- هدر سوال -->
        <summary
          class="flex justify-between items-center cursor-pointer text-lg font-semibold list-none"
        >
          <span>{{ index + 1 }}) {{ item.question }}</span>
          <span
            class="relative flex items-center justify-center w-8 h-8 rounded-full text-center border border-[#EEE8A9] bg-[#292D32] group-open:bg-[#005555] transition-colors"
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
            "SEO is best described as Search Engine Optimization; it's the process of optimizing your website to rank higher in search engine result pages...",
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
}
/* انیمیشن ارتفاع برای باز و بسته شدن */
.faq-content {
  height: 0;
  overflow: hidden;
  transition: height 0.2s ease-in;
}
</style>
