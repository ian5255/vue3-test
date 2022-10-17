import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import elementUI from "@/plugins/element-ui"; // element-ui 按需引入

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
elementUI(app);
