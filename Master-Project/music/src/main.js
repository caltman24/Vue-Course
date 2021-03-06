import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidatePlugin from "@/includes/validation";

import "./assets/css/main.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VeeValidatePlugin);
app.mount("#app");
