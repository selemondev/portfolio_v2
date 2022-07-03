<script>
export default {
    name: "Navbar",
    data() {
        return {
            mobile: false,
            mobileNav: null,
            windowWidth: null,
        }
    },
    created() {
        window.addEventListener("resize",this.checkScreenSize);
        return this.checkScreenSize();
    },
    methods: {
        rotate() {
            this.mobileNav = !this.mobileNav;
        },
        checkScreenSize() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 768) {
                return this.mobile = true;
            } else {
                this.mobile = false;
                this.mobileNav = false;
            }
        }
    }
}
</script>
<script setup>
import { onMounted } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { SunIcon, MoonIcon} from "@heroicons/vue/solid";
import AOS from "aos";
onMounted(() => {
    AOS.init();
});

const dark = useDark();
const toggle = useToggle(dark);
</script>
<template>
<header>
    <nav class="w-full h-14 py-2 px-2 flex justify-between items-center fixed top-0 dark:bg-[#10101A] bg-white border-b dark:border-gray-800 border-gray-200 z-20 md:px-8">
        <div>
            <h3 class="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-pink-400 via-bue-500 to-purple-500 background-animate font-Splash md:text-2xl">Atharva</h3>
        </div>

        <div v-show="!mobile" class="flex justify-center items-center space-x-4">
            <ul class="space-x-6 hidden md:inline-flex">
                <li class="list-tags" data-aos="fade-left" data-aos-duration="1000"><a href="#hero" v-smooth-scroll="{ duration: 1500}" class="font-bold dark:text-white dark:hover:text-purple-500 hover:text-purple-500  duration-200 ease-in">Home</a></li>
                <li class="list-tags" data-aos="fade-left" data-aos-duration="1500"><a href="#about" v-smooth-scroll="{ duration: 1500}" class="font-bold dark:text-white dark:hover:text-purple-500 hover:text-purple-500  duration-200 ease-in">About</a></li>
                <li class="list-tags" data-aos="fade-left" data-aos-duration="1300"><a href="#works" v-smooth-scroll="{ duration: 1500}" class="font-bold dark:text-white dark:hover:text-purple-500 hover:text-purple-500  duration-200 ease-in">Projects</a></li>
                <li class="list-tags" data-aos="fade-down" data-aos-duration="1500"><a href="#contact" v-smooth-scroll="{ duration: 1500}" class="font-bold dark:text-white dark:hover:text-purple-500 hover:text-purple-500  duration-200 ease-in">Contact</a></li>
            </ul>

        <div>
            <SunIcon @click="toggle()" v-if="dark" class="dark:text-white text-black h-8 w-8"/>
            <MoonIcon @click="toggle()" v-else class="dark:text-white text-black h-8 w-8"/>
         </div>
        </div>   

        <div class="flex justify-center items-center space-x-2" v-show="mobile" >     
        <div>
            <SunIcon @click="toggle()" v-if="dark" class="dark:text-white text-black h-6 w-6"/>
            <MoonIcon @click="toggle()" v-else class="dark:text-white text-black h-6 w-6"/>
         </div>
        <div :class="{'rotate' : mobileNav}" @click="rotate">
                <div class="box1 bg-black dark:bg-white"></div>
                <div class="box2 bg-black dark:bg-white"></div>
                <div class="box3 bg-black dark:bg-white"></div>
         </div>
         </div>

        <transition name="mobileNav" class="animation">
                <ul v-show="mobileNav" class="sidebar space-y-6 px-4 py-2 dark:bg-black bg-white">
                   <h3 class="pt-2 text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-pink-400 via-bue-500 to-purple-500 background-animate font-Splash md:text-2xl">Atharva</h3>
                <li><a href="#hero" v-smooth-scroll="{ duration: 1500}" class="mobileNav-tags">Home</a></li>
                <li><a href="#about" v-smooth-scroll="{ duration: 1500}" class="mobileNav-tags">About</a></li>
                <li><a href="#works" v-smooth-scroll="{ duration: 1500}" class="mobileNav-tags">Projects</a></li>
                <li ><a href="#contact" v-smooth-scroll="{ duration: 1500}" class="mobileNav-tags">Contact</a></li>
            </ul>
        </transition>
        
    </nav>
</header>
</template>

<style scoped>
.mobileNav-enter-active,
.mobileNav-leave-active {
      transition: 1s ease all;
}
.mobileNav-enter-from,
.mobileNav-leave-to {
      transform: translateX(-250px);
    }
.mobileNav-enter-to {
      transform: translateX(0)
}
</style>