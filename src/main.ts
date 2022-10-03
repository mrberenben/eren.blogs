import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store, key } from "~/store";

import "~/assets/base.css";

const app = createApp(App);

app.use(router, store, key);

app.mount("#mount");
