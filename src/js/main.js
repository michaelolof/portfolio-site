import Vue from "vue";
import App from "./components/App.vue";
import "./loader.js";
import router from "./routes.js";


new Vue({
  el: "#app",
  router,
  render: h => h(App),
});