<script setup>
import AOS from "aos";
import { onMounted } from "vue";
onMounted(() => {
    AOS.init()
});
</script>
<template>
<section class="h-96 w-full flex justify-between flex-col items-center mt-10 border-t border-gray-800 md:px-10 md:space-x-10 md:mt-28 md:flex-row">
     <div class="self-start pt-12 flex justify-center px-4 items-center space-x-4">
        <span class="bg-purple-500 h-2 w-2 rounded-full"></span>
         <h1 class="text-white text-2xl lg:text-left lg:text-3xl">Skills</h1>
    </div>

    <div class="w-80 h-72 pt-4 px-4 text-left space-y-6 self-center mb-10 md:self-start md:pt-10">
         <div class="space-y-2"  data-aos="fade-up" data-aos-duration="500">
          <h1 class="text-white font-bold">UI Design</h1>
          <p class="text-gray-300">With my in-depth knowledge of design concepts I can simply identify your needs and properly create amazing and appealing User Interfaces.</p>
         </div>
         
         <div class="space-y-2" data-aos="fade-up" data-aos-duration="1000">
          <h1 class="text-white font-bold">Frontend Skills</h1>
          <p class="text-gray-300">I use React and CSS to bring your ideas to life.</p>
         </div>

           <div class="space-y-2"  data-aos="fade-up" data-aos-duration="1500">
          <h1 class="text-white font-bold">SEO</h1>
          <p class="text-gray-300">SEO is crucial because it makes your website more visible, and that means more traffic and more opportunities to convert prospects into customers.</p>
         </div>
    </div>
</section>
</template>