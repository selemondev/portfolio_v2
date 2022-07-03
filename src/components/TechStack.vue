<script setup>
import HTML_png from "../assets/html.png";
import CSS_png from "../assets/css.png";
import Javascript_png from "../assets/javascript.png";
import React_png from "../assets/react-native.png";
import Git_png from "../assets/git.png";
import Figma_png from "../assets/figma.png";
import { onMounted } from "vue";
import AOS from "aos";
onMounted(() => {
    AOS.init();
});
const techStack = [
    {
        id: 1,
        stack: "HTML",
        image: HTML_png
    },
    {
        id: 2,
        stack: "CSS",
        image: CSS_png
    },
    {
        id: 3,
        stack: "Javascript",
        image: Javascript_png
    },
    {
        id: 4,
        stack: "React",
        image: React_png
    },
    {
        id: 5,
        stack: "Git",
        image: Git_png,
    },
    {
        id: 6,
        stack: "Figma",
        image: Figma_png
    }
]
</script>
<template>
<section id="stack" class="h-96 w-full items-center mt-32 border-t dark:border-gray-800 border-gray-200 md:px-10 md:space-x-10 md:mt-28 md:flex-row">
      <div class="grid place-items-start lg:ml-5">
    <div class="self-start pt-10 flex justify-center px-6 items-center space-x-4">
        <span class="bg-purple-500 h-2 w-2 rounded-full"></span>
         <h1 class="dark:text-white text-2xl lg:text-left lg:text-3xl">Tech Stack</h1>
    </div>
    </div>

    <div class="flex justify-around items-center flex-wrap mt-4 md:mt-10">
    <div v-for="stack in techStack" :key="stack.id" class="w-32 h-32 m-1">
    <div class="grid-center">
        <img :src="stack.image" :alt="stack.stack" class="w-20 h-20 rounded-md mt-2 lg:w-32 lg:h-32" data-aos="fade-up" data-aos-duration="500">
    </div>
    <div>
         <h3 class="font-bold dark:text-white text-center px-4 py-2" data-aos="fade-up" data-aos-duration="1500">{{stack.stack}}</h3>
    </div>
    </div>
    </div>
</section>
</template>