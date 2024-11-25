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
  src: url("./assets/fonts/BanglaSangaMN.ttf");
}

body {
  /* background: rgba(0, 0, 12, 1); */
  background: rgb(207, 207, 207);
}
#app {
  width: 100%;
  height: 100%;
  font-family: Bangla Sangam MN;
  margin: auto;
}
</style>
