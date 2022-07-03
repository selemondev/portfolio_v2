<script setup>
import Spotify_Img from "../assets/Spotify.jpg";
import Game_Img from "../assets/Game.jpg";
import NFT_Img from "../assets/NFT-min.png";
import { onMounted } from "vue";
import AOS from "aos";
onMounted(() => {
    AOS.init();
})
const projects = [
    {
        id: 1,
        name: "Spotify Clone",
        image: Spotify_Img,
        description: "A Simple and elegant Spotify clone made with React and Firebase Version 9."
    },
    {
        id: 2,
        name: "GamersHub",
        image: Game_Img,
        description: "A Site where gaming enthusiasts can find the latest gaming gadgets and games."
    },
    {
        id: 3,
        name: "NFT Marketplace",
        image: NFT_Img,
        description: "An Nft Market Place made with React that enables you to find and check the price of the latest NFT. "
    }
]
</script>
<template>
<section id="works" class="min-h-screen w-full items-center mt-48 mb-2 border-t border-gray-800 md:h-[120px] md:px-10 md:space-x-10 md:flex-row">
      <div class="grid place-items-start lg:ml-5">
    <div class="self-start pt-10 flex justify-center px-6 items-center space-x-4">
        <span class="bg-purple-500 h-2 w-2 rounded-full"></span>
         <h1 class="text-white text-2xl lg:text-left lg:text-3xl">Recent Works</h1>
    </div>
    </div>

    <div class="flex justify-around items-center flex-wrap mt-10">
    <div v-for="project in projects" :key="project.id" class="w-72 h-82 m-2">
    <div class="grid place-items-center">
        <img :src="project.image" :alt="project.name" class="w-32 h-32 rounded-md mt-2 lg:w-48 lg:h-48" data-aos="fade-up" data-aos-duration="500">
    </div>
    <div>
         <h3 class="font-bold text-white px-4 py-2" data-aos="fade-right" data-aos-duration="1000">{{project.name}}</h3>
         <p class="text-gray-400 px-4 py-2 font-bold" data-aos="fade-up" data-aos-duration="1500">{{project.description}}</p>
         <h3 class="px-4 py-1 font-bold text-purple-500 hover:text-purple-600 cursor-pointer">Preview</h3>
    </div>
    </div>
    </div>
</section>
</template>