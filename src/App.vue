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
</template>

<script>
import headerCnt from "./components/headerCnt.vue";
import navCnt from "./components/navCnt.vue";
import fstContent from "./components/fstContent.vue";
import secContent from "./components/secContent.vue";
import portfolioCnt from "./components/portfolioCnt.vue";
import eyseOnCnt from "./components/eyseOnCnt.vue";

export default {
  components: {
    headerCnt,
    navCnt,
    fstContent,
    secContent,
    portfolioCnt,
    eyseOnCnt,
  },
};
</script>

<style>
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
  font-family: Bangla Sangam MN;
  margin: auto;
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
</style>
