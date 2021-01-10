import VueRouter from "vue-router";
import Vue from "vue";
import Home from "./components/right-half/Home.vue";
import Bio from "./components/right-half/bio/Bio.vue";
import Projects from "./components/right-half/projects/Projects.vue";
import Stack from "./components/right-half/stack/Stack.vue";

Vue.use( VueRouter );

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/bio", component: Bio },
    { path: "/projects", component: Projects },
    { path: "/stack", component: Stack },
    { path: "*", redirect: "/" },
  ]
});

export default router;