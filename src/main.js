import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/normalize.css"; //重置样式
import "@/assets/css/global.css"; //公共样式

createApp(App).use(router).mount("#app");
