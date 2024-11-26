<template>
  <div class="w-[80%] flex justify-between m-auto">
    <div class="flex flex-col gap-8">
      <h2 class="text-5xl font-bold mb-4">Services</h2>
      <p class="text-xl">
        Detailed infortmation about our motion graphics and<br />
        animation services, including examples and benefits.
      </p>

      <button
        class="w-44 h-14 text-[#F1EDBA] text-xl bg-[#002C3F] rounded-[32px]"
      >
        View More
      </button>
    </div>

    <div class="w-[594px] h-auto">
      <div id="img" class="rounded-3xl">
        <div
          id="blur"
          class="w-full relative h-[180px] px-10 py-8 rounded-3xl bg-[#70F9E01A]"
        >
          <h2 class="text-2xl font-bold">Motion Graphic</h2>
          <p class="text-xl mt-4">
            Detailed infortmation about our motion graphics and<br />
            animation services, including examples and benefits.
          </p>
        </div>
      </div>
      <div class="w-full h-[180px] px-10 py-8 mt-5 rounded-3xl bg-[#70F9E01A]">
        <h2 class="text-2xl font-bold">2D & 3D Animation</h2>
        <p class="text-xl mt-4">
          Detailed infortmation about our motion graphics and<br />
          animation services, including examples and benefits.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  backdrop-filter: brightness(600%);
  background: url("../assets/img/eyseOn1.png");
}
</style>
