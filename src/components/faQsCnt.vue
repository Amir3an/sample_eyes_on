<template>
  <div class="w-[80%] m-auto">
    <article class="flex flex-col m-auto gap-12">
      <h2 class="text-5xl font-bold">FAQs</h2>

      <p class="text-xl">
        Detailed infortmation about our motion graphics and animation services,
        including examples and benefits.
      </p>

      <button class="w-fit mb-6 text-xl text-[#0091A4]">Support</button>
    </article>
    <div>
      <!-- حلقه برای ایجاد سوالات -->
      <div
        v-for="(item, index) in questions"
        :key="index"
        class="rounded-lg bg-[#05393024] text-white p-4"
      >
        <!-- هدر سوال -->
        <div
          class="flex justify-between items-center cursor-pointer"
          @click="toggle(index)"
        >
          <h3 class="text-lg font-semibold">
            {{ index + 1 }}) {{ item.question }}
          </h3>
          <!-- علامت باز و بسته شدن -->
          <span class="w-6 h-6 rounded-full text-center leading-6 border border-[#EEE8A9] text-xl font-bold">
            {{ openIndex === index ? "-" : "+" }}
          </span>
        </div>
        <!-- بدنه پاسخ -->
        <div
          v-if="openIndex === index"
          class="mt-2 text-sm text-gray-300 leading-relaxed"
        >
          <p>{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      openIndex: null, // تعیین ایندکس سوال باز
      questions: [
        {
          question: "What is SEO, and why is it important?",
          answer:
            "SEO is best described as Search Engine Optimization; it's the process of optimizing your website to rank higher in search engine result pages... Key elements include keyword research, on-page optimization, backlinks, and content quality.. Key elements include keyword research, on-page optimization, backlinks, and content quality..",
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
      ],
    };
  },
  methods: {
    toggle(index) {
      // باز یا بسته کردن سوال
      this.openIndex = this.openIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
article {
  font-family: BanglaSanga;
  color: white;
}
</style>
