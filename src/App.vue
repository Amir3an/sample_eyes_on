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
body {
  background: rgba(0, 0, 12, 1);
}
#app {
  width: 90%;
  height: 100%;
  font-family: Bangla Sangam MN ;
  margin : auto;
}
</style>
