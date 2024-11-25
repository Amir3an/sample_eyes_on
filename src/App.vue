<template>
  <header>
    <headerCnt />
  </header>
</template>

<script>
import headerCnt from "./components/headerCnt.vue";

export default {
  components: {
    headerCnt,
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

body {
  background-color: rgba(0, 0, 12, 1);
}
#app {
  width: 100%;
  height: 100%;
  font-family: Bangla Sangam MN;
  margin: auto;
}
</style>
