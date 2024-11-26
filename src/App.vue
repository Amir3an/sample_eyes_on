<template>
  <header>
    <headerCnt />
  </header>
  <nav class="mt-[20%]">
    <navCnt />
  </nav>
  <section class="mt-[10%]">
    <fstContent />
  </section>
  <section class="mt-[10%]">
    <secContent />
  </section>
</template>

<script>
import headerCnt from "./components/headerCnt.vue";
import navCnt from "./components/navCnt.vue";
import fstContent from "./components/fstContent.vue";
import secContent from "./components/secContent.vue";

export default {
  components: {
    headerCnt,
    navCnt,
    fstContent,
    secContent,
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
