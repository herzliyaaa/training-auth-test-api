import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import './assets/main.css'

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");

// Import Bootstrap and BootstrapVue CSS files (order is important)
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import "boxicons/css/boxicons.min.css";
