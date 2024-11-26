<template>
  <div class="w-[80%] m-auto">
    <div class="w-full flex justify-between">
      <h2 class="text-5xl font-bold">Key Projects & Case Studies</h2>
      <button
        class="w-44 h-14 text-[#F1EDBA] text-xl bg-[#002C3F] rounded-[32px]"
      >
        View More
      </button>
    </div>

    <div class="w-full flex mt-12 h-[620px] rounded-3xl bg-red-200">
      <div
        class="w-[50%] flex flex-col gap-8 justify-center h-full rounded-3xl bg-red-200 pl-[5%]"
      >
        <span class="text-[#F1EDBA]">3D Design</span>
        <h2 class="text-3xl font-bold">
          A brand 3d Design<br />
          Characteristic for growth
        </h2>
        <button
          class="w-44 h-14 text-[#F1EDBA] text-xl bg-[#002C3F] rounded-[32px]"
        >
          View Project
        </button>
      </div>
      <img
        class="w-[50%] h-full rounded-3xl object-cover"
        src="../assets/img/card.png"
      />
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
</style>
