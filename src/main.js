import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSmoothScroll from 'vue3-smooth-scroll'
import "./index.css";
import 'aos/dist/aos.css';
const app = createApp(App)
app.use(VueSmoothScroll)
app.use(router)
app.mount('#app')
