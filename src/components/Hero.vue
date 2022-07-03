<script setup>
import AOS from "aos";
import { onMounted } from "vue";
onMounted(() => {
    AOS.init()
})
</script>
<template>
<main id="hero" class="mt-16 container mx-auto flex flex-col-reverse items-center px-6 space-y-0 md:mt-24 md:space-y-0 md:flex-row">
    <div class="ml-0 space-y-4 text-center mt-4 lg:ml-6 lg:space-y-6 lg:text-center">
        <div>
            <h4 class="text-gray-300 font-bold">Hi, my name is</h4>
        </div>
        <div>
            <h1 class="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 background-animate lg:text-8xl" data-aos="fade-right" data-aos-duration="1000">Atharva Hinge</h1>
        </div>

        <div>
            <h2 class="text-white text-xl font-extrabold lg:text-3xl" data-aos="fade-up" data-aos-duration="1500">Turning your ideas into real life <span class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-pink-400 via-bue-500 to-purple-500 background-animate lg:3xl">products</span> is my mission</h2>
        </div>

        <div>
            <p class="text-white text-sm font-extrabold lg:text-2xl">
                 An Indian based Frontend Developer with over 2 years of experience. I specialise in designing and building interface designs for mobile and web-based applications with a focus on simplicity & usability.
            </p>
        </div>

        <div>
            <button class="py-3 px-4 focus:outline-none font-bold hover:bg-purple-600 duration-500 ease-out border border-purple-500 text-white rounded-md mt-5 md:mt-0">Download my Resume</button>
        </div>
    </div>
   
</main>
</template>