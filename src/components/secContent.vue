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

    <div id="img" class="rounded-3xl">
      <div
        class="w-full flex mt-12 h-[620px] rounded-3xl bg-[#70F9E01A] backdrop-blur-[21px]"
      >
        <div id="img" class="w-[50%] h-full bg-[#70F9E01A] rounded-s-3xl">
          <div
            class="w-full bg-[#70F9E01A] backdrop-blur-[21px] relative flex flex-col gap-8 justify-end pb-14 h-full rounded-s-3xl pl-[5%]"
          >
            <span class="text-[#F1EDBA]">3D Design</span>
            <h2 class="text-3xl font-bold">
              A brand 3d Design<br />
              Characteristic for growth
            </h2>
            <p class="text-xl">
              Detailed infortmation about our motion graphics and<br />
              animation services, including examples and benefits.
            </p>
            <button
              class="w-44 h-14 text-[#F1EDBA] text-xl bg-[#002C3F] rounded-[32px]"
            >
              View Project
            </button>
          </div>
        </div>
        <img
          class="w-[50%] h-full rounded-3xl object-cover"
          src="../assets/img/card.png"
        />
      </div>
    </div>

    <div id="img2" class="rounded-3xl">
      <div
        class="w-full flex mt-12 h-[620px] rounded-3xl bg-[#70F9E014] backdrop-blur-[21px]"
      >
        <div id="img2" class="w-[50%] h-full bg-[#70F9E01A] rounded-s-3xl">
          <div
            class="w-full bg-[#70F9E01A] backdrop-blur-[21px] relative flex flex-col gap-8 justify-end pb-14 h-full rounded-s-3xl pl-[5%]"
          >
            <span class="text-[#F1EDBA]">3D Design</span>
            <h2 class="text-3xl font-bold">
              A brand 3d Design<br />
              Characteristic for growth
            </h2>
            <p class="text-xl">
              Detailed infortmation about our motion graphics and<br />
              animation services, including examples and benefits.
            </p>
            <button
              class="w-44 h-14 text-[#F1EDBA] text-xl bg-[#002C3F] rounded-[32px]"
            >
              View Project
            </button>
          </div>
        </div>
        <img
          class="w-[50%] h-full rounded-3xl object-cover"
          src="../assets/img/card2.png"
        />
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

#img {
  background: url("../assets/img/card.png");
}

#img2 {
  background: url("../assets/img/card2.png");
}
</style>
