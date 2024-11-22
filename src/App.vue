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
.app {
  width: 100%;
  background: rgba(0, 0, 12, 1);
  font-family: Barlow;
  margin : 0;
  padding : 0;
}
#app {
  width: 90%;
  height : 100%;
}
</style>
