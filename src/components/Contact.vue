<script setup>
import Twitter from './Icons/Twitter.vue';
import Github from "./Icons/Github.vue";
import { onMounted } from 'vue';
import AOS from "aos";
onMounted(() => {
    AOS.init()
})
</script>
<template>
<section id="contact" class="h-full w-full flex flex-col mt-32 border-t dark:border-gray-800 border-gray-200 md:mt-10 md:px-10 md:space-x-10">

     <div class="self-start pt-10 flex justify-center px-4 items-center space-x-4">
        <span class="bg-purple-500 h-2 w-2 rounded-full"></span>
         <h1 class="dark:text-white text-2xl lg:text-left lg:text-3xl">Contact</h1>
    </div>

    <div class="grid place-items-center md:pt-10">
         <div class="space-y-2">
          <h1 class="dark:text-gray-400 text-gray-600 px-4 text-xl mt-4 text-center md:text-3xl">
            I love to chat with like-minded people. Have a project you think I’d be a good fit for or just want to say hi?
          </h1>
         </div>

         <div class="flex justify-center items-center space-x-4 mt-2 py-4">
            <a href="https://twitter.com/atharvatwts" target="_blank"><Twitter class="icon-style" data-aos="fade-up" data-aos-duration="1000"/></a>
            <a href="https://github.com/36atharva" target="_blank"><Github class="icon-style" data-aos="fade-up" data-aos-duration="1500"/></a>
         </div>
         
    </div>
</section>
</template>