<template>
  <div class="w-[80%] m-auto">
    <h2 class="text-[56px] font-bold leading-tight w-[100%]">Contact us</h2>
    <form class="w-[60%] p-8 mt-[5%] h-auto rounded-3xl bg-[#70F9E014]">
      <div class="flex items-center justify-between">
        <div class="w-[48%] flex flex-col">
          <label for="username" class="text-xl">First Name</label>
          <input
            id="username"
            class="bg-[#99DDE52E] text-xl p-[18px] h-12 rounded-lg mt-3 outline-none"
            type="text"
          />
        </div>
        <div class="w-[48%] flex flex-col">
          <label for="lastusername" class="text-xl">Last Name</label>
          <input
            id="lastusername"
            class="bg-[#99DDE52E] text-xl p-[18px] h-12 rounded-lg mt-3 outline-none"
            type="text"
          />
        </div>
      </div>
      <div class="w-full mt-[5%] flex flex-col">
        <lable for="emailaddres" class="text-xl">Email Address</lable>
        <input
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
        class="w-[183px] text-xl mt-5 h-14 bg-[#002C3F] border border-[#F1EDBA] rounded-[32px]"
      >
        Send Form
      </button>
    </form>
  </div>
  <div
    class="absolute top-0 left-[50%] w-[114.76px] h-[1079.27px] rotate-45 bg-red-100"
  ></div>
</template>

<script>
export default {};
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
</style>
