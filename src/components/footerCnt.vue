<template>
  <footer class="absolute w-full h-[233px]">
    <div class="flex w-[80%] h-full m-auto items-center">
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

      <div class="flex flex-col gap-8">
        <h3 class="text-xl">Links</h3>
        <div class="flex gap-8">
          <button>
            <span class="text-base">Home page</span>
          </button>
          <button><span class="text-base">Services</span></button>
          <button><span class="text-base">Portfolio</span></button>
        </div>
        <div class="flex gap-12">
          <telegramIcon />
          <instagramIcon />
          <linkdenIcon />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import EyesOn from "../assets/svg-icon/EyesOn.vue";
import telegramIcon from "../assets/svg-icon/footer/telegram-icon.vue";
import instagramIcon from "../assets/svg-icon/footer/instagram-icon.vue";
import linkdenIcon from "../assets/svg-icon/footer/linkden-icon.vue";

export default {
  components: {
    EyesOn,
    telegramIcon,
    instagramIcon,
    linkdenIcon,
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
