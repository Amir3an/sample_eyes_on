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
  color: white;
}
#app {
  width: 90%;
}
</style>
