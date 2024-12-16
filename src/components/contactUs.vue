<template>
  <div class="w-[80%] m-auto">
    <h2 class="text-[56px] font-bold leading-tight w-[100%]">Contact us</h2>
    <div id="blur"></div>
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
            placeholder="+98   919*******"
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
        class="flex items-center pt-1 justify-evenly w-[183px] ml-auto mt-5 h-14 border border-[#F1EDBA] text-[#F1EDBA] text-xl bg-[#002C3F] rounded-[32px]"
      >
        Send Form
        <span
          class="w-8 h-8 content-center place-items-center border rounded-full border-[#F1EDBA]"
          ><arrowRight
        /></span>
      </button>
    </form>
  </div>
  <div
    id="vector"
    class="absolute top-0 left-[60%] w-[114.76px] h-[1239.27px] blur-[12px] rotate-45"
  ></div>
  <div
    id="vector-2"
    class="absolute top-0 left-[72%] w-[198px] h-[1179.27px] blur-[12px] rotate-45"
  ></div>
  <div
    id="vector"
    class="absolute top-0 left-[80%] w-[114.76px] h-[1179.27px] blur-[12px] rotate-45"
  ></div>
  <div
    id="vector-3"
    class="absolute top-0 left-[86%] w-[85.13px] h-[1255.27px] blur-[12px] rotate-45"
  ></div>
  <div
    id="vector-3"
    class="absolute top-0 left-[93%] w-[85.13px] h-[1255.27px] blur-[12px] rotate-45"
  ></div>
  <div id="blur-2"></div>
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
    rgba(83, 162, 255, 0) 0%,
    rgba(30, 120, 101, 0.212) 100%
  );
  opacity: 0.5;
}

#blur {
  position: absolute;
  left: -200px;
  width: 556px;
  height: 60%;
  background-color: #71c3d04d;
  filter: blur(226px);
  border-radius: 25rem; /* گرد کردن گوشه‌ها */
  z-index: -9;
}

#blur-2 {
  position: absolute;
  right: -200px;
  width: 556px;
  height: 486px;
  background-color: #71c3d04d;
  filter: blur(226px);
  border-radius: 25rem; /* گرد کردن گوشه‌ها */
  z-index: -9;
}
</style>
