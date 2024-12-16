<template>
  <footer class="absolute w-full h-[233px]">
    <div class="flex w-[80%] h-full m-auto justify-between">
      <div class="flex justify-between items-center">
        <EyesOn class="w-[10.75rem] h-[7.8rem]" />
        <article class="ml-4">
          <h2 class="text-3xl">Exelence In Every Detail</h2>
          <p>
            Detailed information about our motion graphics and animation
            services, including examples and benefits.
          </p>
        </article>
      </div>

      <div>
        <h3>Links</h3>
        <div class="flex gap-8">
          <button><span>Home page</span></button>
          <button><span>Services</span></button>
          <button><span>Portfolio</span></button>
        </div>
      </div>
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
