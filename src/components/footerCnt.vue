<template>
  <footer class="absolute w-full h-[233px] bg-[rgba(255, 255, 255, 1)]">
    <EyesOn />
  </footer>
</template>

<script>
import EyesOn from "../assets/svg-icon/EyesOn.vue";

export default {
  components: {
    EyesOn,
  },
};
</script>

<style scpeed>
footer {
  backdrop-filter: blur(20.9px);
  background: rgba(112, 249, 224, 0.08);
}
</style>
