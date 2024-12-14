<template>
  <div class="w-[80%] m-auto">
    <h2 class="text-[56px] font-bold leading-tight w-[100%]">Contact us</h2>
    <form class="w-[816px] p-8 mt-[5%] h-auto rounded-3xl bg-[#70F9E014]">
      <div class="flex items-center justify-between">
        <div class="w-[48%] flex flex-col">
          <label for="username" class="text-xl">First Name</label>
          <input
            placeholder="Sara"
            id="username"
            class="bg-[#99DDE52E] text-xl p-[18px] h-12 rounded-lg mt-3 outline-none"
            type="text"
          />
        </div>
        <div class="w-[48%] flex flex-col">
          <label for="lastusername" class="text-xl">Last Name</label>
          <input
            placeholder="Abbaszabeh"
            id="lastusername"
            class="bg-[#99DDE52E] text-xl p-[18px] h-12 rounded-lg mt-3 outline-none"
            type="text"
          />
        </div>
      </div>
      <div class="w-full mt-[5%] flex flex-col">
        <lable for="emailaddres" class="text-xl">Email Address</lable>
        <input
          placeholder="__________________@gmail.com"
          id="emailaddres"
          class="bg-[#99DDE52E] text-xl p-[18px] h-12 rounded-lg mt-3 outline-none"
          type="text"
        />
      </div>
      <div class="flex mt-[5%] items-center justify-between">
        <div class="w-[48%] flex flex-col">
          <label for="phonenumber" class="text-xl">Phone Number</label>
          <input
            id="phonenumber"
            class="bg-[#99DDE52E] text-xl p-[18px] h-12 rounded-lg mt-3 outline-none"
            type="text"
          />
        </div>
        <div class="w-[48%] flex flex-col">
          <label for="message" class="text-xl">Message</label>
          <input
            id="message"
            class="bg-[#99DDE52E] text-xl p-[18px] h-12 rounded-lg mt-3 outline-none"
            type="text"
          />
        </div>
      </div>
      <button
        class="flex items-center pt-1 justify-evenly w-[183px] mt-5 h-14 border border-[#F1EDBA] text-[#F1EDBA] text-xl bg-[#002C3F] rounded-[32px]"
      >
        Send Form
        <span
          class="w-8 h-8 content-center place-items-center border rounded-full border-[#F1EDBA]"
          ><arrowRight
        /></span>
      </button>
    </form>
  </div>
  <div class="relative w-full h-screen overflow-hidden bg-black">
    <!-- Vector 1 -->
    <div
      class="absolute top-0 left-[58%] w-[120px] h-[1080px] rotate-[45deg] opacity-[0.3] blur-[16px] bg-gradient-to-br from-[rgba(30,120,101,0.5)] via-transparent to-[rgba(83,162,255,0)] shadow-[0_0_40px_rgba(30,120,101,0.2)] animate-slow-move"
    ></div>

    <!-- Vector 2 -->
    <div
      class="absolute top-0 left-[72%] w-[180px] h-[1080px] rotate-[45deg] opacity-[0.4] blur-[16px] bg-gradient-to-br from-[rgba(83,162,255,0.5)] via-transparent to-[rgba(30,120,101,0)] shadow-[0_0_50px_rgba(83,162,255,0.3)] animate-slow-move delay-100"
    ></div>

    <!-- Vector 3 -->
    <div
      class="absolute top-0 left-[80%] w-[120px] h-[1080px] rotate-[45deg] opacity-[0.25] blur-[18px] bg-gradient-to-br from-[rgba(30,120,101,0.4)] via-transparent to-[rgba(83,162,255,0)] shadow-[0_0_60px_rgba(30,120,101,0.2)] animate-slow-move delay-200"
    ></div>

    <!-- Vector 4 -->
    <div
      class="absolute top-0 left-[93%] w-[110px] h-[1080px] rotate-[45deg] opacity-[0.35] blur-[18px] bg-gradient-to-br from-[rgba(83,162,255,0.5)] via-transparent to-[rgba(30,120,101,0)] shadow-[0_0_70px_rgba(83,162,255,0.3)] animate-slow-move delay-300"
    ></div>
  </div>
</template>

<script>
import arrowRight from "../assets/svg-icon/arrow-right.vue";

export default {
  components: {
    arrowRight,
  },
};
</script>

<style scoped>
h2 {
  font-family: Bangla-Sangam-MN;
}

div {
  color: white;
}

input {
  color: #ffffff;
}

#vector {
  background: linear-gradient(
    35deg,
    rgba(30, 120, 101, 0.212) 0%,
    rgba(83, 162, 255, 0) 100%
  );
  opacity: 0.5;
}
#vector-2 {
  background: linear-gradient(
    35deg,
    rgba(30, 120, 101, 0.212) 0%,
    rgba(83, 162, 255, 0) 100%
  );
  opacity: 0.5;
}
#vector-3 {
  background: linear-gradient(
    35deg,
    rgba(30, 120, 101, 0.212) 0%,
    rgba(83, 162, 255, 0) 100%
  );
  opacity: 0.5;
}

#vector-4 {
  background: linear-gradient(
    35deg,
    rgba(30, 120, 101, 0.212) 0%,
    rgba(83, 162, 255, 0) 100%
  );
  opacity: 0.5;
}
</style>
