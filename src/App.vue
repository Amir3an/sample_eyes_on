<template>
  <header>
    <headerCnt />
  </header>
  <nav class="mt-[20%]">
    <navCnt />
  </nav>
  <section class="mt-[15%]">
    <fstContent />
  </section>
  <section class="mt-[15%] observe-section">
    <secContent />
  </section>
  <section class="mt-[13%] observe-section">
    <portfolioCnt />
  </section>
  <section class="observe-section">
    <eyseOnCnt />
  </section>
  <section>
    <faQsCnt />
  </section>
  <section id="contactUs" class="mt-[15%] observe-section">
    <contactUs />
  </section>
  <footer>
    <footerCnt />
  </footer>
</template>

<script>
import headerCnt from "./components/headerCnt.vue";
import navCnt from "./components/navCnt.vue";
import fstContent from "./components/fstContent.vue";
import secContent from "./components/secContent.vue";
import portfolioCnt from "./components/portfolioCnt.vue";
import eyseOnCnt from "./components/eyseOnCnt.vue";
import faQsCnt from "./components/faQsCnt.vue";
import contactUs from "./components/contactUs.vue";
import footerCnt from "./components/footerCnt.vue";

export default {
  components: {
    headerCnt,
    navCnt,
    fstContent,
    secContent,
    portfolioCnt,
    eyseOnCnt,
    faQsCnt,
    contactUs,
    footerCnt,
  },
  mounted() {
    this.setupIntersectionObserver();
  },
  methods: {
    setupIntersectionObserver() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            } else {
              entry.target.classList.remove("visible");
            }
          });
        },
        {
          threshold: 0.5, // حد آستانه 50٪
        }
      );

      const sections = document.querySelectorAll(".observe-section");
      sections.forEach((section) => observer.observe(section));
    },
  },
};
</script>

<style>
@font-face {
  font-family: Bangla-Sangam-MN;
  src: url("./assets/fonts/Bangla-Sangam-MN.ttf");
}
@font-face {
  font-family: BanglaSanga;
  src: url("./assets/fonts/Bangla-Sanga.ttf");
}
@font-face {
  font-family: BarlowRegula;
  src: url("./assets/fonts/Barlow-Regular.ttf");
}

#app {
  width: 100%;
  height: 100%;
  margin: auto;

  @media screen and (min-width: 1920px) {
    width: 1920px;
  }
}

body {
  background-color: rgba(0, 0, 12, 1);
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #252525;
  border-radius: 1rem;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #3b3b3b;
  border-radius: 1rem;
}

.observe-section {
  opacity: 0.6; /* مقدار پیش‌فرض */
  transition: opacity 1s ease-in-out; /* انتقال نرم */
}

.observe-section.visible {
  opacity: 1; /* وقتی در دید کاربر قرار گرفت */
}

#contactUs {
  position: relative;
}

footer {
  position: relative;
  margin-top: 14.4375rem;
}
</style>
