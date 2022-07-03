<script setup>
import AOS from "aos";
import { onMounted } from "vue";
onMounted(() => {
    AOS.init()
})
</script>
<template>
<section id="about" class="h-96 w-full flex justify-between flex-col items-center mt-12 border-t dark:border-gray-800 border-gray-200 md:px-10 md:space-x-10 md:mt-28 md:flex-row">
     <div class="self-start pt-10 flex justify-center px-4 items-center space-x-4">
        <span class="bg-purple-500 h-2 w-2 rounded-full"></span>
         <h1 class="dark:text-white text-2xl lg:text-left lg:text-3xl">About</h1>
    </div>

    <div class="w-80 h-72 pt-6 px-4 self-center md:self-start md:pt-10" data-aos="fade-up" data-aos-duration="1000">
         <p class="dark:text-white dark:font-normal font-bold">
          I’m Atharva Hinge a Frontend Developer from Maharashtra, India.
          I specialise in designing and building interface designs for mobile and web-based applications with a focus on simplicity & usability.
          I’m passionate about design and technology and how the two can converge to create experiences for good.
           My interest in Technology started back in 2010 when I was a young boy trying to comprehend how the internet works. Ever since then
           I have admired the complexity of the Internet and how much benefit it brings in our day to day life.
         </p>
    </div>
</section>
</template>