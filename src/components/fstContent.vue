<template>
  <div class="w-[80%] flex justify-between m-auto">
    <div class="flex flex-col">
      <EyseOnServices class="w-52 h-52 opacity-10" />
      <div class="flex flex-col gap-7 mt-[-1rem]">
        <h2 class="text-5xl font-bold mb-4">Services</h2>
        <p class="text-xl">
          Detailed infortmation about our motion graphics and<br />
          animation services, including examples and benefits.
        </p>

        <button
          class="flex items-center justify-evenly w-44 h-14 text-[#F1EDBA] text-xl bg-[#002C3F] rounded-[32px]"
        >
          View More
          <span
            class="w-8 h-8 content-center place-items-center border rounded-full border-[#F1EDBA]"
            ><arrowRight
          /></span>
        </button>
      </div>
    </div>

    <div class="w-[594px] h-auto">
      <div id="img" class="rounded-3xl">
        <div
          class="w-full relative h-[180px] px-10 py-8 rounded-3xl bg-[#70F9E01A] backdrop-blur-[21px]"
        >
          <h2 class="text-2xl font-bold">Motion Graphic</h2>
          <p class="text-xl mt-4">
            Detailed infortmation about our motion graphics and<br />
            animation services, including examples and benefits.
          </p>
        </div>
      </div>
      <div id="img" class="rounded-3xl">
        <div
          class="w-full h-[180px] px-10 py-8 mt-5 rounded-3xl bg-[#70F9E01A] backdrop-blur-[21px] brightness-75"
        >
          <h2 class="text-2xl font-bold">2D & 3D Animation</h2>
          <p class="text-xl mt-4">
            Detailed infortmation about our motion graphics and<br />
            animation services, including examples and benefits.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EyseOnServices from "../assets/svg-icon/EyseOn-Services.vue";
import arrowRight from "../assets/svg-icon/arrow-right.vue";
export default {
  components: {
    arrowRight,
    EyseOnServices,
  },
};
</script>

<style scoped>
div {
  font-family: BarlowRegula;
  color: white;
}

button {
  border: 1px solid #f1edba;
}

#blur {
  backdrop-filter: blur(21px);
}

#img {
  background: url("../assets/img/eyseOn1.png");
}
</style>
