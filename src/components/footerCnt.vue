<template>
  <footer class="absolute w-full h-[233px] bg-[rgba(255, 255, 255, 1)]">
    <div class="w-[80%]">
      <EyesOn class="w-[10.75rem] h-[7.8rem]" />
      <h2>Exelence In Every Detail</h2>
      <p>
        Detailed information about our motion graphics and animation services,
        including examples and benefits.
      </p>
    </div>
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
  color: #fff;
}
</style>
