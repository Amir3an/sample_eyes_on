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
  <section class="mt-[15%]">
    <secContent />
  </section>
  <!-- <section class="mt-[13%]">
    <portfolioCnt />
  </section> -->
  <section>
    <eyseOnCnt />
  </section>
  <section>
    <faQsCnt />
  </section>
  <section id="contactUs" class="mt-[15%]">
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
}

::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #b6b6b6;
  border-radius: 1rem;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #707070;
  border-radius: 1rem;
}

#contactUs {
  position: relative;
}
</style>
