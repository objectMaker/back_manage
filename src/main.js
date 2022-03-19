import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/normalize.css"; //重置样式

createApp(App).use(router).mount("#app");
